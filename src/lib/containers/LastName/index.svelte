<script>
  export let identifier = 4.2;

  import Input from '../../components/Input.svelte';
  import lastname from './store';

  let label = 'Primer apellido';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={lastname} />
