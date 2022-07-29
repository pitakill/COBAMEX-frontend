<script>
  import Input from "../../components/Input.svelte";
  import age from "./store";

  const identifier = 11;
  let label = "Edad cumplida";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={age} type="number" />
