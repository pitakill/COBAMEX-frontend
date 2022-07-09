<script>
  import Select from "../../components/Select.svelte";
  import mexicanStates from "../../../catalogs/mexican-states";
  import federalEntityOfBorn from "./store";
</script>

<Select
  label="Entidad federativa de nacimiento"
  items={mexicanStates}
  value={federalEntityOfBorn}
/>
