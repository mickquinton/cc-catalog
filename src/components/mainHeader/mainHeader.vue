<template>
  <div>
    <v-app-bar app color="grey darken-4" dark height="72" hide-on-scroll>
      <v-btn class="mr-2 d-sm-none d-xs-flex" @click.stop="drawer = !drawer" icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="d-flex align-center">
        <v-img alt="UX" class="shrink mx-2" contain src="../../assets/cloudcity-logo-light.svg" width="56" @click="changeRoute('/')" style="cursor:pointer" />
      </div>

      <nav class="nav-wrap d-none d-sm-inline-flex flex-wrap ml-2 mr-6">
        <v-btn v-for="(nav, i) in mainNavigation" :key="i" class="grey--text text--lighten-1 font-weight-bold text-compressed" text>
          <span :ref="nav.title" @click="changeRoute(nav.path)" :class="nav.path === $route.path && 'active-nav'" class="text-capitalize">{{ nav.title }}</span>
        </v-btn>
      </nav>

      <v-btn class="ml-auto float-right" v-if="$vuetify.theme.dark" @click="toggleTheme" icon>
        <v-icon>mdi-white-balance-sunny</v-icon>
      </v-btn>

      <v-btn class="ml-auto float-right" v-else @click="toggleTheme" icon>
        <v-icon color="grey lighten-4">mdi-weather-night</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="text--accent-4">
          <v-list-item @click="changeRoute('/cards')">
            <v-list-item-title>Study 1</v-list-item-title>
          </v-list-item>

          <v-list-item @click="changeRoute('/lists')">
            <v-list-item-title>Study 2</v-list-item-title>
          </v-list-item>

          <v-list-item @click="changeRoute('/study003')">
            <v-list-item-title>Study 3</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null
    }
  },

  watch: {
    group() {
      this.drawer = false
    }
  },

  computed: {
    mainNavigation() {
      return this.$store.getters["Navigation/mainNavigation"]
    }
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style></style>
