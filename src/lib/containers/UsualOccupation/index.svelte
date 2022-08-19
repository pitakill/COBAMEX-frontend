<script>
  import Select from '../../components/Select.svelte';
  import usualOccupations from '../../../catalogs/usual-occupations';
  import usualOccupation from './store';

  const identifier = 20.5;
  let label = 'Ocupación habitual';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={usualOccupations} value={usualOccupation} />
