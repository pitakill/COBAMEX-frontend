<script>
  import Select from "../../components/Select.svelte";
  import basics from "../../../catalogs/basics";
  import knowsReadWriteAnErrand from "./store";
</script>

<Select
  label="¿Sabe leer y escribir un recado?"
  items={basics}
  value={knowsReadWriteAnErrand}
/>
