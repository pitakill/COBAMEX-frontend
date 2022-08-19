<script>
  import Select from "../../components/Select.svelte";
  import sexes from "../../../catalogs/sexes";
  import sex from "./store";

  const identifier = 8;
  let label = "Sexo";

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={sexes} value={sex} />
