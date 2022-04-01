import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '@/pages/layouts/Layout.vue';

import LoginPage from '@/pages/auth/LoginPage.vue';
import RegisterPage from '@/pages/auth/RegisterPage.vue';
import HomePage from '@/pages/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/auth/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      layout: Layout,
    },
  },
  {
    path: '/menu/detail',
    name: 'detail',
    component: () => import('../pages/MenuDetailPage.vue'),
    meta: {
      layout: Layout,
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/CartPage.vue'),
    meta: {
      layout: Layout,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
