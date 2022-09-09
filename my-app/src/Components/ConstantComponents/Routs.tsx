import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from '../Banner/Banner';
import About from '../About/About';
// import Skills from '../Skills/Skills';

// import Experience from '../Experience/Experience';

const Routs = () => {
	return (
		<Routes>
			<Route path="/" element={<Banner />} />
			<Route path="/about" element={<About />} />
			{/* <Route path="/skills" element={<Skills />} /> */}
			{/* <Route path="/experience" element={<Experience />} /> */}
		</Routes>
	);
};

export default Routs;
