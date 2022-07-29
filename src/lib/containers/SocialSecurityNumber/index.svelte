<script>
  import Input from '../../components/Input.svelte';
  import socialSecurityNumber from './store';

  const identifier = 18.2;
  let label = 'Número de seguridad social';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={socialSecurityNumber} />
