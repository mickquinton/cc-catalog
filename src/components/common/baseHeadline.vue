<template>
  <v-btn icon @click.stop="dismissSideSheet" class="ml-4 mt-4">
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
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
