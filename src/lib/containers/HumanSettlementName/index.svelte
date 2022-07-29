<script>
  import Input from "../../components/Input.svelte";
  import humanSettlementName from "./store";

  const identifier = 16.10;
  let label = "Nombre del asentamiento humano";

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={humanSettlementName} />
