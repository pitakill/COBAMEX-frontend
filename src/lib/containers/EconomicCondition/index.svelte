<script>
  import Select from '../../components/Select.svelte';
  import economicConditions from '../../../catalogs/economic-conditions';
  import economicCondition from './store';

  const identifier = 20.2;
  let label = '¿Condición de actividad económica?';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={economicConditions} value={economicCondition} />
