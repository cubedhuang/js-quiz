<script lang="ts">
	import Answers from '$lib/Answers.svelte';
	import { highlight } from '$lib/highlight';
</script>

<svelte:head>
	<title>How well do you know JavaScript syntax and semantics?</title>
	<meta name="description" content="Collected Miscellany - " />
</svelte:head>

<div
	class="prose prose-sm prose-blue mx-auto mt-16 px-8 sm:prose-base lg:prose-lg prose-pre:p-0"
>
	<h1>How well do you know JavaScript syntax and semantics?</h1>

	<p>
		It's pretty well known that JavaScript has strange syntax and semantics.
		Let's see how familiar you are with them! This quiz's format is mostly
		inspired by <a
			href="https://goldenstack.net/blog/java_quiz"
			target="_blank"
			rel="noopener noreferrer">this Java quiz</a
		>.
	</p>

	<h2>1.</h2>

	<p>Consider the following code segment.</p>

	<pre><code class="language-javascript" use:highlight
			>const a = '👋';
const b = '👋🏽';

console.log(a.length + b.length);</code
		></pre>

	<p>What value will be printed to the console when the code is executed?</p>

	<Answers correct="e">
		<p slot="a">2</p>
		<p slot="b">3</p>
		<p slot="c">4</p>
		<p slot="d">5</p>
		<p slot="e">6</p>
	</Answers>
</div>
