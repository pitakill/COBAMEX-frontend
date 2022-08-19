<script>
  import Select from "../../components/Select.svelte";
  import roadTypes from "../../../catalogs/road-types";
  import roadType from "./store";

  const identifier = 16.4;
  let label = "Tipo de vialidad";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={roadTypes} value={roadType} />
