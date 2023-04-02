export interface IPlus {
	x: number;
	y: number;
	top: number;
	left: number;
	height: number;
	width: number;
	scale: number;
	color: string;

	// eslint-disable-next-line no-unused-vars
	draw(ctx: CanvasRenderingContext2D): void;
}

export interface IMouse {
	x: number;
	y: number;
}

export interface ISign {
	left: number;
	top: number;
	width: number;
	scale: number;
	x: number;
	y: number;
}