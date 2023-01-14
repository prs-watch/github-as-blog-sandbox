<script>
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Header from './components/Header.svelte';
	import SideMenu from './components/SideMenu.svelte';
	import '../../node_modules/svelte-material-ui/bare.css';
	import './styles/custom.css';

	export let data;
</script>

<LayoutGrid>
	<Cell span={12}>
		<Header />
	</Cell>
	<Cell span={4}>
		<SideMenu issues={data.issues} />
	</Cell>
	<Cell span={8}>
		<slot />
	</Cell>
</LayoutGrid>
