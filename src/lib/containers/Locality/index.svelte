<script>
  import Input from "../../components/Input.svelte";
  import locality from "./store";

  const identifier = 16.3;
  let label = "Localidad";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={locality} />
