<template>
  <div class="menu-counter d-flex align-center ali" style="max-width: 250px">
    <v-btn
      class="mx-2"
      color="primary"
      fab
      dark
      :small="!smallCount"
      :x-small="smallCount"
      @click="
        automaticUpdate
          ? decreaseMenu({ menuId, quantityMenuAdded })
          : decrement()
      "
    >
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>

    <v-text-field
      class="centered-input text-center"
      :class="smallCount ? 'x-small' : null"
      :value="automaticUpdate ? quantityMenuAdded : quantity"
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
      @click="
        automaticUpdate
          ? increaseMenu({ menuId, quantityMenuAdded, stock })
          : increment()
      "
    >
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Counter',
  props: {
    smallCount: Boolean,
    stock: Number,
    automaticUpdate: Boolean,
    menuId: Number,
    quantityMenuAdded: Number,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapState(['menusCart']),
  },
  methods: {
    ...mapActions(['decreaseMenu', 'increaseMenu']),
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
};
</script>

<style></style>
