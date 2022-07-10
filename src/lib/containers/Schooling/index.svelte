<script>
  import Select from "../../components/Select.svelte";
  import schoolings from "../../../catalogs/schoolings";
  import schooling from "./store";
</script>

<Select label="Escolaridad" items={schoolings} value={schooling} />
