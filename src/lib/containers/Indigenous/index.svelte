<script>
  import Select from "../../components/Select.svelte";
  import basics from "../../../catalogs/basics";
  import indigenous from "./store";
</script>

<Select label="De acuerdo a su cultura ¿se considera indígena?" items={basics} value={indigenous} />
