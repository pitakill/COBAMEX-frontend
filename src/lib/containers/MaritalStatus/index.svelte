<script>
  import Select from '../../components/Select.svelte';
  import maritalStatuses from '../../../catalogs/marital-statuses';
  import maritalStatus from './store';

  const identifier = 19;
  let label = 'Situación conyugal';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={maritalStatuses} value={maritalStatus} />
