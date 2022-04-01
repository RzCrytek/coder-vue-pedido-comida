<template>
  <v-main>
    <v-container>
      <h1>Cart de compras</h1>
    </v-container>
  </v-main>
</template>

<script>
import Layout from './layouts/Layout.vue';

export default {
  name: 'CartPage',
  created() {
    this.$emit(`update:layout`, Layout);
  },
};
</script>
