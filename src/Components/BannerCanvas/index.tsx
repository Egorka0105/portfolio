// @ts-nocheck
/* eslint-disable */
import { useEffect, useRef, useLayoutEffect } from 'react';
import TweenLite from 'gsap/TweenLite';
import TweenMax from 'gsap/TweenMax';
import { Plus } from './canvasHelpers';
import clN from './index.module.scss';

export const BannerCanvas = () => {
	const canvasRef = useRef(null);
	const isTablet = window.innerWidth <= 1024;

	const fitToContainer = (canvas: HTMLCanvasElement) => {
		canvas.style.width = '100%';
		canvas.style.height = '100%';
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
	};

	function dist([x1, y1]: [number, number], [x2, y2]: [number, number]) {
		let dx = x1 - x2;
		let dy = y1 - y2;
		return Math.sqrt(dx * dx + dy * dy) || 1;
	}

	useEffect(() => {
		if (canvasRef.current) {
			let c: HTMLCanvasElement = canvasRef.current;
			let context = c.getContext('2d');
			fitToContainer(c);
			if (context) {
				let signs: any = [];
				let gridLength = 40;
				if (isTablet) {
					gridLength = 20;
				}
				let mouse = { x: 0, y: 0 };
				let mouseOver = false;
				let mouseMoved = false;

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

				TweenLite.ticker.addEventListener('tick', draw, { passive: true });

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

				c.addEventListener('mousemove', mouseMove, { passive: true });
				c.addEventListener('touchmove', mouseMove, { passive: true });

				function mouseMove(e: any) {
					if (e.targetTouches && e.targetTouches[0]) {
						e = e.targetTouches[0];
					}
					let rect = c.getBoundingClientRect();
					mouse.x = e.clientX - rect.left;
					mouse.y = e.clientY - rect.top;
					mouseMoved = true;
				}

				c.addEventListener(
					'mouseenter',
					function () {
						mouseOver = true;
					},
					{ passive: true }
				);

				c.addEventListener(
					'touchstart',
					function (e) {
						mouseOver = true;
						mouseMove(e);
					},
					{ passive: true }
				);

				c.addEventListener('mouseleave', mouseLeave, { passive: true });
				c.addEventListener('touchend', mouseLeave, { passive: true });

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

				// window.addEventListener('resize', function () {
				// 	console.log('resize');
				// 	c.width = window.innerWidth;
				// 	c.height = window.innerHeight;
				// 	for (let i = 0; i < gridLength; i++) {
				// 		for (let j = 0; j < gridLength; j++) {
				// 			let min = Math.min(c.width, c.height);
				// 			let sign = signs[i][j];
				// 			sign.left = (c.width / (gridLength + 1)) * (i + 1);
				// 			sign.top = (c.height / (gridLength + 1)) * (j + 1);
				// 			sign.width = min / 50;
				// 			sign.height = min / 50;
				// 		}
				// 	}
				// });

				return () => {
					TweenLite.ticker.removeEventListener('tick', draw);
				};
			}
		}
	}, []);

	return (
		<div className={clN.bannerCanvas}>
			<canvas ref={canvasRef} id="c" />
		</div>
	);
};
