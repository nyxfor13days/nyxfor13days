import React from 'react';

type ThemeName = 'light' | 'dark' | string;
type ThemeContextType = {
	theme: ThemeName;
	setTheme: (name: ThemeName) => void;
};

const getInitialTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('color-theme');
		if (typeof storedPrefs === 'string') {
			return storedPrefs;
		}

		const userMedia = window.matchMedia('(prefers-color-scheme:dark)');
		if (userMedia.matches) {
			return 'dark';
		}
	}
	return 'dark';
};

export const ThemeContext = React.createContext<ThemeContextType>(
	{} as ThemeContextType
);

interface ThemeProviderProps {
	initialTheme?: ThemeName;
	children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, children } = props;
	const [theme, setTheme] = React.useState(getInitialTheme);

	const rawSetTheme = (theme: string) => {
		const root = window.document.documentElement;
		const isDark = theme === 'dark';

		root.classList.remove(isDark ? 'light' : 'dark');
		root.classList.add(theme);

		localStorage.setItem('color-theme', theme);
	};

	if (initialTheme) {
		rawSetTheme(initialTheme);
	}

	React.useEffect(() => {
		rawSetTheme(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

