import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from './components/Preloader';
import ThemeToggle from './components/ThemeToggle';
import Home from './routes/Home';
import { ThemeProvider } from './services/ThemeContext';

const App = () => {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1700);
	}, []);

	return (
		<React.Fragment>
			<ThemeProvider>
				{loading ? (
					<Preloader />
				) : (
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				)}

				<ThemeToggle />
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;

