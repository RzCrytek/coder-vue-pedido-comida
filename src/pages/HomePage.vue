<template>
  <v-main id="home">
    <v-container>
      <v-row>
        <MenuCard v-for="menu in menus" :key="menu.id" :menu="menu" />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios';
import MenuCard from '@/components/MenuCard.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      menus: [],
    };
  },
  components: {
    MenuCard,
  },
  methods: {},
  async created() {
    const ListMenuApi = 'https://62451d360e8dd89b5438a71d.mockapi.io/menus';

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
