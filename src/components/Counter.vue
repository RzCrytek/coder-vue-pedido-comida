<template>
  <div class="menu-counter d-flex align-center ali" style="max-width: 250px">
    <v-btn
      class="mx-2"
      color="primary"
      fab
      dark
      :small="!smallCount"
      :x-small="smallCount"
    >
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>

    <v-text-field
      class="centered-input text-center"
      :class="smallCount ? 'x-small' : null"
      value="1"
      denso
      solo
      outlined
      flat
      disabled
      readonly
      hide-details="false"
    ></v-text-field>

    <v-btn
      class="mx-2"
      color="primary"
      fab
      dark
      :small="!smallCount"
      :x-small="smallCount"
    >
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    smallCount: Boolean,
  },
  computed: {},
};
</script>

<style></style>
