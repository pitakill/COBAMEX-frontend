<script>
  import Select from "../../components/Select.svelte";
  import mexicanStates from "../../../catalogs/mexican-states";
  import federalEntityOfBorn from "./store";

  const identifier = 7;
  let label = "Entidad federativa de nacimiento";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={mexicanStates} value={federalEntityOfBorn} />
