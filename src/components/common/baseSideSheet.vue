<template>
  <v-navigation-drawer class="overflow-scroll" :width="$vuetify.breakpoint.xs ? '80%' : '400'" v-model="sideSheet" fixed right temporary>
    <!-- <base-headline></base-headline> -->
    <!-- <component :is="isComponent"></component> -->
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      sideSheet: false

      //   baseHeadline: "base-headline"
    }
  },

  //   components: {
  //     "base-headline": require("../common/baseHeadline").default
  //   },

  watch: {
    sideSheetIsOn() {
      this.sideSheet = this.sideSheetIsOn
    },

    sideSheet() {
      !this.sideSheet &&
        (() => {
          //   this.$store.dispatch("SideSheet/resetComponent")
          this.$store.dispatch("Sidesheet/toggleSideSheet", { isOn: false })
        })()
    }
  },

  computed: {
    sideSheetIsOn() {
      return this.$store.getters["Sidesheet/isOn"]
    }
  },

  methods: {
    dismissSideSheet() {
      this.$store.dispatch("Sidesheet/toggleSideSheet", { isOn: false })
    }
  },

  mounted() {
    this.sideSheet = this.sideSheetIsOn
  }
}
</script>

<style></style>
