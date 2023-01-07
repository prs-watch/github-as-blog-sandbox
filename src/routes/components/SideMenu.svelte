<script>
	import { UnorderedList, ListItem, Link } from 'carbon-components-svelte';

	export let issues;
</script>

<UnorderedList expressive>
	{#each issues as issue}
		<ListItem>
			<Link href="posts/{issue.id}">{issue.title}</Link>
		</ListItem>
	{/each}
</UnorderedList>
