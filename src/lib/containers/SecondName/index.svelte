<script>
  import Input from "../../components/Input.svelte";
  import secondname from "./store";

  const identifier = 4.3;
  let label = "Segundo Apellido";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={secondname} />
