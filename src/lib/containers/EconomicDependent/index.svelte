<script>
  import Select from '../../components/Select.svelte';
  import basics from '../../../catalogs/basics';
  import economicDependent from './store';

  const identifier = 19;
  let label = '¿Es dependiente económico?';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={basics} value={economicDependent} />
