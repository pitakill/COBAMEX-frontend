<script>
  import Select from "../../components/Select.svelte";
  import languages from "../../../catalogs/languages";
  import language from "./store";
</script>

<Select label="¿Cuál otra lengua habla?" items={languages} value={language} />
