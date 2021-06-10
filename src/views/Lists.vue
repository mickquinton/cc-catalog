<template>
  <v-container class="pb-8" fluid>
    <!-- TV SCREEN -->
    <v-row>
      <v-container>
        <main-banner 
          :img="tvScreenList[0].img" 
          :title="tvScreenList[0].title" 
          :category="tvScreenList[0].category">
        </main-banner>
      </v-container>
    </v-row>

    <!-- SECTION TITLE -->
    <v-row>
      <v-container>
        <v-row class="ml-1">
          <v-col class="d-flex">
            <v-icon outlined color="amber darken-4" large>mdi-slot-machine-outline</v-icon>
            <v-card-text class="text-h4 font-weight-bold">Lorem ipsum</v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-row>

    <!-- CONTENT -->
    <v-row>
      <v-container>
        <template>
          <v-tabs v-model="tab" color="active ? '' : 'grey--text text--lighten-1'" background-color="transparent">
            <v-tabs-slider color="amber darken-4"></v-tabs-slider>
            <v-tab>Item One</v-tab>
            <v-tab>Item Two</v-tab>
          </v-tabs>

          <v-tabs-items class="mt-4" v-model="tab">
            <!-- ITEM 1: FEATURED ITEMS -->
            <csn-featured-item></csn-featured-item>

            <!-- ITEM 2: ALL GAMES -->
            <csn-all-games-item></csn-all-games-item>
          </v-tabs-items>
        </template>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    components: {
      'main-banner': require('../components/common/mainBanner').default,
      'csn-featured-item': require('../components/csn/featuredContent').default,
      'csn-all-games-item': require('../components/csn/allGamesContent').default
    },

    data() {
      return {
        tab: null
      }
    },

    computed: {
      heroesList() {
        return this.$store.getters['Heroes/heroesList']
      },

      tvScreenList() {
        return this.$store.getters['Heroes/tvScreenList']
      }
    }
  }
</script>

<style lang="sass" scoped>

  .v-card__actions
    height: 4rem

  .theme--dark.v-tabs-items
    background-color: transparent
</style>
