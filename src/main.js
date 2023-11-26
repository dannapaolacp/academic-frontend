import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import of libraries used for styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(store).use(router).mount("#app");

//importing bootstrap libreries
import "bootstrap/dist/js/bootstrap";
