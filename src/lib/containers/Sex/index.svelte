<script>
  import Select from "../../components/Select.svelte";
  import sexes from "../../../catalogs/sexes";
  import sex from "./store";
</script>

<Select label="Sexo" items={sexes} value={sex} />
