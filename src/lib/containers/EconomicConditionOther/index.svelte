<script>
  import Input from '../../components/Input.svelte';
  import economicConditionOther from './store';

  const identifier = 20.3;
  let label = 'Otra (¿Condición de actividad económica?)';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={economicConditionOther} />
