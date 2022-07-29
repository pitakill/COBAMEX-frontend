<script>
  import Input from "../../components/Input.svelte";
  import roadName from "./store";

  const identifier = 16.5;
  let label = "Nombre de la vialidad";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={roadName} />
