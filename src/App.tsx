import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from './components/Preloader';
import Home from './routes/Home';

const App = () => {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1700);
	}, []);

	return (
		<React.Fragment>
			{loading && <Preloader />}

			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;

