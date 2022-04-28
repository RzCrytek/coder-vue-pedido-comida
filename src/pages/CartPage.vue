<template>
  <v-main id="cart">
    <!-- <pre>{{ JSON.stringify(menusCart.cart, null, 2) }}</pre> -->
    <v-container>
      <v-row>
        <v-col cols="12" md="7">
          <div class="content">
            <h3 class="mb-6">
              CARRITO DE COMPRAS
              <span class="grey--text">- {{ getQuantity }}</span>
            </h3>

            <div class="content-menus">
              <MenuCardCart
                v-for="menu in menusCart.cart"
                :key="menu.id"
                :menu="menu"
              />
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="5">
          <div class="content">
            <h3 class="mb-6">RESUMEN DE TU PEDIDO</h3>

            <div class="order-summary">
              <div class="d-flex justify-space-between py-4 order-summary--row">
                <p>Subtotal (1)</p>
                <p>S/ 100.00</p>
              </div>

              <div class="d-flex justify-space-between py-4 order-summary--row">
                <p>Envío</p>
                <p>GRATIS</p>
              </div>

              <div class="d-flex justify-space-between py-4 order-summary--row">
                <p><strong>TOTAL</strong></p>
                <p><strong>S/ 100.00</strong></p>
              </div>
            </div>

            <v-btn color="cyan" class="mt-4" block
              >TOTAL: S/ 100.00 | PAGAR</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from 'vuex';
import MenuCardCart from '@/components/MenuCardCart.vue';

export default {
  name: 'CartPage',
  components: {
    MenuCardCart,
  },
  computed: {
    ...mapState(['menusCart']),
    getQuantity() {
      const quantity = this.$store.getters.getQuantityMenus;
      const messageQuantity = quantity > 1 ? 'Productos' : 'Producto';
      return `${quantity} ${messageQuantity}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  background-color: white;
  padding: 32px;
}

.order-summary {
  &--row {
    border-bottom: 1px solid rgba(#ccc, 0.6);

    p {
      margin: 0;
    }
  }
}
</style>
