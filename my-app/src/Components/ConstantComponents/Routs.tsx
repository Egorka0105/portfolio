import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Routs = () => {
	return (
		<Routes>
			<Route path="" element={<Banner />} />
		</Routes>
	);
};

export default Routs;
