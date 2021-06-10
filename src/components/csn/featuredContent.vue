<template>
  <div>

    <!-- FEATURED GAMES -->
    <v-sheet :class="$vuetify.breakpoint.smAndDown ? 'pa-1 transparent' : 'pa-1 transparent d-flex'">

      <product-card-md
        :img="bannerList.banner001.img"
        :title="bannerList.banner001.title"
        :category="bannerList.banner001.category"
        :rating="bannerList.banner001.rating"
        :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-1'"
        width="50%">
      </product-card-md>

      <product-card-md
        :img="bannerList.banner002.img"
        :title="bannerList.banner002.title"
        :category="bannerList.banner002.category"
        :rating="bannerList.banner002.rating"
        :class="$vuetify.breakpoint.smAndDown ? 'mt-4' : 'mx-1'"
        width="50%">
      </product-card-md>

    </v-sheet>

    <!-- POPULAR GAMES WIDGET -->
    <v-sheet class="pa-0 transparent mt-8 mb-2" height="64">
      <section-header 
        :title="headerList.casino.title" 
        :label="headerList.seeMore.title" 
        :icon="headerList.seeMore.icon">
      </section-header>
    </v-sheet>

    <v-sheet class="d-flex transparent overflow-x-auto mr-4 mt-n2 pt-4 pb-12 px-2" max-width="100%">
      <v-sheet class="mx-1" v-for="(item, i) in gameList" :key="i">
        <product-card-sm 
          :img="item.img" 
          :title="item.title" 
          :rtp="item.rtp">
        </product-card-sm>
      </v-sheet>
    </v-sheet>

    <!-- JACKPOT GAMES WIDGET -->
    <v-sheet class="transparent pb-10">
      <v-sheet :class="$vuetify.breakpoint.smAndDown ? 'pa-1 transparent' : 'pa-1 transparent d-flex' ">
        <v-sheet class="transparent pa-2" :width="$vuetify.breakpoint.smAndDown ? '100%' : '40%'">
          <v-card-text class="text-h6">Highest jackpot games</v-card-text>
          <v-card-text :class="$vuetify.theme.dark ? 'mt-n6 text-body-2 grey--text text--lighten-1' : 'mt-n6 text-body-2 grey--text text--darken-2'">Aliquam faucibus orci vitae consequat egestas. Maecenas maximus, vulputate ligula est et enim.</v-card-text>
          <v-col class="d-flex justify-start align-center mr-auto">
            <v-btn outlined>See more<v-icon class="ml-1">mdi-arrow-right</v-icon></v-btn>
          </v-col>
        </v-sheet>

        <v-sheet :class="$vuetify.breakpoint.smAndDown ? 'transparent pb-8' : 'd-flex transparent pb-8'" :width="$vuetify.breakpoint.smAndDown ? '100%' : '60%'">
          <v-sheet class="mx-1 transparent" v-for="(item, i) in gameList" :key="i">
            <v-sheet class="transparent my-4" v-if="item.type === 'jackpot'">
              <csn-jackpot-sm 
                :img="item.img"
                :currency="item.currency"
                :title="item.title">
              </csn-jackpot-sm>
            </v-sheet>
          </v-sheet>
        </v-sheet>

      </v-sheet>
    </v-sheet>

    <!-- GROUP LISTS -->
    <v-sheet :class="$vuetify.breakpoint.smAndDown ? 'pa-1 transparent': 'pa-1 transparent d-flex' " :height="$vuetify.breakpoint.smAndDown ? 1200 : 800">

      <list-group-meta
        :listTitle="gameList.game005.title"
        :priority="'high'"
        :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-1'"
        width="50%">
      </list-group-meta>

      <list-group-meta
        :listTitle="gameList.game001.title"
        :priority="'low'"
        :class="$vuetify.breakpoint.smAndDown ? 'mt-4' : 'mx-1'" 
        width="50%">
      </list-group-meta>

    </v-sheet>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: null
      }
    },

    components: {
      'product-card-md': require('../../components/common/productCardMd').default,
      'product-card-sm': require('../../components/common/productCardSm').default,
      'section-header': require('../../components/common/sectionHeader').default,
      'list-group-meta': require('../../components/common/listGroupMeta').default,
      'csn-jackpot-sm': require('../../components/csn/CsnJackpotCardSm').default
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

<style lang="sass" scoped>

  .v-card__actions
    height: 4rem

  .theme--dark.v-tabs-items
    background-color: transparent
</style>
