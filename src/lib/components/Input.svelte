<script>
  export let label;
  export let value;
  export let type = "text";

  import Textfield from "@smui/textfield";
</script>

<Textfield bind:value={$value} {label} {type} style="width: 100%;" />
