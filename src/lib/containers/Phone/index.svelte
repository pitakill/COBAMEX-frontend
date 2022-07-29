<script>
  import Input from '../../components/Input.svelte';
  import phone from './store';

  const identifier = 23.1;
  let label = 'Teléfono';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={phone} />
