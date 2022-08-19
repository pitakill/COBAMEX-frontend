<script>
  import Select from "../../components/Select.svelte";
  import basics from "../../../catalogs/basics";
  import indigenous from "./store";

  const identifier = 13;
  let label = "De acuerdo a su cultura ¿se considera indígena?";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={basics} value={indigenous} />
