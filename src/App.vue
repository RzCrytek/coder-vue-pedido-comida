<template>
  <!-- <v-app> -->
  <component :is="layout">
    <router-view :layout.sync="layout" />
  </component>
  <!-- </v-app> -->
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    layout: `div`,
  }),
};
</script>

<style lang="scss" src="./styles/app.scss"></style>
<style lang="scss">
/* nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
