<script>
  import Select from '../../components/Select.svelte';
  import basics from '../../../catalogs/basics';
  import attendingSpecialSchool from './store';

  const identifier = 17.4;
  let label = '¿Asiste a una escuela de educación especial?';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={basics} value={attendingSpecialSchool} />
