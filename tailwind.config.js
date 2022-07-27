/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',

	theme: {
		screens: {
			mobile: { max: '639px' },
			tablet: { min: '640px' },
			laptop: { min: '1024px' },
			desktop: { min: '1280px' },
		},
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

