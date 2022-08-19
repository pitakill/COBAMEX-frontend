<script>
  import Input from "../../components/Input.svelte";
  import date from "./store";

  const identifier = 2;
  let label = "Fecha en que se llena el registro";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={date} type="date" />
