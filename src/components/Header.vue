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

      <v-btn text to="/cart">
        Carrito
        <v-icon right>mdi-cart-outline</v-icon>
      </v-btn>

      <v-btn text to="/auth/login">
        Admin
        <v-icon>mdi-account-box</v-icon>
      </v-btn>
    </nav>
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav> -->
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
