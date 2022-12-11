import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/login/index'),
  },
  {
    path: "/forget",
    name: "forget",
    component: () => import('@/views/login/forget'),
  },
  {
    path: "/register",
    name: "register",
    component: () => import('@/views/login/register'),
  },
];

// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 }),
});

export default router;
