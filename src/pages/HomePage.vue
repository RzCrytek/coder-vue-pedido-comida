<template>
  <v-main id="home">
    <v-container>
      <v-row>
        <v-card
          class="mx-auto my-6"
          max-width="374"
          to="/menu/detail"
          v-for="menu in menus"
          :key="menu.id"
        >
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
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      menus: [],
    };
  },
  methods: {},
  async created() {
    const ListMenuApi =
      'https://mocki.io/v1/8d5bdfe4-50a4-4669-99cb-16f122f6b79b';

    try {
      await axios(ListMenuApi).then(({ data }) => (this.menus = data));
    } catch (error) {
      console.log('error:', error);
    }
  },
  // async created() {
  //   const ListMenuApi =
  //     'https://mocki.io/v1/8d5bdfe4-50a4-4669-99cb-16f122f6b79b';

  //   try {
  //     const response = await fetch(ListMenuApi);
  //     const data = await response.json();

  //     this.menus = data;
  //   } catch (error) {
  //     console.log('error:', error);
  //   }
  // },
};
</script>
