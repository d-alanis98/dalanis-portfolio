/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '350px',
			'2xs': '400px',
			sm: '640px',
			md: '820px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				sans: ['Spartan', 'sans-serif'],
				spartanExtraBold: ['Spartan ExtraBold', 'sans-serif'],
				spartanBlack: ['Spartan Black', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
