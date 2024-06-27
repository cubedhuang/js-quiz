<script lang="ts">
	import { getContext } from 'svelte';

	import type { AnswerContext } from './context';

	const { answer, guess } = getContext<AnswerContext>('answers');

	export let correct = false;

	let id = Math.random().toString(36).slice(2);

	$: disabled = $answer !== '';
</script>

<button
	class="group flex w-full max-w-full gap-3 overflow-hidden text-left outline-none"
	on:click={() => guess(id, correct)}
	{disabled}
>
	<div
		class="size-6 shrink-0 translate-y-1 rounded-full border-2 border-gray-300 p-0.5 outline-2 outline-offset-2 outline-blue-500 transition group-focus-visible:outline group-hve:border-blue-500 group-hve:bg-blue-50
			dark:border-gray-700 dark:group-hve:border-blue-500 dark:group-hve:bg-blue-950"
		class:correct={disabled && correct}
		class:incorrect={disabled && !correct && $answer === id}
	></div>
	<slot />
</button>

<style lang="postcss">
	.correct {
		@apply border-transparent bg-green-500 text-white dark:bg-green-700;

		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJzaXplLTQiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjQxNiAzLjM3NmEuNzUuNzUgMCAwIDEgLjIwOCAxLjA0bC01IDcuNWEuNzUuNzUgMCAwIDEtMS4xNTQuMTE0bC0zLTNhLjc1Ljc1IDAgMCAxIDEuMDYtMS4wNmwyLjM1MyAyLjM1MyA0LjQ5My02Ljc0YS43NS43NSAwIDAgMSAxLjA0LS4yMDdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+Cjwvc3ZnPg==');
	}

	.incorrect {
		@apply border-transparent bg-red-500 text-white dark:bg-red-700;

		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJzaXplLTQiPgogIDxwYXRoIGQ9Ik01LjI4IDQuMjJhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDhsLTIuNzIgMi43MmEuNzUuNzUgMCAxIDAgMS4wNiAxLjA2TDggOS4wNmwyLjcyIDIuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNkw5LjA2IDhsMi43Mi0yLjcyYS43NS43NSAwIDAgMC0xLjA2LTEuMDZMOCA2Ljk0IDUuMjggNC4yMloiIC8+Cjwvc3ZnPg==');
	}

	button > :global(*) {
		@apply my-0;
	}

	button > :global(:nth-child(2)) {
		@apply flex-1;
	}
</style>
