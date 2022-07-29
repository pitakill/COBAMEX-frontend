<script>
  import Input from "../../components/Input.svelte";
  import firstname from "./store";

  const identifier = 4.1;
  let label = "Nombre(s)";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={firstname} />
