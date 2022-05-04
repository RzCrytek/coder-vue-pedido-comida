<template>
  <v-main class="demo" id="chk-payment">
    <div class="main-container">
      <v-container>
        <v-row>
          <v-col class="information" md="7">
            <section class="information-content">
              <v-breadcrumbs :items="breadcrumbs">
                <template v-slot:divider>
                  <v-icon>mdi-chevron-right</v-icon>
                </template>
              </v-breadcrumbs>

              <form ref="form" @submit.prevent="payment()">
                <h3>Método de pago</h3>

                <v-radio-group v-model="newOrder.methodPayment" row>
                  <v-radio label="Efectivo" value="Efectivo"></v-radio>
                  <v-radio label="Tarjeta" value="Tarjeta"></v-radio>
                </v-radio-group>

                <h3 class="mb-4">Información del cliente</h3>

                <v-text-field
                  v-model="newOrder.buyer.email"
                  label="Correo"
                  outlined
                ></v-text-field>

                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="newOrder.buyer.name"
                      label="Nombre"
                      outlined
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="newOrder.buyer.lastName"
                      label="Apellido"
                      outlined
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-text-field
                  v-model="newOrder.buyer.address"
                  label="Dirección"
                  outlined
                  required
                ></v-text-field>

                <v-text-field
                  v-model="newOrder.buyer.phone"
                  label="Celular"
                  outlined
                  required
                ></v-text-field>

                <v-btn type="submit" color="cyan" large :disabled="!isValid"
                  >FINALIZAR COMPRA</v-btn
                >
              </form>
            </section>
          </v-col>

          <v-col class="summary-sidebar">
            <aside class="sidebar-content">
              <div class="ordered-products">
                <MenuCardCart
                  v-for="menu in menusCart.cart"
                  :key="menu.id"
                  :menu="menu"
                  readOnly
                />
              </div>

              <div class="order-summary">
                <div
                  class="d-flex justify-space-between py-4 order-summary--row"
                >
                  <p>Subtotal ({{ this.$store.getters.getQuantityMenus }})</p>
                  <p>S/ {{ getTotalPriceMenus }}</p>
                </div>

                <div
                  class="d-flex justify-space-between py-4 order-summary--row"
                >
                  <p>Envío</p>
                  <p>GRATIS</p>
                </div>

                <div
                  class="d-flex justify-space-between py-4 order-summary--row"
                >
                  <p><strong>TOTAL</strong></p>
                  <p>
                    <strong>S/ {{ getTotalPriceMenus }}</strong>
                  </p>
                </div>
              </div>
            </aside>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          ¡GRACIAS POR REALIZAR EL PEDIDO!
        </v-card-title>
        <v-card-text
          >Recibirás un correo electrónico y un mensaje de texto cuando tu
          pedido esté en camino.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#3ddc97" @click="finalizePurchase" style="color: white">
            <b>Volver a los pedidos</b>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import MenuCardCart from '@/components/MenuCardCart.vue';

export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Cart',
          disabled: false,
          href: 'cart',
        },
        {
          text: 'Payment',
          disabled: true,
          href: '',
        },
      ],
      newOrder: {
        methodPayment: null,
        buyer: {
          email: null,
          name: null,
          lastName: null,
          address: null,
          phone: null,
        },
      },
      dialog: false,
    };
  },
  components: {
    MenuCardCart,
  },
  methods: {
    payment() {
      this.dialog = true;
    },
    finalizePurchase() {
      this.$router.push({ name: 'home' });
      this.$store.dispatch('clearCart');
      this.dialog = false;
    },
  },
  computed: {
    ...mapGetters(['getTotalPriceMenus']),
    ...mapState(['menusCart']),
    isValid() {
      const { methodPayment, buyer } = this.newOrder;
      return (
        methodPayment &&
        buyer.email &&
        buyer.name &&
        buyer.lastName &&
        buyer.address &&
        buyer.phone
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 0;
  height: 100%;

  & > .container {
    height: 100%;

    & > .row {
      height: 100%;
    }
  }
}
.information {
  position: relative;

  &::before {
    content: '';
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100%;
    box-shadow: inset -1px 0 0 #e1e1e1;
    /* z-index: -1; */
  }

  &-content {
    position: relative;
    padding-right: 5%;
  }

  .v-breadcrumbs {
    padding-left: 0;
  }
}

.summary-sidebar {
  .sidebar-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 150px);
    padding-left: 5%;
  }

  .ordered-products {
    overflow-y: auto;
    flex: 0 1 auto;
    border-bottom: 1px solid #ccc;
  }

  .order-summary {
    &--row {
      border-bottom: 1px solid rgba(#ccc, 0.6);

      p {
        margin: 0;
      }
    }
  }
}
</style>
