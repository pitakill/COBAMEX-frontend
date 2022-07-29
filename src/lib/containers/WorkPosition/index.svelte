<script>
  import Select from '../../components/Select.svelte';
  import workPositions from '../../../catalogs/work-positions';
  import workPosition from './store';

  const identifier = 20.4;
  let label = '¿Posición en el trabajo?';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={workPositions} value={workPosition} />
