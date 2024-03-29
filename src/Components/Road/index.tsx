import React, { Component } from 'react';
import road from 'assets/images/road.png';
import finish from 'assets/images/finish.png';
import clN from './index.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
export class Road extends Component {
	private readonly canvasRef: React.RefObject<any>;

	private readonly imgRef: React.RefObject<any>;

	constructor(props: any) {
		super(props);
		this.canvasRef = React.createRef();
		this.imgRef = React.createRef();
	}

	componentDidMount() {
		const canvas = this.canvasRef.current;
		const img = this.imgRef.current;
		const ctx = canvas.getContext('2d');
		const spriteW = 73;
		const spriteH = 86;
		const canvasX = 150;
		const canvasY = 100;
		let cycle = 0;
		setInterval(() => {
			ctx.clearRect(canvasX, canvasY, spriteW, spriteH);
			ctx.drawImage(img, cycle * spriteW, 0, spriteW, spriteH, canvasX, canvasY, spriteW, spriteH);
			cycle = (cycle + 1) % 8;
		}, 120);
	}

	render() {
		return (
			<div className="road">
				<canvas className={clN.road_canvas} width="300" height="200" ref={this.canvasRef}>
					<img alt="road" src={road} ref={this.imgRef} />
				</canvas>
				<img className={clN.finish} width={120} height={60} alt="teem lead" src={finish} />
			</div>
		);
	}
}
