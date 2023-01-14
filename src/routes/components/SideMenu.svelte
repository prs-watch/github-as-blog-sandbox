<script>
	import List, { Item, Text } from '@smui/list';
	import { base } from '$app/paths';

	export let issues;
</script>

<List>
	{#each issues as issue}
		<Item nonInteractive>
			<a href="{base}/posts/{issue.id}">{issue.title}</a>
		</Item>
	{/each}
</List>