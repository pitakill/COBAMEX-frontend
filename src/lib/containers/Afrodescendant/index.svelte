<script>
  import Select from "../../components/Select.svelte";
  import basics from "../../../catalogs/basics";
  import afrodescendant from "./store";

  const identifier = 14;
  let label = "Por sus antepasados ¿se considera afrodescendiente?";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={basics} value={afrodescendant} />
