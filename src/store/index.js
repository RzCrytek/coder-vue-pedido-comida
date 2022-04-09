import Vue from 'vue';
import Vuex from 'vuex';

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
      console.log('loggedUser:', payload);
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
  modules: {},
});
