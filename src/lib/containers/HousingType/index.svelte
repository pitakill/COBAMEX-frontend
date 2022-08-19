<script>
  import Select from "../../components/Select.svelte";
  import housingTypes from "../../../catalogs/housing-types";
  import housingType from "./store";

  const identifier = 16.8;
  let label = "Tipo de vivienda";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={housingTypes} value={housingType} />
