<script>
  import Select from "../../components/Select.svelte";
  import otherLanguages from "../../../catalogs/other-languages";
  import otherLanguage from "./store";

  const identifier = 12;
  let label = "¿Habla algún dialecto o lengua indígena?";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={otherLanguages} value={otherLanguage} />
