<script>
  import Select from "../../components/Select.svelte";
  import humanSettlementTypes from "../../../catalogs/human-settlement-types";
  import humanSettlementType from "./store";
</script>

<Select
  label="Tipo de asentamiento humano"
  items={humanSettlementTypes}
  value={humanSettlementType}
/>
