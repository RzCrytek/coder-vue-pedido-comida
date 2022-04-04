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
              src="https://www.lima2019.pe/sites/default/files/inline-images/preview-gallery-006_0.jpg"
            ></v-img>
          </v-col>
          <v-col class="data-content" md="6">
            <h1 class="mb-1">CEVICHE</h1>
            <div class="d-flex">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <span>(500)</span>
              <span class="mx-2">|</span>
              <span><strong>Stock:</strong> 10</span>
            </div>
            <p class="my-6 description">
              Ahora pasamos a un plato querido por todos los peruanos y que sin
              duda recomendamos a todo aquel que visita nuestro país por primera
              vez. Como su nombre lo indica, el lomo es saltado en sartén hasta
              adquirir la cocción adecuada junto un poco de vinagre y algunas
              especias para luego pasar a ser acompañado por papas fritas y
              arroz. El Lomo Saltado es un plato cuyo origen se remonta a la
              llegada de los chinos-cantoneses a Perú a partir del siglo XIX,
              quienes terminaron de perfeccionar este plato tan exquisito que
              paladares de todo el mundo buscan probar apenas pisan suelo
              peruano.
            </p>

            <div class="mb-6">
              <span><strong>Precio:</strong></span>
              <p class="text-h4">S/ 60.00</p>
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
import Counter from '@/components/Counter.vue';

export default {
  name: 'MenuDetailPage',
  components: {
    Counter,
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
