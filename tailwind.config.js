const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				button: "url('/icons/button.svg')",
				intro: "url('/images/intro.png')",
				lifestyle: "url('/images/fit_background.svg')",
				instructors_background: "url('/images/instructors_bg.svg')",
				classes_background: "url('/images/classes_bg.png')",
				footer_background: "url('/images/footer_bg.png')",
				orange_retangle: "url('/images/orange_retangle.svg')",
				transparent_retangle: "url('/images/transparent_retangle.svg')",
			},
			colors: {
				orange: '#FF4601',
			},
			fontFamily: {
				sans: ['Outfit', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
