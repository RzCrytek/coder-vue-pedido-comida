<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
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
                    prepend-icon="person"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="password"
                    prepend-icon="lock"
                    required
                  ></v-text-field>

                  <v-btn
                    type="submit"
                    class="mt-4"
                    color="primary"
                    value="log in"
                    >Iniciar Sesión</v-btn
                  >
                  <div class="grey--text mt-4">Regístrate</div>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const { username } = this;
      console.log(username + 'logged in');
    },
  },
};
</script>
