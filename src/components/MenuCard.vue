<template>
  <v-card class="mx-auto my-6" max-width="374" to="/menu/detail">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="menu.image"></v-img>

    <v-card-title> {{ menu.name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="menu.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ menu.rating }} ({{ menu.totalRating }})
        </div>
      </v-row>

      <div class="mt-4 mb-2 text-subtitle-1">
        <b>S/ {{ menu.price.toFixed(2) }}</b>
      </div>

      <!-- <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div> -->
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MenuCard',
  props: {
    menu: Object,
  },
};
</script>

<style></style>
