<script>
  import Select from "../../components/Select.svelte";
  import roadTypes from "../../../catalogs/road-types";
  import roadType from "./store";
</script>

<Select label="Tipo de vialidad" items={roadTypes} value={roadType} />
