import React from 'react';
import cn from 'classnames';
import Header from './Components/Header/Header';
import MobileBtn from './Components/MobileBtn/MobileBtn';
import clN from './index.module.scss';
import { useAppSelector } from './core/interfaces';
// import Routs from './Components/ConstantComponents/Routs';

const App = () => {
	const isMobileOpen = useAppSelector(state => state.portfolio.mobileIsOpen);

	return (
		<div className={clN.app}>
			<Header />
			<main className={cn(clN.main, { [clN.blur]: isMobileOpen === true })} />
			<MobileBtn />
		</div>
	);
};

export default App;
