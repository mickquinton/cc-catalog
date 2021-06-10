<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card class="mx-auto" width="149" height="236">
        <v-img 
          alt="Game image" 
          transition="fade-transition" 
          gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5) 200%" 
          height="128" 
          :src="img"> </v-img>

        <v-card-actions class="px-0 mt-1">
          <v-card-text :class="$vuetify.theme.dark ? 'text-body-1 px-4 white--text' : 'text-body-1 px-4'">{{ title }} </v-card-text>
        </v-card-actions>

        <v-card-text class="text-caption px-4 mt-n2">RTP: {{ rtp }} </v-card-text>

        <!-- <v-rating :value="4" dense color="orange" background-color="orange" hover class="mr-2 px-3 pb-4" size="16"></v-rating> -->

        <v-scale-transition>
          <v-overlay v-if="hover" class="mt-8" absolute :opacity="0" color="#111111">
            <v-card :class="$vuetify.theme.dark ? '' : 'white'" width="180" height="292" elevation="6" rounded>
              <v-img 
                alt="Game image" 
                transition="fade-transition" 
                gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5) 200%"
                height="128" 
                :src="img"
                class="align-top">

                <v-btn class="float-right ma-2" @click="showSideSheet" icon><v-icon>mdi-information-outline</v-icon></v-btn>
                </v-img>

              <v-card-actions class="px-0 mt-1">
                <v-card-text :class="$vuetify.theme.dark ? 'text-body-1 px-4 white--text' : 'text-body-1 px-4 black--text'">{{ title }} </v-card-text>
              </v-card-actions>

              <v-sheet class="transparent mx-8">
                <v-btn class="amber darken-4" width="117">Play now</v-btn>
                <v-btn class="mt-2" color="grey darken-1" width="117" text>Free play</v-btn>
              </v-sheet>
            </v-card>
          </v-overlay>

          <!-- <v-overlay v-if="hover" absolute :opacity="0.9" color="#111111"> -->

          <!-- Play now and Free play btns -->
          <!-- <v-sheet class="transparent mx-4 mb-8">
              <v-btn class="amber darken-4" width="117">Play now</v-btn>
              <v-btn class="mt-2" color="grey darken-1" width="117" outlined><span style="color: white">Free play</span></v-btn>
            </v-sheet> -->

          <!-- <v-btn class="mx-4 mt-8 primary--text" @click="showSideSheet" text>More info</v-btn> -->

          <!-- Game title and more info icon -->
          <!-- <v-sheet class="d-flex transparent mt-n2">
              <v-card-text class="float-left">{{ title }}</v-card-text>
              <v-btn class="align-self-center float-right ml-2 mr-1" @click="showSideSheet" icon><v-icon>mdi-information-outline</v-icon></v-btn>
            </v-sheet> -->

          <!-- </v-overlay> -->
        </v-scale-transition>
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
      rtp: Number
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
