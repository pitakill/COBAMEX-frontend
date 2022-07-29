<script>
  import Input from "../../components/Input.svelte";
  import municipality from "./store";

  const identifier = 16.2;
  let label = "Municipio o demarcación territorial";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={municipality} />
