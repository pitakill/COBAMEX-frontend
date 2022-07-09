<script>
  import Select from "../../components/Select.svelte";
  import basics from "../../../catalogs/basics";
  import afrodescendant from "./store";
</script>

<Select label="Por sus antepasados ¿se considera afrodescendiente?" items={basics} value={afrodescendant} />
