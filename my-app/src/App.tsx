import React from 'react';
import cn from 'classnames';
import Menu from './Components/Header/Menu';
import MobileBtn from './Components/Header/MobileBtn/MobileBtn';
import clN from './index.module.scss';
import { useAppSelector } from './core/interfaces';
import Routs from './Components/ConstantComponents/Routs';

const App = () => {
	const isMobileOpen = useAppSelector(state => state.portfolio.mobileIsOpen);

	return (
		<>
			<Menu />
			<main className={cn(clN.main, { [clN.blur]: isMobileOpen === true })}>
				<Routs />
			</main>
			<MobileBtn />
		</>
	);
};

export default App;
