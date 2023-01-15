import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Banner, Skills, Experience } from 'pages';

export const Routs: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Banner />} />
			<Route path="/about" element={<About />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/experience" element={<Experience />} />
		</Routes>
	);
};
