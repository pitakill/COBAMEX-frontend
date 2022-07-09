<script>
  import Select from "../../components/Select.svelte";
  import genders from "../../../catalogs/genders";
  import gender from "./store";
</script>

<Select label="Género" items={genders} value={gender} />
