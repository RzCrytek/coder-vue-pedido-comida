<template>
  <div>
    <Header></Header>
    <h1>Default Layout</h1>
    <slot />
  </div>
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
