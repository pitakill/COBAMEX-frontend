<script>
  import { InnerGrid, Cell } from "@smui/layout-grid";
  import Card, { Content } from "@smui/card";

  import EvaluatedPerson from "./partials/EvaluatedPerson.svelte";
</script>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          Datos personales
        </h2>
      </Cell>
      <Cell span={12}>
        <EvaluatedPerson />
      </Cell>
    </InnerGrid>
  </Content>
</Card>
