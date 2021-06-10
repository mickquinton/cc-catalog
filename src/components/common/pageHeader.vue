<template>
  <v-row class="ml-1">
    <v-col class="d-flex">
      <v-icon outlined color="amber darken-4" medium>{{ icon }}</v-icon>
      <v-card-text class="text-h5 font-weight-bold">{{ title }}</v-card-text>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: {
        icon: String,
        title: String
    },
    
    computed: {
      pageHeaders() {
        return this.$store.getters['Navigation/pageHeaders']
      }
    }
  }
</script>

<style></style>
