import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import Admin from "@/main/datamahasiswa.vue";
import "./index.css";

const routes = [
  {
    path: "/datamahasiswa",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
