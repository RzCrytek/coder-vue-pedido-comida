<template>
  <v-main>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Registro</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <form ref="form" @submit.prevent="register()">
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
                  <router-link
                    class="grey--text text-decoration-none mt-4"
                    to="login"
                    >Inicie sesión</router-link
                  >.
                </div>
              </form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
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
