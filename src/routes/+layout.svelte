<script>
	import 'carbon-components-svelte/css/white.css';
	import { Grid, Row, Column, Content } from 'carbon-components-svelte';
	import Header from './components/Header.svelte';
	import SideMenu from './components/SideMenu.svelte';

	export let data;
</script>

<Header />

<Content fullWidth>
	<Grid>
		<Row>
			<Column sm={4} md={4} lg={4}>
				<SideMenu issues={data.issues} />
			</Column>
			<Column sm={8} md={8} lg={8}>
				<slot />
			</Column>
		</Row>
	</Grid>
</Content>
