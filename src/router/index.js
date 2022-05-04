import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';

import LoginPage from '@/pages/auth/LoginPage.vue';
import RegisterPage from '@/pages/auth/RegisterPage.vue';
import HomePage from '@/pages/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth/login',
    name: 'login',
    component: LoginPage,
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/auth/register',
    name: 'register',
    component: RegisterPage,
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      layout: 'Layout',
    },
  },
  {
    path: '/menu/detail/:id',
    name: 'detail',
    component: () => import('../pages/MenuDetailPage.vue'),
    meta: {
      layout: 'Layout',
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/CartPage.vue'),
    meta: {
      layout: 'Layout',
    },
  },
  {
    path: '/checkout/payment',
    name: 'checkout_payment',
    component: () => import('../pages/checkout/Payment.vue'),
    meta: {
      layout: 'Layout',
    },
  },
  {
    path: '/checkout/order/:id',
    name: 'checkout_order',
    component: () => import('../pages/checkout/OrderPage.vue'),
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../pages/dashboard/Dashboard.vue'),
    meta: {
      requiresAuthAdmin: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' },
  },
];
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogged = store.getters.isLogin;
  const isAdmin = store.getters.isAdmin;

  if (to.matched.some((record) => record.meta.requiresAuthAdmin)) {
    if (to.meta.requiresAuthAdmin && isLogged && isAdmin) next();
    else next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
