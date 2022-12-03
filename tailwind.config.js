/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'black-1': '#000000',
				'black-2': '#141515',
				'orange-cst': '#FFB800',
				'turqoise-cst': '#1FC1A4',
			},
		},
	},
	plugins: [],
};
