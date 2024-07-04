<script lang="ts">
	import { getContext } from 'svelte';

	import type { AnswerContext } from './context';
	import { slide } from 'svelte/transition';

	const { answer, guess } = getContext<AnswerContext>('answers');

	$: open = $answer !== '';
</script>

{#if open}
	<div transition:slide>
		<slot />
	</div>
{/if}
