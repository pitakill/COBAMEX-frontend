<script>
  import Select from "../../components/Select.svelte";
  import otherLanguages from "../../../catalogs/other-languages";
  import otherLanguage from "./store";
</script>

<Select
  label="¿Habla algún dialecto o lengua indígena?"
  items={otherLanguages}
  value={otherLanguage}
/>
