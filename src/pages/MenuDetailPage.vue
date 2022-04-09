<template>
  <v-main class="demo" id="menu-detail">
    <v-toolbar class="back-to" dense elevation="1">
      <div class="container">
        <v-btn text to="/">
          <v-icon>mdi-chevron-left</v-icon>
          Regresar
        </v-btn>
      </div>
    </v-toolbar>
    <div class="main-container">
      <v-container>
        <v-row>
          <v-col class="image-content" md="6">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-width=""
              height="100%"
              :src="menu.image"
            ></v-img>
          </v-col>
          <v-col class="data-content" md="6">
            <h1 class="mb-1">{{ menu.name }}</h1>
            <div class="d-flex">
              <v-rating
                :value="menu.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <span>({{ menu.totalRating }})</span>
              <span class="mx-2">|</span>
              <span><strong>Stock:</strong> {{ menu.stock }}</span>
            </div>
            <p class="my-6 description">
              {{ menu.description }}
            </p>

            <div class="mb-6">
              <span><strong>Precio:</strong></span>
              <p class="text-h4">S/ {{ menu.price.toFixed(2) }}</p>
            </div>

            <Counter />

            <v-btn class="font-weight-black mt-10" color="" dark large
              >AGREGAR AL CARRITO</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import axios from 'axios';
import Counter from '@/components/Counter.vue';

export default {
  name: 'MenuDetailPage',
  components: {
    Counter,
  },
  data() {
    return {
      menu: [],
    };
  },
  async mounted() {
    const ListMenuDetailApi = `https://62451d360e8dd89b5438a71d.mockapi.io/menus/${this.$route.params.id}`;

    try {
      await axios(ListMenuDetailApi).then(({ data }) => (this.menu = data));
    } catch (error) {
      console.log('error:', error);
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.image-content {
  background-color: white;
}

.data-content {
  h1 {
    text-transform: uppercase;
  }
}
</style>
