import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";

axios.defaults.baseURL = "https://my-json-server.typicode.com";
const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
