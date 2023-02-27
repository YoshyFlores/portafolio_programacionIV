import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/introduccion",
      name: "Introducción",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/IntroView.vue"),
    },
    {
      path: "/investigaciones",
      name: "Sumario",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/InvestigacionesView.vue"),
    },
    {
      path: "/jornalizacion",
      name: "Jornalización",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/JornalizacionView.vue"),
    },
    {
      path: "/calendarizacion",
      name: "Calendarización",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CalendarizacionView.vue"),
    },
    {
      path: "/apuntes",
      name: "Apuntes",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ApuntesView.vue"),
    },
    {
      path: "/tareas",
      name: "Tareas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TareasView.vue"),
    },
    {
      path: "/sumario",
      name: "Investigaciones",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SumarioView.vue"),
    },
    {
      path: "/practicas",
      name: "Prácticas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PracticasView.vue"),
    },
    {
      path: "/evaluaciones",
      name: "Evaluaciones",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/EvaluacionesView.vue"),
    },
  ],
});

export default router;
