<script>
  import Select from "../../components/Select.svelte";
  import nationalities from "../../../catalogs/nationalities";
  import nationality from "./store";

  const identifier = 5;
  let label = "Nacionalidad";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={nationalities} value={nationality} />
