<script lang="ts">
	import { answeredQuestions, correctAnswers } from './stores';

	export let correct: 'a' | 'b' | 'c' | 'd' | 'e';

	let answer = '';
	$: disabled = answer !== '';

	function guess(option: string) {
		const isCorrect = option === correct;

		answer = option;

		$correctAnswers += isCorrect;
		$answeredQuestions += 1;
	}
</script>

<div class="grid gap-2">
	<button class="option group" on:click={() => guess('a')} {disabled}>
		<div
			class="outline-2 outline-offset-2 outline-blue-500 group-focus-visible:outline group-hve:border-blue-500 group-hve:bg-blue-50"
			class:correct={disabled && correct === 'a'}
			class:incorrect={disabled && correct !== 'a' && answer === 'a'}
		></div>
		<slot name="a" />
	</button>
	<button class="option group" on:click={() => guess('b')} {disabled}>
		<div
			class="outline-2 outline-offset-2 outline-blue-500 group-focus-visible:outline group-hve:border-blue-500 group-hve:bg-blue-50"
			class:correct={disabled && correct === 'b'}
			class:incorrect={disabled && correct !== 'b' && answer === 'b'}
		></div>
		<slot name="b" />
	</button>
	<button class="option group" on:click={() => guess('c')} {disabled}>
		<div
			class="outline-2 outline-offset-2 outline-blue-500 group-focus-visible:outline group-hve:border-blue-500 group-hve:bg-blue-50"
			class:correct={disabled && correct === 'c'}
			class:incorrect={disabled && correct !== 'c' && answer === 'c'}
		></div>
		<slot name="c" />
	</button>
	<button class="option group" on:click={() => guess('d')} {disabled}>
		<div
			class="outline-2 outline-offset-2 outline-blue-500 group-focus-visible:outline group-hve:border-blue-500 group-hve:bg-blue-50"
			class:correct={disabled && correct === 'd'}
			class:incorrect={disabled && correct !== 'd' && answer === 'd'}
		></div>
		<slot name="d" />
	</button>
	<button class="option group" on:click={() => guess('e')} {disabled}>
		<div
			class="outline-2 outline-offset-2 outline-blue-500 group-focus-visible:outline group-hve:border-blue-500 group-hve:bg-blue-50"
			class:correct={disabled && correct === 'e'}
			class:incorrect={disabled && correct !== 'e' && answer === 'e'}
		></div>
		<slot name="e" />
	</button>
</div>

<style lang="postcss">
	.option {
		@apply flex w-full gap-3 outline-none;
	}

	.option div {
		@apply size-6 translate-y-1 rounded-full border-2 p-0.5 transition;
	}

	.option div.correct {
		@apply border-green-500 bg-green-500 text-white;

		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJzaXplLTQiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjQxNiAzLjM3NmEuNzUuNzUgMCAwIDEgLjIwOCAxLjA0bC01IDcuNWEuNzUuNzUgMCAwIDEtMS4xNTQuMTE0bC0zLTNhLjc1Ljc1IDAgMCAxIDEuMDYtMS4wNmwyLjM1MyAyLjM1MyA0LjQ5My02Ljc0YS43NS43NSAwIDAgMSAxLjA0LS4yMDdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+Cjwvc3ZnPg==');
	}

	.option div.incorrect {
		@apply border-red-500 bg-red-500 text-white;

		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJzaXplLTQiPgogIDxwYXRoIGQ9Ik01LjI4IDQuMjJhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDhsLTIuNzIgMi43MmEuNzUuNzUgMCAxIDAgMS4wNiAxLjA2TDggOS4wNmwyLjcyIDIuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNkw5LjA2IDhsMi43Mi0yLjcyYS43NS43NSAwIDAgMC0xLjA2LTEuMDZMOCA2Ljk0IDUuMjggNC4yMloiIC8+Cjwvc3ZnPg==');
	}

	.option > :global(*) {
		@apply my-0;
	}
</style>
