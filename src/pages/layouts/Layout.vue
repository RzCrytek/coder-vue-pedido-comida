<template>
  <v-app>
    <Header></Header>
    <h1>Default Layout</h1>
    <slot />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Layout',
  components: {
    Header,
  },
};
</script>

<style></style>
