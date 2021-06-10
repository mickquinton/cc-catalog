<template>
  <v-card :width="$vuetify.breakpoint.smAndDown ? '100%' : '49.6%'" rounded>
      <v-img 
        :src="img" 
        class="align-end" 
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
        height="352">

        <v-card class="pa-0 ml-6" max-width="132" dark>
          <v-card-text class="text-caption pa-2 text-uppercase text-center">{{ category }}</v-card-text>
        </v-card>

        <v-sheet class="d-flex pa-0 transparent">
            <v-sheet class="ml-4 mb-4 pa-0 transparent">
                <v-card-title :class="$vuetify.breakpoint.xs ? 'text-h5 font-weight-bold white--text' : 'text-h6 white--text'">{{ title }}</v-card-title>
                <v-rating :value="4" dense color="orange" background-color="orange" hover class="mr-2 mt-n4 px-3" size="16"></v-rating>
                <v-card-text class="mt-n4 text-body-2 mt-n4 grey--text text--lighten-1">{{ rating }}+ ratings</v-card-text>
            </v-sheet>
    

          <v-col class="d-flex justify-end align-center ml-auto mr-4">
            <v-btn class="mx-1 d-none d-sm-flex" color="white" @click="showSideSheet" outlined><span style="color: white">More info</span></v-btn>
          </v-col>
        </v-sheet>
      </v-img>
    </v-card>
</template>

<script>
  export default {
    props: {
      img: Object,
      title: String,
      category: String,
      rating: Number,
    },

    computed: {
      gameList() {
        return this.$store.getters['Assets/gameList']
      },

      bannerList() {
        return this.$store.getters['Assets/bannerList']
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

<style>

</style>