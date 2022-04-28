<template>
  <div class="menu-counter d-flex align-center ali" style="max-width: 250px">
    <v-btn
      class="mx-2"
      color="primary"
      fab
      dark
      :small="!smallCount"
      :x-small="smallCount"
      @click="decrement"
    >
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>

    <v-text-field
      class="centered-input text-center"
      :class="smallCount ? 'x-small' : null"
      :value="quantity"
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
      @click="increment"
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
    stock: Number,
    automaticUpdate: Boolean,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    decrement() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    increment() {
      if (this.quantity < this.stock) {
        this.quantity += 1;
      }
    },
  },
  watch: {
    quantity() {
      console.log('watch:', this.quantity);
      this.$emit('quantity', this.quantity);
    },
  },
  computed: {},
};
</script>

<style></style>
