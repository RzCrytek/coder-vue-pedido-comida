<template>
  <v-card class="mb-4" outlined>
    <div class="d-flex py-4 px-4" :class="{ 'align-center': readOnly }">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        :src="menu.image"
        width="100px"
        height="100px"
      />

      <div class="card-info ml-4">
        <div class="d-flex justify-space-between align-center card-info-data">
          <div class="info-name">
            <h3>{{ menu.name }}</h3>
            <v-rating
              :value="menu.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <p v-if="readOnly">Cantidad: {{ menu.quantity }}</p>
          </div>

          <div class="info-price">
            <h3 class="teal--text">S/ {{ menu.price.toFixed(2) }}</h3>
          </div>
        </div>

        <v-card-actions class="justify-space-between px-0" v-if="!readOnly">
          <Counter
            :stock="menu.stock"
            :menuId="menu.id"
            :quantityMenuAdded="menu.quantity"
            smallCount
            automaticUpdate
          />
          <v-btn text color="error" @click="removeMenu(menu.id)"
            >Eliminar</v-btn
          >
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
import Counter from '@/components/Counter.vue';

export default {
  name: 'MenuCardCart',
  props: {
    menu: Object,
    readOnly: Boolean,
  },
  components: {
    Counter,
  },
  methods: {
    ...mapActions(['removeMenu']),
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  width: 100%;
}
</style>
