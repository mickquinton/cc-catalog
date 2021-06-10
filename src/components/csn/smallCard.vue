<template>
  <v-hover>
    <template>
      <div class="d-flex overflow-x-auto mt-n2 pb-4">
        <v-card class="mt-4 mx-2" max-width="136" elevation="2" v-for="(hero, i) in heroesList" :key="i" rounded @click="showSideSheet">
          <v-img :src="hero.img.src" height="104px"></v-img>
          <v-card-title class="text-body-1">
            {{ hero.title }}
          </v-card-title>

          <v-card-subtitle> RTP: {{ hero.rtp }} </v-card-subtitle>
          <!-- <v-rating class="mx-1" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" hover length="3" size="12" value="2.5" color="orange darken-3" background-color="grey lighten-1"></v-rating> -->

          <!-- <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#000000">
              <v-btn>more info</v-btn>
            </v-overlay>
          </v-fade-transition> -->
        </v-card>
      </div>
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
  computed: {
    heroesList() {
      return this.$store.getters["Heroes/heroesList"]
    }
  },

  methods: {
    sampleClick() {
      alert("Show card details")
    },

   toggleSideSheet() {
			this.$store.dispatch("Sidesheet/toggleSideSheet")
		},

		showSideSheet() {
			this.toggleSideSheet({ isOn: true })
		},
  }
}
</script>

<style></style>
