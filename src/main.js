// import { createApp } from 'vue'

// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from "vue";

import store from "./store/index.js";
import App from "./App.vue";
import Router from "./router.js";
import { Quasar, Dialog } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass"; // Import Quasar css
const app = createApp(App);
app.use(Quasar, {
  plugins: {
    Dialog,
  },
});
app.use(store);
app.use(Router);
app.mount("#app");
