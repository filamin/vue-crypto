import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "exchange-rate",
    component: () => import("../views/ExchangeRate.vue"),
  },
  {
    path: "/wallet",
    name: "wallet",
    component: () => import("../views/Wallet.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
