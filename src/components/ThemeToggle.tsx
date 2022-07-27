import React from 'react';
import { ThemeContext } from '../services/ThemeContext';
import { IconPrimaryButton } from './Button';

const ThemeToggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div className='fixed bottom-4 right-4 z-50'>
			<IconPrimaryButton
				onClick={() =>
					theme === 'dark' ? setTheme('light') : setTheme('dark')
				}
				icon={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}
			/>
		</div>
	);
};

export default ThemeToggle;

