<script>
  import Select from "../../components/Select.svelte";
  import schoolings from "../../../catalogs/schoolings";
  import schooling from "./store";

  const identifier = 15.1;
  let label = "Escolaridad";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={schoolings} value={schooling} />
