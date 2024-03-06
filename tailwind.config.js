/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			themeColorMain: '#5A75CE',
			themeColorSecondary: '#CEB35A',
			textColor: '#EBE0BC',
			appBg: '#121212',
			compBg: '#181818',
			mainBg: '#000000',
			welcomeCard: '#EC5640',
			success: '#22bb33',
			danger: '#bb2124',
			warning: '#f0ad4e',
			info: '#5bc0de'
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
}
