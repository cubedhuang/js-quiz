<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('%c👋 Hey there!', 'font-size: 3em; font-weight: bold;');
		console.log(
			'Are you %creally%c using DevTools for this quiz?',
			'font-style: italic;',
			''
		);
		console.log("You're better than that, right?");
	});
</script>

<svelte:head>
	<title>How well do you really know JavaScript?</title>
	<meta
		name="description"
		content="Test your knowledge of JavaScript with this quiz!"
	/>
</svelte:head>

<div
	class="prose prose-gray prose-blue mx-auto mb-64 mt-20 px-8 dark:prose-invert lg:prose-lg"
>
	<slot />
</div>

<style lang="postcss">
	.prose :global(pre) {
		@apply overflow-x-auto;
		scrollbar-width: thin;
		scrollbar-color: theme('colors.gray.500') theme('colors.gray.800');
	}

	.prose :global(pre::-webkit-scrollbar) {
		width: 0.5em;
		height: 0.5em;
	}

	.prose :global(pre::-webkit-scrollbar-thumb) {
		background-color: theme('colors.gray.500');
		border-radius: 0.25em;
	}

	.prose :global(pre::-webkit-scrollbar-thumb:hover) {
		background-color: theme('colors.gray.800');
	}

	.prose :global(pre code) {
		@apply overflow-x-visible bg-inherit p-0 text-[1em];
	}

	.prose :global(code:not(pre code)::before),
	.prose :global(code:not(pre code)::after) {
		content: none;
	}

	.prose :global(ol) {
		@apply list-[upper-roman];
	}
</style>
