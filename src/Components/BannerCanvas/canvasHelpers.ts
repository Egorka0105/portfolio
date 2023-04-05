import { IPlus } from './interfaces';

// drawn point on the panel - default
export class Plus implements IPlus {
	x = 0;

	y = 0;

	top = 0;

	left = 0;

	height = 0;

	width = 0;

	scale = 1;

	color = '#0f7ccc';

	draw(ctx: CanvasRenderingContext2D) {
		ctx.save();
		ctx.beginPath();
		ctx.setTransform(this.scale, 0, 0, this.scale, this.left + this.x, this.top + this.y);
		ctx.arc(0, 0, 1.3, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
}

export const fitToContainer = (canvas: HTMLCanvasElement) => {
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
	return canvas;
};
