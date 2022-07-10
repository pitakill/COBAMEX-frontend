<script>
  import Select from "../../components/Select.svelte";
  import mexicanStates from "../../../catalogs/mexican-states";
  import federalEntity from "./store";
</script>

<Select
  label="Entidad federativa"
  items={mexicanStates}
  value={federalEntity}
/>
