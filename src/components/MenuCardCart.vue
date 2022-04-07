<template>
  <v-card class="mb-4" outlined>
    <div class="d-flex py-4 px-4">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        src="https://www.lima2019.pe/sites/default/files/inline-images/preview-gallery-006_0.jpg"
        width="100px"
        height="100px"
      />

      <div class="card-info ml-4">
        <div class="d-flex justify-space-between align-center card-info-data">
          <div class="info-name">
            <h3>Ceviche</h3>
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </div>

          <div class="info-price">
            <h3 class="teal--text">S/ 100.00</h3>
          </div>
        </div>

        <v-card-actions class="justify-space-between px-0">
          <Counter smallCount />
          <v-btn text color="error">Eliminar</v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
import Counter from '@/components/Counter.vue';

export default {
  name: 'MenuCardCart',
  components: {
    Counter,
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  width: 100%;
}
</style>
