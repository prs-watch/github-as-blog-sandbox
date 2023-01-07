<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<h1>{data.title}</h1>
<br />
<SvelteMarkdown source={data.body} />
