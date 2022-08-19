<script>
  import Input from '../../components/Input.svelte';
  import relationshipWithEvaluated from './store';

  const identifier = 22.5;
  let label = 'Relación con el evaluado';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={relationshipWithEvaluated} />
