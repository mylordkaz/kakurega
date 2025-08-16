/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/app.html', '!./src/**/*.{test,spec}.{js,ts}'],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	theme: {
		extend: {
			FontFamily: {
				sans: ['Shippori Mincho', 'serif']
			}
		}
	},
	plugins: []
};

