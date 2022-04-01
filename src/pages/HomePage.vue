<template>
  <v-main>
    <v-container>
      <v-row>
        <v-card
          class="mx-auto my-6"
          max-width="374"
          to="/menu/detail"
          v-for="(item, index) in newArray"
          :key="index"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Lorem Ipsum {{ item }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="mt-4 mb-2 text-subtitle-1"><b>S/ 50.00</b></div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Layout from './layouts/Layout.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      newArray: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {},
  created() {
    this.$emit(`update:layout`, Layout);
  },
};
</script>
