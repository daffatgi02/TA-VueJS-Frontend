import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import Dashboard from "./components/homepage.vue";
import Kelas from "./components/kelas.vue";
import KelasCE0301 from "./components/CE-03-01.vue";
import KelasCE0302 from "./components/CE-03-02.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  { path: "/", component: Dashboard },
  { path: "/kelas", component: Kelas },
  { path: "/ce-03-01", name:'ce0301', component: KelasCE0301 },
  { path: "/ce-03-02", name:'ce0302', component: KelasCE0302 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
