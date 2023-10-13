import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login2 from "../views/Login2.vue";
import Register from "../views/Register.vue";
import Project from "../views/start/Project.vue";
import NotFound from "../views/NotFound.vue";
import AuthLayout from "../components/core/AuthLayout.vue";
import DefaultLayout from "../components/core/DefaultLayout.vue";
import Restrictions from "../views/execution/Restrictions.vue";
import AddRestrictions2 from "../views/execution/AddRestrictions2.vue";
import RestrictionsIndicators from "../views/execution/RestrictionsIndicators.vue";
import Graphic from "../views/execution/Graphic.vue";
import Person from "../views/person/Person.vue";
import Person_edit from "../views/person/Person_edit.vue";
import PasswordForgotten from "../views/PasswordForgotten.vue";
import PasswordRecover from "../views/PasswordRecover.vue";
import store from "../store";

var routes = [

  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    component: AuthLayout,
    meta: {isGuest: true},
    children: [
      {
        path: "/cambiarcreden",
        name: "cambiarcreden",
        component: PasswordRecover,
        meta: { layout: 'login', sidebarOpen: false },
      },
      {
        path: "/login",
        name: "login",
        component: Login2,
        meta: { layout: 'login', sidebarOpen: false },
      },
      {
        path: "/registro",
        name: "registro",
        component: Register,
        meta: { layout: 'registro', sidebarOpen: false },
      },
      {

        path: "/recuperar",
        name: "recuperar",
        component: PasswordForgotten,
        meta: { layout: 'login', sidebarOpen: false },

      },
    ],
  },
  {
    path: "/",
    redirect: "/home",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
        meta: { layout: 'home', sidebarOpen: true },
      },
      {
        path: "/proyectos",
        name: "Create_Project",
        component: Project,
        meta: { layout: 'home' , sidebarOpen: true},
      },
      {
        path: "/indicadores",
        name: "RestrictionsIndicators",
        component: RestrictionsIndicators,
        meta: { layout: 'home' , sidebarOpen: true},
        // children:[

        // ]
      },
      {
        path: "/restricciones",
        name: "restrictions_analysis",
        component: Restrictions,
        meta: { layout: 'home' , sidebarOpen: true},
        // children:[

        // ]
      },


      {
        path: "/restricciones_agregar",
        name: "add_restrictions",
        component: AddRestrictions2,
        meta: { layout: 'home' , sidebarOpen: false},
      },

      {
        path: "/graphic_advance",
        name: "graphic_advance",
        component: Graphic,
        meta: { layout: 'home' , sidebarOpen: true},
      },
      {
        path: "/person",
        name: "person",
        component: Person,
        meta: { layout: 'home' , sidebarOpen: true},
      },
      {
        path: "/person_edit",
        name: "person_edit",
        component: Person_edit,
        meta: { layout: 'home' , sidebarOpen: true},
      },

    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: import.meta.env.VITE_WEB_BASE_URL,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "login" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
