<script>
  import Select from '../../components/Select.svelte';
  import basics from '../../../catalogs/basics';
  import knowsReadWriteAnErrand from './store';

  const identifier = 17.2;
  let label = '¿Sabe leer y escribir un recado?';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={basics} value={knowsReadWriteAnErrand} />
