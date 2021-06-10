<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card @click="showSideSheet" elevation="0" style="cursor: pointer">
        <v-sheet class="d-flex transparent py-4">
          <thumb-sm class="align-self-center ml-6" :thumbImg="img"></thumb-sm>
          <v-card-text class="ml-2 text-subtitle-1 align-self-center">{{ title }}</v-card-text>
          <v-sheet class="justify-end align-self-center" width="128">
            <v-card-text class="text-caption grey--text text--lighten-1">( {{ rating }} )</v-card-text>
          </v-sheet>
        </v-sheet>
        <v-divider :class="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"></v-divider>

        <v-fade-transition>
          <v-overlay v-if="hover" absolute :opacity="0.2" color="#111111">
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
  export default {
    data() {
      return {
        overlay: false
      }
    },
    props: {
      img: Object,
      title: String,
      rating: Number
    },

    components: {
      'thumb-sm': require('../common/baseThumbSm').default
    },

    computed: {
      gameList() {
        return this.$store.getters['Assets/gameList']
      },

      pageHeaders() {
        return this.$store.getters['Navigation/pageHeaders']
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
