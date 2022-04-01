<template>
  <v-app>
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({}),
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
