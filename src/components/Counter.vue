<template>
  <div class="menu-counter d-flex align-center ali" style="max-width: 250px">
    <v-btn class="mx-2" fab dark small color="primary">
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>

    <v-text-field
      class="centered-input text-center"
      value="1"
      denso
      solo
      outlined
      flat
      disabled
      readonly
      hide-details="false"
    ></v-text-field>

    <v-btn class="mx-2" color="primary" fab dark small>
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Counter',
};
</script>

<style></style>
