import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Comment from "../views/comment/Comment";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Comment,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      }
    ]
  },
  {
    path: "/detail",
    component: Comment,
    children: [
      {
        path: "",
        name: "detail",
        component: () => import("../views/detail/Detail")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => {
      import("../views/login/Login");
    }
  },
  {
    path: "*",
    name: "error",
    component: () => {
      import("../views/error/Error");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
