// @ts-nocheck
/* eslint-disable */
import { useEffect, useRef } from 'react';
import TweenLite from 'gsap/TweenLite';
import TweenMax from 'gsap/TweenMax';
import clN from './index.module.scss';

export const BannerCanvas = () => {
	const canvasRef = useRef(null);
	const isTablet = window.innerWidth < 1024;

	let Plus = function() {
		this.x = 0;
		this.y = 0;
		this.top = 0;
		this.left = 0;
		this.height = 0;
		this.width = 0;
		this.scale = 1;
		this.color = '#0f7ccc';
	};

	Plus.prototype.draw = function (ctx) {
		ctx.save();
		ctx.beginPath();
		ctx.setTransform(this.scale, 0, 0, this.scale, this.left + this.x, this.top + this.y);
		ctx.arc(0, 0, 1, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	};
	function fitToContainer(canvas) {
		// canvas.style.width = '100%';
		// canvas.style.height = '100%';
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
	}

	function dist([x1, y1]: [number, number], [x2, y2]: [number, number]) {
		let dx = x1 - x2;
		let dy = y1 - y2;
		return Math.sqrt(dx * dx + dy * dy) || 1;
	}

	useEffect(() => {
		if (canvasRef.current) {
			let c: HTMLCanvasElement = canvasRef.current;
			let context = c.getContext('2d');
			if (context) {
				fitToContainer(c);
				let signs: any = [];
				let gridLength = 40;
				if (isTablet) {
					gridLength = 20;
				}
				let mouse = { x: 0, y: 0 };
				let mouseOver = false;
				let mouseMoved = false;
				c.width = window.innerWidth;
				c.height = window.innerHeight;

				for (let i = 0; i < gridLength; i++) {
					signs[i] = [];
					for (let j = 0; j < gridLength; j++) {
						signs[i][j] = new Plus();
						signs[i][j].left = (c.width / (gridLength + 1)) * (i + 1);
						signs[i][j].top = (c.height / (gridLength + 2)) * (j + 2);
						signs[i][j].width = 2;
						signs[i][j].height = 2;

						let iStart;
						let iEnd;
						let jStart;
						let jEnd;

						if (isTablet) {
							iStart = 0;
							iEnd = 15;
							jStart = 5;
							jEnd = 13;
						} else {
							iStart = 0;
							iEnd = 20;
							jStart = 11;
							jEnd = 27;
						}

						if (i >= iStart && i <= iEnd && j >= jStart && j <= jEnd) {
							signs[i][j].color = 'transparent';
						}
					}
				}

				TweenLite.ticker.addEventListener('tick', draw);

				function draw() {
					context?.clearRect(0, 0, c.width, c.height);

					if (mouseOver && mouseMoved) {
						calculateSigns();
						mouseMoved = false;
					}

					for (let i = 0; i < gridLength; i++) {
						for (let j = 0; j < gridLength; j++) {
							let sign = signs[i][j];
							sign.draw(context);
						}
					}
				}

				function calculateSigns() {
					for (let i = 0; i < gridLength; i++) {
						for (let j = 0; j < gridLength; j++) {
							let sign = signs[i][j];
							let hyp = (Math.min(c.width, c.height) / gridLength) * 2;
							let d = dist([sign.left, sign.top], [mouse.x, mouse.y]);
							let ax = mouse.x - sign.left;
							let ay = mouse.y - sign.top;
							let angle = Math.atan2(ay, ax);
							if (d < hyp + sign.width) {
								hyp = d;
								TweenMax.to(sign, 0.3, { scale: 2.5 });
							} else {
								TweenMax.to(sign, 0.3, { scale: 1 });
							}

							TweenMax.to(sign, 0.3, {
								x: Math.cos(angle) * hyp,
								y: Math.sin(angle) * hyp,
							});
						}
					}
				}

				c.addEventListener('mousemove', mouseMove);
				c.addEventListener('touchmove', mouseMove);

				function mouseMove(e: any) {
					if (e.targetTouches && e.targetTouches[0]) {
						e = e.targetTouches[0];
					}
					let rect = c.getBoundingClientRect();
					mouse.x = e.clientX - rect.left;
					mouse.y = e.clientY - rect.top;
					mouseMoved = true;
				}

				c.addEventListener('mouseenter', function () {
					mouseOver = true;
				});

				c.addEventListener('touchstart', function (e) {
					mouseOver = true;
					mouseMove(e);
				});

				c.addEventListener('mouseleave', mouseLeave);
				c.addEventListener('touchend', mouseLeave);

				function mouseLeave() {
					mouseOver = false;

					for (let i = 0; i < gridLength; i++) {
						for (let j = 0; j < gridLength; j++) {
							let sign = signs[i][j];
							if (!mouseOver) {
								TweenMax.to(sign, 0.3, { x: 0, y: 0, scale: 1 });
							}
						}
					}
				}

				window.addEventListener('resize', function () {
					c.width = container.offsetWidth;
					c.height = container.offsetHeight;
					for (let i = 0; i < gridLength; i++) {
						for (let j = 0; j < gridLength; j++) {
							let min = Math.min(c.width, c.height);
							let sign = signs[i][j];
							sign.left = (c.width / (gridLength + 1)) * (i + 1);
							sign.top = (c.height / (gridLength + 1)) * (j + 1);
							sign.width = min / 50;
							sign.height = min / 50;
						}
					}
				});
			}
		}
	}, [isTablet]);

	return (
		<div className={clN.bannerCanvas}>
			<canvas ref={canvasRef} id="c" />
		</div>
	);
};
