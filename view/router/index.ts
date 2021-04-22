import Home from '../views/Home.vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { onCreateApp } from '../utils';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

onCreateApp(app => {
  app?.use(router);
});
