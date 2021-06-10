<template>
  <v-sheet class="d-flex my-0 transparent">

    <v-sheet class="flex-grow-1 transparent">
      <v-card-text class="text-h6">{{ title }}</v-card-text>
    </v-sheet>

    <v-sheet class="ml-auto align-self-center justify-end transparent">
      <v-btn class="d-none d-sm-flex" text>{{ label }}<v-icon class="ml-4">{{ icon }}</v-icon></v-btn>
       <v-btn class="d-sm-none d-flex mr-4" icon><v-icon>{{ icon }}</v-icon></v-btn>
    </v-sheet>

  </v-sheet>
</template>

<script>
  export default {
    props: {
      icon: String,
      title: String,
      label: String
    },

    computed: {
      pageHeaders() {
        return this.$store.getters['Navigation/pageHeaders']
      }
    }
  }
</script>

<style></style>
