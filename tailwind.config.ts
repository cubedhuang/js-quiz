import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				mono: ['Fira Mono', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: [
		typography,
		plugin(({ addVariant }) => {
			addVariant('hc', ['&:hover', '&:focus']);
			addVariant('group-hc', ['.group:hover &', '.group:focus &']);
			addVariant('hv', ['&:hover', '&:focus-visible']);
			addVariant('group-hv', [
				'.group:hover &',
				'.group:focus-visible &'
			]);
			addVariant('enabled', ['&:not([disabled])']);
			addVariant('group-enabled', ['.group:enabled &']);
			addVariant('hce', [
				'&:hover:not([disabled])',
				'&:focus:not([disabled])'
			]);
			addVariant('group-hce', [
				'.group:hover:not([disabled]) &',
				'.group:focus:not([disabled]) &'
			]);
			addVariant('hve', [
				'&:hover:not([disabled])',
				'&:focus-visible:not([disabled])'
			]);
			addVariant('group-hve', [
				'.group:hover:not([disabled]) &',
				'.group:focus-visible:not([disabled]) &'
			]);
		})
	]
} satisfies Config;