<template>
  <v-app>
    <Header></Header>
    <!-- <h1>Default Layout</h1> -->
    <slot />
    <v-footer padless>
      <v-col class="text-center" cols="12">
        Todos los derechos reservados {{ new Date().getFullYear() }} —
        <strong>Crytek</strong>
      </v-col>
    </v-footer>
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
