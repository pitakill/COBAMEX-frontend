<script>
  import Input from "../../components/Input.svelte";
  import zipCode from "./store";

  const identifier = 16.12;
  let label = "Código postal";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={zipCode} />
