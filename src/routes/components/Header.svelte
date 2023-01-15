<script>
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Ripple from '@smui/ripple';
    import Icon from '@iconify/svelte';
    import { base } from '$app/paths';
</script>

<LayoutGrid>
    <Cell span={12}>
        <a class="link" href="{base}/"><h1>github-as-blog</h1></a>
    </Cell>
    <Cell span={12}>
        <a class="link header-link" href="{base}/" use:Ripple={{
            surface: false,
            unbounded: true,
        }}><Icon inline icon="mdi:account-school" /><span>ABOUT US</span></a>
        <a class="link header-link" href="{base}/" use:Ripple={{
            surface: false,
            unbounded: true,
        }}><Icon inline icon="mdi:email-outline" /><span>CONTACT US</span></a>
    </Cell>
</LayoutGrid>

<style>
    .link {
        text-decoration: none;
        color: #000000;
    }

    .header-link {
        margin: 0px 1rem 0px 0px;
    }
</style>