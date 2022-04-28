export default {
  state: {
    cart: [],
    cartButtonAnimation: false,
  },
  getters: {
    getQuantityMenus: (state) => {
      const quantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
      return quantity;
    },
    getTotalPriceMenus: (state) => {
      const total = state.cart
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
      return total;
    },
  },
  mutations: {
    getMenuProduct(state, payload) {
      state.cart.push(payload);
    },
    getDecreaseMenu(state, payload) {
      if (payload.quantityMenuAdded > 1) {
        const updateDecrease = state.cart.map((menu) =>
          menu.id == payload.menuId
            ? { ...menu, quantity: menu.quantity - 1 }
            : menu
        );

        state.cart = updateDecrease;
      }
    },
    getIncreaseMenu(state, payload) {
      if (payload.quantityMenuAdded < payload.stock) {
        const updateIncrease = state.cart.map((menu) =>
          menu.id == payload.menuId
            ? { ...menu, quantity: menu.quantity + 1 }
            : menu
        );

        state.cart = updateIncrease;
      }
    },
    getRemoveMenu(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    addMenu(context, payload) {
      context.commit('getMenuProduct', payload);
    },
    decreaseMenu({ commit }, payload) {
      commit('getDecreaseMenu', payload);
    },
    increaseMenu({ commit }, payload) {
      commit('getIncreaseMenu', payload);
    },
    removeMenu({ commit, state }, id) {
      const newCart = state.cart.filter((menu) => menu.id !== id);
      commit('getRemoveMenu', newCart);
    },
  },
};

// export default productsCartModule;
