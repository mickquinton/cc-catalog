<template>
  <v-container>

    <!-- TV SCREEN -->
    <main-banner 
      :img="bannerList.banner004.img" 
      :title="bannerList.banner004.title" 
      :category="bannerList.banner004.category">
    </main-banner>

    <!-- PAGE TITLE -->
    <page-header
      :icon="headerList.casino.icon"
      :title="headerList.casino.title"
      class="mt-2">
    </page-header>

    <!-- CONTENT -->
    <v-sheet class="transparent">
      <v-tabs v-model="tab" color="grey--text text--lighten-1" background-color="transparent">
        <v-tabs-slider color="amber darken-4"></v-tabs-slider>
        <v-tab>What's hot</v-tab>
        <v-tab>All games</v-tab>
      </v-tabs>

      <v-tabs-items class="mt-4 transparent" v-model="tab">
        
        <v-tab-item>
          <csn-content-featured></csn-content-featured>
        </v-tab-item>

        <v-tab-item>
          Test item group
        </v-tab-item>

      </v-tabs-items>

    </v-sheet>

  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        tab: null,
      }
    },
    
    components: {
      'main-banner': require('../components/common/mainBanner').default,
      'page-header': require('../components/common/pageHeader').default,
      'csn-content-featured': require('../components/csn/featuredContent').default
    },

    computed: {
      gameList() {
        return this.$store.getters['Assets/gameList']
      },

      bannerList() {
        return this.$store.getters['Assets/bannerList']
      },

      pageHeaders() {
        return this.$store.getters['Navigation/pageHeaders']
      },

       headerList() {
        return this.$store.getters['Navigation/headerList']
      }
    }
  }
</script>

<style></style>
