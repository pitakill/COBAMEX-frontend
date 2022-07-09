<script>
  import Input from "../../components/Input.svelte";
  import date from "./store";
</script>

<Input label="Fecha en que se llena el registro" value={date} type="date" />
