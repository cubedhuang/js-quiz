import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const theme = writable(
	browser ? localStorage.getItem('theme') || 'system' : 'system'
);

theme.subscribe(value => {
	if (!browser) return;

	localStorage.setItem('theme', value);
	const isDark =
		value === 'dark' ||
		(value === 'system' &&
			window.matchMedia('(prefers-color-scheme: dark)').matches);

	document.documentElement.classList.toggle('dark', isDark);
});

export const answeredQuestions = writable(0);
export const correctAnswers = writable(0);
