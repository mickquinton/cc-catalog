<template>
  <div class="d-flex overflow-x-auto mt-n2 pb-4">
    <v-card class="mt-4 mx-2" max-width="136" elevation="2" rounded>
      <v-img :src="heroesList[0].img.src" height="104px"></v-img>
      <v-card-title class="text-body-1">
        {{ title }}
      </v-card-title>

      <v-card-subtitle> RTP: {{ rtp }} heloo </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: {
      src: Object,
      title: String,
      rtp: Number,
  },

  computed: {
    heroesList() {
      return this.$store.getters["Heroes/heroesList"]
    }
  }
}
</script>

<style></style>
