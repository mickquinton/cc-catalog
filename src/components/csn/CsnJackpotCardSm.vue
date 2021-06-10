<template>
  <v-card class="mx-auto" :width="$vuetify.breakpoint.smAndDown ? '100%' : '298'">
    <v-img alt="Game image" transition="fade-transition" gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5) 200%" height="294" class="align-start" :src="img">
      <v-sheet class="d-flex justify-start align-center mr-auto ml-2 pb-6 transparent">
        <v-col class="d-flex justify-end align-center ml-auto mr-1">
          <v-btn class="float-right" @click="showSideSheet" icon><v-icon :color="$vuetify.theme.dark ? 'white' : 'white'">mdi-information-outline</v-icon></v-btn>
        </v-col>
      </v-sheet>

      <v-sheet class="pa-0 mt-16 ml-2 mb-2 transparent">
        <v-card-title :class="$vuetify.breakpoint.xs ? 'text-h5 font-weight-medium white--text' : 'text-h5 white--text'">{{ currency }}</v-card-title>
        <v-card-title :class="$vuetify.breakpoint.xs ? 'text-body-2 font-weight-medium white--text mt-n8' : 'text-body-2 white--text mt-n8'">{{ title }}</v-card-title>

        <v-col class="d-flex justify-start align-center mr-auto mt-n4">
              <v-btn class="mx-1 amber darken-4">Play now</v-btn>
              <v-btn class="mx-1" text><span style="color: white">Free play</span></v-btn>
            </v-col>
      </v-sheet>
    </v-img>

    <!-- <v-rating :value="4" dense color="orange" background-color="orange" hover class="mr-2 px-3 pb-4" size="16"></v-rating> -->
  </v-card>
</template>

<script>
  export default {
    props: {
      img: Object,
      title: String,
      currency: String
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

<style lang="sass" scoped>

  .v-card__actions
    height: 4rem
</style>
