import hljs, { type HLJSOptions } from 'highlight.js';
import type { Action } from 'svelte/action';

export const highlight: Action<
	HTMLElement,
	Partial<HLJSOptions> | undefined
> = (node, options = {}) => {
	hljs.configure(options);
	hljs.highlightElement(node);
};
