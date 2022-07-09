<script>
  import Select from "../../components/Select.svelte";
  import nationalities from "../../../catalogs/nationalities";
  import nationality from "./store";
</script>

<Select label="Nacionalidad" items={nationalities} value={nationality} />
