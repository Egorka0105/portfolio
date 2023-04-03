export const fitToContainer = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;

	if (window.devicePixelRatio > 1) {
		canvas.width = canvas.clientWidth * 2;
		canvas.height = canvas.clientHeight * 2;
		ctx.scale(2, 2);
	}
};
