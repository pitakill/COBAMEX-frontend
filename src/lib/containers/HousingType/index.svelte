<script>
  import Select from "../../components/Select.svelte";
  import housingTypes from "../../../catalogs/housing-types";
  import housingType from "./store";
</script>

<Select label="Tipo de vivienda" items={housingTypes} value={housingType} />
