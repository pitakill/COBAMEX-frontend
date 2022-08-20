<script>
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Card, { Content } from '@smui/card';

  import EvaluatedPerson from './partials/EvaluatedPerson.svelte';
</script>

<LayoutGrid>
  <Cell spanDevices={{ phone: 12, tablet: 12, desktop: 6 }}>
    <Card>
      <Content>
        <EvaluatedPerson />
      </Content>
    </Card>
  </Cell>
</LayoutGrid>
