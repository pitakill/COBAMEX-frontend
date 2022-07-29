<script>
  import Input from "../../components/Input.svelte";
  import outdoorNumber from "./store";

  const identifier = 16.6;
  let label = "Número exterior";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={outdoorNumber} />
