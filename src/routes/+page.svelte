<script>
    import Card, { Content } from '@smui/card';
    import List, { Item } from '@smui/list';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Chip, { Set, LeadingIcon, TrailingIcon, Text } from '@smui/chips';
    import { base } from '$app/paths';

    export let data;

    // datasets for chips
    const createChips = (issue) => {
        const chips = [];
        const labels = issue.labels;
        for (const label of labels) {
            chips.push(label.name)
        };
        return chips;
    };
</script>

<List>
    {#each data.issues as issue}
        <Item class="top-page-item" nonInteractive>
            <Card variant="outlined" padded class="top-page-item-card">
                <LayoutGrid>
                    <Cell span={8}>
                        <h2><a href="{base}/posts/{issue.id}">{issue.title}</a></h2>
                    </Cell>
                    <Cell span={4}>
                        <Set chips={createChips(issue)} let:chip>
                            <Chip {chip}>
                                <Text>{chip}</Text>
                            </Chip>
                        </Set>
                    </Cell>
                </LayoutGrid>
                <Content>
                    {issue.body.slice(0, 100)}
                </Content>
            </Card>
        </Item>
    {/each}
</List>