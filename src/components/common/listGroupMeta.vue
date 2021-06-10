<template>
  <v-card :width="$vuetify.breakpoint.smAndDown ? '100%' : '49.6%'" height="544" rounded>
    <v-sheet class="pa-2 d-flex">
      <v-card-text class="text-h6">{{ listTitle }}</v-card-text>
      <v-btn class="mr-2 align-self-center" @click="showSideSheet" icon><v-icon>mdi-arrow-right</v-icon></v-btn>
    </v-sheet>

    <v-sheet v-for="(item, i) in gameList" :key="i">
      <v-sheet v-if="item.priority === priority">
        <product-list-sm :img="item.img" :title="item.title" :rating="item.rating"> </product-list-sm>
      </v-sheet>
    </v-sheet>
  </v-card>
</template>

<script>
  export default {
    props: {
      listTitle: String,
      priority: String,
    },
    components: {
      'product-list-sm': require('../../components/common/productListSm').default
    },

    computed: {
      gameList() {
        return this.$store.getters['Assets/gameList']
      }
    },

    methods: {
      toggleSideSheet() {
        this.$store.dispatch('Sidesheet/toggleSideSheet')
      },

      showSideSheet() {
        this.toggleSideSheet({ isOn: true })
      }
    }
  }
</script>

<style></style>
