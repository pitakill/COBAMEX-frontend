<script>
  import Select from "../../components/Select.svelte";
  import basics from "../../../catalogs/basics";
  import attendingSpecialSchool from "./store";
</script>

<Select
  label="¿Asiste a una escuela de educación especial?"
  items={basics}
  value={attendingSpecialSchool}
/>
