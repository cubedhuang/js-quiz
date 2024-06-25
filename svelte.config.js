import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { mdsvex } from 'mdsvex';

hljs.registerLanguage('javascript', javascript);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				_: './src/lib/Layout.svelte'
			},
			highlight: {
				highlighter(src, language) {
					if (language && hljs.getLanguage(language)) {
						const formatted = hljs
							.highlight(src, { language })
							.value.replaceAll('{', '&#123;')
							.replaceAll('}', '&#125;');

						return `<pre class="hljs"><code class="language-${language}">${formatted}</code></pre>`;
					}
					return '<pre><code>' + src + '</code></pre>';
				}
			}
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.svx']
};

export default config;
