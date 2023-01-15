import { FC } from 'react';
import cn from 'classnames';
import { Header } from 'pages';
import { MobileBtn, Routs } from 'Components';
import clN from './index.module.scss';
import { useAppSelector } from './core/interfaces';

const App: FC = () => {
	const isMobileOpen = useAppSelector(state => state.portfolio.mobileIsOpen);

	return (
		<div className={clN.app}>
			<Header />
			<main className={cn(clN.main, { [clN.blur]: isMobileOpen === true })}>
				<Routs />
			</main>
			<MobileBtn />
		</div>
	);
};

export default App;
