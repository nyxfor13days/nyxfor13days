/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	prefix: 'nyxfor13days-',
	important: true,

	theme: {
		screens: {
			mobile: { max: '639px' },
			tablet: { min: '640px' },
			laptop: { min: '1024px' },
			desktop: { min: '1280px' },
		},
		extend: {},
	},
	plugins: [],
};

