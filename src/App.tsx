import { FC } from 'react';
import { About, Banner, Experience, Skills } from 'pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainContainer } from './containers';

import 'index.scss';

const App: FC = () => {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<MainContainer />}>
						<Route index element={<Banner />} />
						<Route path="/about" element={<About />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/experience" element={<Experience />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
