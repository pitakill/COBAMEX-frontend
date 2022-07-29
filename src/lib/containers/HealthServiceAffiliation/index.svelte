<script>
  import Select from '../../components/Select.svelte';
  import healthservices from '../../../catalogs/health-services';
  import healthservice from './store';

  const identifier = 18.1;
  let label = 'Afiliación a los servicios de salud';

  label = `${identifier}. ${label}`;
</script>

<Select {label} items={healthservices} value={healthservice} />
