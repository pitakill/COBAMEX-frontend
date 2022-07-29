<script>
  import Input from "../../components/Input.svelte";
  import folio from "./store";

  const identifier = 1;
  let label = "Folio";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={folio} />
