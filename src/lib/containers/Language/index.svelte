<script>
  import Select from "../../components/Select.svelte";
  import languages from "../../../catalogs/languages";
  import language from "./store";

  const identifier = 12.1;
  let label = "¿Cuál?";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={languages} value={language} />
