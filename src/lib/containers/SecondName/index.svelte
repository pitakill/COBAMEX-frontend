<script>
  export let identifier = 4.3;

  import Input from '../../components/Input.svelte';
  import secondname from './store';

  let label = 'Segundo Apellido';

  label = `${identifier}. ${label}`;
</script>

<Input {label} value={secondname} />
