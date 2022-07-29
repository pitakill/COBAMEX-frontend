<script>
  import Select from '../../components/Select.svelte';
  import nationalities from '../../../catalogs/nationalities';
  import nationality from './store';

  const identifier = 6;
  let label = 'País de nacimiento';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={nationalities} value={nationality} />
