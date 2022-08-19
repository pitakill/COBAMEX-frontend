<script>
  import Input from "../../components/Input.svelte";
  import indoorNumber from "./store";

  const identifier = 16.7;
  let label = "Número interior";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={indoorNumber} />
