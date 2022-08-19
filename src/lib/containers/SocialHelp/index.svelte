<script>
  import Input from '../../components/Input.svelte';
  import socialHelp from './store';

  const identifier = 21;
  let label = 'Recibe algún apoyo social';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={socialHelp} />
