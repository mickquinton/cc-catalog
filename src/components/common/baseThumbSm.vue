<template>
  <v-card class="transparent" elevation="0" rounded>
    <v-img 
        :src="thumbImg"
        height="56"
        width="56">
    </v-img>
  </v-card>
</template>

<script>
  export default {
    props: {
        thumbImg: Object
    },

    computed: {
      heroesList() {
        return this.$store.getters['Heroes/heroesList']
      }
    }
  }
</script>

<style></style>
