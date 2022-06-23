import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import router from "./router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import './index.css'

const app = createApp(App);
const Pinia = createPinia();
Pinia.use(piniaPluginPersistedstate);
app.use(Pinia);
app.use(router);

app.mount("#app");
