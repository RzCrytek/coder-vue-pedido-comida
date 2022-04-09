<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <form ref="form" @submit.prevent="login()">
        <v-text-field
          v-model="username"
          name="username"
          label="Username"
          type="text"
          placeholder="username"
          prepend-icon="mdi-account"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          name="password"
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          prepend-icon="mdi-lock"
          required
        ></v-text-field>

        <v-alert v-if="error" dense prominent text type="error">
          {{ errorMessage }}
        </v-alert>

        <v-btn
          type="submit"
          class="mt-4"
          color="primary"
          value="log in"
          :disabled="!isValid"
          >Iniciar Sesión</v-btn
        >

        <div class="mt-4">
          <router-link
            class="grey--text text-decoration-none mt-4"
            to="register"
            >Regístrate</router-link
          >
        </div>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      error: false,
      errorMessage: '',
    };
  },
  methods: {
    async login() {
      const userAPI = 'https://62451d360e8dd89b5438a71d.mockapi.io/users';
      const { username, password } = this;

      try {
        const response = await axios(userAPI);
        const data = await response.data;

        const userExists = data.find(
          (user) => user.username == username && user.password == password
        );

        if (!userExists) {
          this.errorMessage = 'No se encontró el usuario';
          return (this.error = true);
        }

        this.error = false;
        this.errorMessage = '';

        const isAdmin = 'admin'.includes(userExists.roles);
        // const userData = { ...userExists, isAdmin: isAdmin };
        const redirect = isAdmin ? 'dashboard' : 'home';

        this.$store.dispatch('loggedUser', userExists);
        this.$router.push({ name: redirect });
      } catch (error) {
        console.log('error', error);
      }
    },
  },
  computed: {
    isValid() {
      return this.username && this.password;
    },
  },
};
</script>
