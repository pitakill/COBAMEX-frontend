<script>
  import Input from '../../components/Input.svelte';
  import kinshipWithEvaluated from './store';

  const identifier = 22.4;
  let label = 'Parentesco con el evaluado';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={kinshipWithEvaluated} />
