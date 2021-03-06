import Vue from "vue";
import Router from "vue-router";
import FallsCounter from "../views/FallsCounter";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{ path: "/", name: "/", component: FallsCounter }]
});
