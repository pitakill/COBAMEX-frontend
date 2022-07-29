<script>
  export let identifier = 4.1;

  import Input from '../../components/Input.svelte';
  import firstname from './store';

  let label = 'Nombre(s)';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={firstname} />
