import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginPage from '@/pages/auth/LoginPage.vue';
import RegisterPage from '@/pages/auth/RegisterPage.vue';
import HomePage from '@/pages/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth/login',
    name: 'home',
    component: LoginPage,
  },
  {
    path: '/auth/register',
    name: 'home',
    component: RegisterPage,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/menu/detail',
    name: 'detail',
    component: () => import('../pages/MenuDetailPage.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/CartPage.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
