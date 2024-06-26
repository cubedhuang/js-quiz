import type { Writable } from 'svelte/store';

export type AnswerContext = {
	answer: Writable<string>;
	guess: (id: string, correct: boolean) => void;
};
