/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				chanBlue: "#0f0c5d",
				chanRed: "#d00",
				chanQuote: "#789922",
			},

		},
		plugins: [],
	}
}