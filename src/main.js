import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import Admin from "./main/datamahasiswa.vue";
import Home from "./components/Homepage.vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
