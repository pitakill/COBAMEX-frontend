<script>
  import Select from "../../components/Select.svelte";
  import basics from "../../../catalogs/basics";
  import currentlyAttendingSchool from "./store";
</script>

<Select
  label="¿Asiste actualmente a la escuela?"
  items={basics}
  value={currentlyAttendingSchool}
/>
