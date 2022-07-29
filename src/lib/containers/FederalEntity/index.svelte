<script>
  import Select from "../../components/Select.svelte";
  import mexicanStates from "../../../catalogs/mexican-states";
  import federalEntity from "./store";

  const identifier = 16.1;
  let label = "Entidad federativa";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={mexicanStates} value={federalEntity} />
