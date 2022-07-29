<script>
  import Select from "../../components/Select.svelte";
  import housingClassifications from "../../../catalogs/housing-classifications";
  import housingClassification from "./store";

  const identifier = 16.9;
  let label = "Clasificación de vivienda";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={housingClassifications} value={housingClassification} />
