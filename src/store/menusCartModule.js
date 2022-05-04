import { storageSet, storageGet, storageRemove } from './localStorage';

export default {
  state: {
    cart: storageGet('cart') || [],
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
    validStockInCart(state, payload) {
      const valid = state.cart.some((menu) =>
        menu.id === payload.id
          ? menu.quantity + payload.quantity > menu.stock
          : null
      );

      return valid;
    },
  },
  mutations: {
    getMenuProduct(state, payload) {
      const menuInCart = state.cart.some((menu) => menu.id === payload.id);

      if (menuInCart) {
        const newCart = state.cart.map((menu) =>
          menu.id == payload.id
            ? { ...menu, quantity: menu.quantity + payload.quantity }
            : menu
        );

        storageSet('cart', newCart);
        return (state.cart = newCart);
      }

      storageSet('cart', [...state.cart, payload]);
      state.cart = [...state.cart, payload];
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
    getClearCart(state) {
      storageRemove('cart');
      state.cart = [];
    },
  },
  actions: {
    addMenu(context, payload) {
      context.commit('getMenuProduct', payload);
      // context.commit('validStockInCart', payload);
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
    clearCart({ commit }) {
      commit('getClearCart');
    },
  },
};

// export default productsCartModule;
