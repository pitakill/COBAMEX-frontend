<script>
  import Select from "../../components/Select.svelte";
  import housingClassifications from "../../../catalogs/housing-classifications";
  import housingClassification from "./store";
</script>

<Select
  label="Clasificación de vivienda"
  items={housingClassifications}
  value={housingClassification}
/>
