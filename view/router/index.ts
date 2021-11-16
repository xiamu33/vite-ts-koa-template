import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { onCreateApp } from '../utils';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

onCreateApp(app => {
  app!.use(router);
});
