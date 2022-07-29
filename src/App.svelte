<script>
  import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
  import Card, { Content } from '@smui/card';

  import SociodemographicData from './views/SociodemographicData.svelte';
</script>

<LayoutGrid>
  <Cell spanDevices={{ phone: 12, tablet: 12, desktop: 6 }}>
    <Card>
      <Content>
        <InnerGrid>
          <Cell span={12}>
            <SociodemographicData />
          </Cell>
        </InnerGrid>
      </Content>
    </Card>
  </Cell>
</LayoutGrid>
