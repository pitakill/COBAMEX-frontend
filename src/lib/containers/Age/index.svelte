<script>
  import Input from "../../components/Input.svelte";
  import age from "./store";
</script>

<Input label="Edad cumplida" value={age} type="number" />
