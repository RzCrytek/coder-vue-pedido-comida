<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <router-link
              class="d-flex align-center justify-center white--text text-decoration-none mb-5"
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

              <h1 class="black--text">PedidoDeComidas</h1>
            </router-link>
            <!-- carga -->
            <slot />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>

<style></style>
