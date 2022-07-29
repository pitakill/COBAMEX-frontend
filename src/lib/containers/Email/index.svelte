<script>
  import Input from '../../components/Input.svelte';
  import email from './store';

  const identifier = 23.2;
  let label = 'Email';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={email} />
