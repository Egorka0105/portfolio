// @ts-nocheck
/* eslint-disable */
import { useRef, FC, useLayoutEffect } from 'react';
import { fitToContainer } from './canvasHelpers';
import { CanvasRef } from './interfaces';
import clN from './index.module.scss';

export const ExperienceCanvas: FC = () => {
	const canvasRef = useRef<CanvasRef>(null);
	let rotation = 0;
	let dots = [];

	useLayoutEffect(() => {
		const canvas: HTMLCanvasElement = canvasRef.current;
		if (!canvas) return;

		const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
		fitToContainer(canvas, ctx);
		let width = canvas.clientWidth;
		let height = canvas.clientHeight;
		const DOTS_AMOUNT = 1000;
		const DOT_RADIUS = 4;
		let GLOBE_RADIUS = width * 0.7;
		let GLOBE_CENTER_Z = -GLOBE_RADIUS;
		let PROJECTION_CENTER_X = width / 2;
		let PROJECTION_CENTER_Y = height / 2;
		let FIELD_OF_VIEW = width * 0.8;
		let requestID = null;

		class Dot {
			constructor(x, y, z) {
				this.x = x;
				this.y = y;
				this.z = z;

				this.xProject = 0;
				this.yProject = 0;
				this.sizeProjection = 0;
			}

			project(sin, cos) {
				const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
				const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
				this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
				this.xProject = rotX * this.sizeProjection + PROJECTION_CENTER_X;
				this.yProject = this.y * this.sizeProjection + PROJECTION_CENTER_Y;
			}

			draw(sin, cos) {
				this.project(sin, cos);
				ctx.fillStyle = 'rgb(17, 125, 204, .7)';
				ctx.beginPath();
				ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fill();
			}
		}

		function createDots() {
			dots.length = 0;

			for (let i = 0; i < DOTS_AMOUNT; i++) {
				const theta = Math.random() * 2 * Math.PI;
				const phi = Math.acos(Math.random() * 2 - 1);

				const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
				const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
				const z = GLOBE_RADIUS * Math.cos(phi) + GLOBE_CENTER_Z;
				dots.push(new Dot(x, y, z));
			}
		}

		const render = (a: DOMHighResTimeStamp) => {
			ctx.clearRect(0, 0, width, height);

			// Increase the globe rotation
			rotation = a * 0.0002;

			const sineRotation = Math.sin(rotation);
			const cosineRotation = Math.cos(rotation);

			// Loop through the dots array and draw every dot
			dots.forEach(item => {
				item.draw(sineRotation, cosineRotation);
			});

			requestID = window.requestAnimationFrame(render);
		};

		function stopRender() {
			window.cancelAnimationFrame(requestID);
		}

		// Function called after the user resized its screen
		function afterResize() {
			stopRender();
			width = canvas.offsetWidth;
			height = canvas.offsetHeight;
			if (window.devicePixelRatio > 1) {
				canvas.width = canvas.clientWidth * 2;
				canvas.height = canvas.clientHeight * 2;
				ctx.scale(2, 2);
			} else {
				canvas.width = width;
				canvas.height = height;
			}
			GLOBE_RADIUS = width * 0.7;
			GLOBE_CENTER_Z = -GLOBE_RADIUS;
			PROJECTION_CENTER_X = width / 2;
			PROJECTION_CENTER_Y = height / 2;
			FIELD_OF_VIEW = width * 0.8;

			createDots(); // Reset all dots
		}

		canvas.addEventListener('resize', afterResize);

		// Populate the dots array with random dots
		createDots();

		// Render the scene
		requestID = requestAnimationFrame(render);

		return () => {
			stopRender();
			canvas.removeEventListener('resize', afterResize);
			cancelAnimationFrame(render);
			cancelAnimationFrame(canvasRef.current);
			canvasRef.current = null;
		};
	}, []);

	return <canvas className={clN.ball} id="#ball" ref={canvasRef} />;
};
