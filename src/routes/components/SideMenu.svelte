<script>
	import { UnorderedList, ListItem, Link } from 'carbon-components-svelte';
	import { base } from '$app/paths';

	export let issues;
</script>

<UnorderedList expressive>
	{#each issues as issue}
		<ListItem>
			<Link href="{base}/posts/{issue.id}">{issue.title}</Link>
		</ListItem>
	{/each}
</UnorderedList>
