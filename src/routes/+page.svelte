<script>
    import Card, { Content } from '@smui/card';
    import List, { Item } from '@smui/list';
    import { base } from '$app/paths';

    export let data;
</script>

<List>
    {#each data.issues as issue}
        <Item class="top-page-item" nonInteractive>
            <Card variant="outlined" padded class="top-page-item-card">
                <h2><a href="{base}/posts/{issue.id}">{issue.title}</a></h2>
                <Content>
                    {issue.body.slice(0, 100)}
                </Content>
            </Card>
        </Item>
    {/each}
</List>