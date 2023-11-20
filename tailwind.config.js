/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fbf6fe',
					100: '#f5eafd',
					200: '#edd9fb',
					300: '#e0baf8',
					400: '#cd8ef2',
					500: '#b963e9',
					600: '#a543da',
					700: '#8f31bf',
					800: '#782d9c',
					900: '#5f247a',
					950: '#440f5c',
				},
				background: '#1a1236',
				backgroundLight: '#1f173f',
				backgroundDark: '#140e2b',
				textDisabled: '#a5a5a5',
			},
		},
	},
	plugins: [],
};
