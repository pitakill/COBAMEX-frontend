<script>
  import Input from "../../components/Input.svelte";
  import birhtdate from "./store";

  const identifier = 10;
  let label = "Fecha de nacimiento";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={birhtdate} type="date" />
