<script>
  import { Router, Route } from 'svelte-navigator';

  import Menu from './views/Menu.svelte';
  import Home from './views/Home.svelte';
  import SociodemographicData from './views/SociodemographicData.svelte';
</script>

<Router basepath="/COBAMEX-frontend">
  <Menu />
  <Route path="">
    <Home />
  </Route>
  <Route path="datos-sociodemograficos">
    <SociodemographicData />
  </Route>
</Router>
