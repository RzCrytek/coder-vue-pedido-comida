export default {
  state: {
    cart: [],
  },
  getters: {
    getQuantityMenus: (state) => {
      const quantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
      return quantity;
    },
  },
  mutations: {
    getMenuProduct(state, payload) {
      console.log('state:', state);
      console.log('payload:', payload);
      state.cart.push(payload);
      console.log('stateCart:', state.cart);
    },
  },
  actions: {
    addMenu(context, payload) {
      console.log('context:', context);
      console.log('payload:', payload);
      context.commit('getMenuProduct', payload);
    },
  },
};

// export default productsCartModule;
