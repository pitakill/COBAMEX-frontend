<script>
  import Select from "../../components/Select.svelte";
  import genders from "../../../catalogs/genders";
  import gender from "./store";

  const identifier = 9;
  let label = "Género";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={genders} value={gender} />
