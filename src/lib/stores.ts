import { writable } from 'svelte/store';

export const answeredQuestions = writable(0);
export const correctAnswers = writable(0);
