<template>
  <v-app-bar app color="primary" dark>
    <router-link
      class="d-flex align-center white--text text-decoration-none"
      to="/"
    >
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <h1>PedidoDeComidas</h1>
    </router-link>

    <v-spacer></v-spacer>

    <nav>
      <v-btn text to="/">
        Menús
        <v-icon right>mdi-food</v-icon>
      </v-btn>

      <v-btn
        class="btn-cart"
        :class="{ added: classAnimation }"
        text
        to="/cart"
        v-if="getQuantityMenus > 0"
      >
        Carrito
        <v-icon right>mdi-cart-outline</v-icon>
        <sup class="ml-1" v-html="moreThanNine" />
      </v-btn>

      <v-btn text to="/auth/login" v-if="!isLogin">
        Admin
        <v-icon>mdi-account-box</v-icon>
      </v-btn>

      <v-menu offset-y v-else>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            {{ userName }}
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/dashboard">
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </nav>
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav> -->
  </v-app-bar>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Header',
  methods: {
    logout() {
      this.$store.dispatch('logout');
      // this.$router.push({ name: 'home' });
    },
  },
  computed: {
    ...mapState(['menusCart']),
    ...mapGetters(['isLogin', 'userName', 'getQuantityMenus']),
    moreThanNine() {
      const getQuantityMenus = this.getQuantityMenus;
      return getQuantityMenus > 9 ? `(9<sup>+</sup>)` : `(${getQuantityMenus})`;
    },
    classAnimation() {
      return this.menusCart.cartButtonAnimation;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-cart {
  &.added {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: shakeX;
  }
}

@keyframes shakeX {
  0%,
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  10%,
  50%,
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  30%,
  70% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }
}
</style>
