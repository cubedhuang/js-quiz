<script lang="ts">
	import { theme } from './stores';
</script>

<p>
	<select
		bind:value={$theme}
		aria-label="Select a theme"
		class="cursor-pointer rounded-md border-2 px-2 py-1 outline-none focus-visible:outline-blue-500
			dark:border-gray-700 dark:bg-gray-900 dark:text-white"
	>
		<option value="system">System</option>
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>
</p>
