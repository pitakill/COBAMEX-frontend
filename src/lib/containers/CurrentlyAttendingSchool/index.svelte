<script>
  import Select from '../../components/Select.svelte';
  import basics from '../../../catalogs/basics';
  import currentlyAttendingSchool from './store';

  const identifier = 17.3;
  let label = '¿Asiste actualmente a la escuela?';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={basics} value={currentlyAttendingSchool} />
