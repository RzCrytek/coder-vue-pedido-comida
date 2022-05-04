<template>
  <!-- <v-app> -->
  <component :is="layout">
    <router-view />
  </component>
  <!-- </v-app> -->
</template>

<script>
const defaultLayout = '';

export default {
  name: 'App',
  components: {},
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      // console.log('layout', layout);
      // console.log('layout', layout ? 'si' : 'no');
      if (!layout) return 'div';
      return () => import(`@/pages/layouts/${layout}.vue`);
    },
  },
};
</script>

<style lang="scss" src="./styles/app.scss"></style>
<style lang="scss" scoped>
.theme--light.v-application {
  background-color: #f7f7f7;
}
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
