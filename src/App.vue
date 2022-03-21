<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>PedidoDeComidas</h1>
      </div>

      <v-spacer></v-spacer>

      <nav>
        <v-btn text href="#!">Menús</v-btn>
        <v-btn text href="#!">
          Carrito
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </nav>
    </v-app-bar>

    <v-main>
      <LoginPage />
      <RegisterPage />
      <MenuListPage />
      <MenuDetailPage />
      <CarritoPage />
    </v-main>
  </v-app>
</template>

<script>
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import MenuListPage from './pages/MenuListPage.vue';
import MenuDetailPage from './pages/MenuDetailPage.vue';
import CarritoPage from './pages/CarritoPage.vue';

export default {
  name: 'App',

  components: {
    LoginPage,
    RegisterPage,
    MenuListPage,
    MenuDetailPage,
    CarritoPage,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" src="./styles/app.scss"></style>
