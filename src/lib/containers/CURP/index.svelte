<script>
  import Input from "../../components/Input.svelte";
  import curp from "./store";

  const identifier = 3;
  let label = "CURP";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={curp} />
