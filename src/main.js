import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import Admin from "./main/dashboard.vue";
import Home from "./components/Homepage.vue";
import Kelas1 from "./main/Kelas1.vue";
import Kelas2 from "./main/kelas2.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Admin},
  { path: "/ce0301", component: Kelas1},
  { path: "/ce0302", component: Kelas2},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
