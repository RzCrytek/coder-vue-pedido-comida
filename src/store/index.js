import Vue from 'vue';
import Vuex from 'vuex';
import menusCartModule from './menusCartModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    isLogin: (state) => {
      return state.user?.isLogin;
    },
    userName: (state) => {
      return state.user.name;
    },
    isAdmin: (state) => {
      return state.user.isAdmin;
    },
  },
  mutations: {
    loggedUser(state, payload) {
      const { name, lastname, roles } = payload;
      const isAdmin = 'admin'.includes(roles);
      state.user = { name, lastname, isLogin: true, isAdmin };
    },
    logout(state) {
      state.user = {};
    },
  },
  actions: {
    loggedUser(context, payload) {
      context.commit('loggedUser', payload);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  modules: {
    menusCart: menusCartModule,
  },
});
