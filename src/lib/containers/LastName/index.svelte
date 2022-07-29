<script>
  import Input from "../../components/Input.svelte";
  import lastname from "./store";

  const identifier = 4.2;
  let label = "Primer apellido";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={lastname} />
