<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import type { AnswerContext } from './context';
	import { answeredQuestions, correctAnswers } from './stores';

	const answer = writable('');

	function guess(id: string, correct: boolean) {
		if ($answer !== '') return;

		$answer = id;

		$correctAnswers += correct ? 1 : 0;
		$answeredQuestions += 1;
	}

	setContext<AnswerContext>('answers', { answer, guess });
</script>

<div class="grid gap-3">
	<slot />
</div>
