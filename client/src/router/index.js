import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import Pagamento from "../views/Pagamento.vue";

const routes = [
  {
    path: "/",
    name: "Homee",
    component: Home,
  },
  {
    path: "/pagamento",
    name: "pagamento",
    component: Pagamento,
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
