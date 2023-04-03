import { FC } from 'react';
import './index.scss';

export const AboutAnimation: FC = () => {
	const divs = [];

	const generateRandomStyle = () => {
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const delay = Math.random() * 10 - 5;
		return { top: `${top}%`, left: `${left}%`, animationDelay: `${delay}s` };
	};

	const generateClassName = (index: number) => {
		if (index >= 0 && index < 4) return `floating circle`;
		if (index >= 4 && index < 8) return `floating square`;
		if (index >= 8 && index < 12) return `floating triangle`;
		if (index >= 12 && index < 16) return `floating cross`;
		if (index >= 16 && index < 20) return `floating basketball`;
		if (index >= 20 && index < 24) return `floating volleyball`;
		if (index >= 24 && index < 28) return `floating tennis`;
		return `floating basketball`;
	};

	for (let i = 0; i < 28; i++) {
		divs.push(
			<div className={`${generateClassName(i)}`} key={`generateRandomStyle+${i}`} style={generateRandomStyle()} />
		);
	}

	return (
		<div className="back_wrap gradient">
			<div className="back-shapes">{divs}</div>
		</div>
	);
};
