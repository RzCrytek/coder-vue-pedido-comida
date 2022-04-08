<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Registro</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <form ref="form" @submit.prevent="register()">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="name"
              name="name"
              label="Nombre"
              type="text"
              placeholder="Nombre"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="lastname"
              name="lastname"
              label="Apellido"
              type="text"
              placeholder="Apellido"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
          v-model="email"
          name="email"
          label="Correo"
          type="email"
          placeholder="Correo"
          required
        ></v-text-field>

        <v-text-field
          v-model="username"
          name="username"
          label="Username"
          type="text"
          placeholder="username"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          name="password"
          label="Password"
          type="password"
          placeholder="password"
          required
        ></v-text-field>

        <v-text-field
          v-model="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          required
        ></v-text-field>
        <div class="red--text">{{ errorMessage }}</div>
        <v-btn type="submit" class="mt-4" color="primary" value="log in"
          >Registrar</v-btn
        >
        <div class="grey--text mt-4">
          ¿Ya tiene una cuenta?
          <router-link class="grey--text text-decoration-none mt-4" to="login"
            >Inicie sesión</router-link
          >.
        </div>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
    };
  },
  methods: {
    register() {
      if (this.password == this.confirmPassword) {
        this.errorMessage = '';
        this.$refs.form.reset();
      } else {
        this.errorMessage = 'la contraseña no coincide';
      }
    },
  },
};
</script>
