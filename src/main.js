import "@material/typography/dist/mdc.typography.min.css";

import App from "./App.svelte";
import "./styles.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
