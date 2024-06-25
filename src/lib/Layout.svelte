<script lang="ts">
	import { onMount } from 'svelte';

	import Answers from '$lib/Answers.svelte';
	import { highlight } from '$lib/highlight';

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

<div class="prose prose-blue mx-auto mb-40 mt-20 px-8 lg:prose-lg">
	<slot />
	<!-- <h1>
		How well do you <em>really</em> know JavaScript?
	</h1>

	<p>
		It's pretty well known that JavaScript has strange syntax and semantics.
		Let's see how familiar you are with them! This quiz's format is mostly
		inspired by <a
			href="https://goldenstack.net/blog/java_quiz"
			target="_blank"
			rel="noopener noreferrer">this Java quiz</a
		>.
	</p>

	<hr />
	<h2>1.</h2>

	<p>Consider the following code segment.</p>

	<pre><code class="language-javascript" use:highlight
			>function get(array) &lbrace;
	return array.at("start");
&rbrace;</code
		></pre>

	<p>
		What is the result of calling the <code>get</code> function with the
		array
		<code>["first", "second", "third"]</code>?
	</p>

	<Answers correct="a">
		<p slot="a"><code>"first"</code></p>
		<p slot="b"><code>"second"</code></p>
		<p slot="c"><code>undefined</code></p>
		<p slot="d">
			A <code>TypeError</code> is thrown because <code>at</code> is not an
			array method.
		</p>
		<p slot="e">
			A <code>TypeError</code> is thrown because the <code>at</code> method
			takes an integer argument.
		</p>
	</Answers>

	<hr />
	<h2>2.</h2>

	<p>Consider the following code segment.</p>

	<pre><code class="language-javascript" use:highlight
			>const a = '👋';
const b = '👋🏽';

console.log(a.length + b.length);</code
		></pre>

	<p>What value will be printed to the console when the code is executed?</p>

	<Answers correct="e">
		<p slot="a"><code>2</code></p>
		<p slot="b"><code>3</code></p>
		<p slot="c"><code>4</code></p>
		<p slot="d"><code>5</code></p>
		<p slot="e"><code>6</code></p>
	</Answers>

	<hr />
	<h2>3.</h2>

	<p>
		Which of the following is not <strong>always</strong> a reserved word in
		JavaScript?
	</p>

	<Answers correct="d">
		<p slot="a"><code>class</code></p>
		<p slot="b"><code>debugger</code></p>
		<p slot="c"><code>enum</code></p>
		<p slot="d"><code>await</code></p>
		<p slot="e"><code>void</code></p>
	</Answers>

	<hr />
	<h2>4.</h2>

	<p>Consider the following code segment.</p>

	<pre><code class="language-javascript" use:highlight
			>Array.prototype.push("hello");
console.log(Array.prototype.length);</code
		></pre>

	<p>What value will be printed to the console when the code is executed?</p>

	<Answers correct="b">
		<p slot="a"><code>0</code></p>
		<p slot="b"><code>1</code></p>
		<p slot="c"><code>undefined</code></p>
		<p slot="d">
			A <code>TypeError</code> is thrown because <code>push</code> does
			not exist on <code>Array.prototype</code>.
		</p>
		<p slot="e">
			A <code>TypeError</code> is thrown because the reference to
			<code>this</code> when <code>push</code> is called is
			<code>undefined</code>.
		</p>
	</Answers>

	<hr />
	<h2>5.</h2>

	<p>Consider the following code segment.</p>

	<pre><code class="language-javascript" use:highlight
			>Array.prototype.push("hello");
console.log(Array.prototype.length);</code
		></pre>

	<p>What value will be printed to the console when the code is executed?</p>

	<Answers correct="b">
		<p slot="a"><code>0</code></p>
		<p slot="b"><code>1</code></p>
		<p slot="c"><code>undefined</code></p>
		<p slot="d">
			A <code>TypeError</code> is thrown because <code>push</code> does
			not exist on <code>Array.prototype</code>.
		</p>
		<p slot="e">
			A <code>TypeError</code> is thrown because the reference to
			<code>this</code> when <code>push</code> is called is
			<code>undefined</code>.
		</p>
	</Answers>

	<hr />
	<h2>6.</h2>

	<p>Consider the following code segment.</p>

	<pre><code class="language-javascript" use:highlight
			>const history = [];

function tag(literals, ...values) &lbrace;
  history.push(literals);
  return values;
&rbrace;

function use() &lbrace;
  return tag`Hello, $&lbrace;'world'&rbrace;!`;
&rbrace;

const a = use() === use();
const b = history[0] === history[1];
const c = tag`$&lbrace;'world'&rbrace;`[0] === tag`$&lbrace;'Hey!'&rbrace;`;</code
		></pre> -->
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

	.prose :global(code:not(pre code)) {
		@apply text-[1em] text-blue-600;
	}

	.prose :global(code:not(pre code)::before),
	.prose :global(code:not(pre code)::after) {
		content: none;
	}

	.prose :global(ol) {
		@apply list-[upper-roman];
	}

	.prose :global(ol li) {
		@apply my-1;
	}
</style>
