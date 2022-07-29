<script>
  import Select from "../../components/Select.svelte";
  import humanSettlementTypes from "../../../catalogs/human-settlement-types";
  import humanSettlementType from "./store";

  const identifier = 16.11;
  let label = "Tipo de asentamiento humano";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={humanSettlementTypes} value={humanSettlementType} />
