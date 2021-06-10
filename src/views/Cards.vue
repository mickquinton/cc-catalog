<template>
  <div class="mx-6">
    <v-carousel class="mt-6 mb-6" v-model="model" hide-delimiters hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(hero, i) in heroesList" :key="i">
        <div>
          <v-img :src="hero.img.src" height="800px">
            <v-card-title class="text-h4">
              {{ hero.title }}
            </v-card-title>
          </v-img>
        </div>
      </v-carousel-item>
    </v-carousel>
    <div>
      <v-card-title>
        Popular cards
      </v-card-title>
      <small-card ></small-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
    }
  },

  computed: {
    heroesList() {
      return this.$store.getters["Heroes/heroesList"]
    }
  },

  components: {
    "small-card": require("../components/csn/smallCard").default
  }
}
</script>

<style></style>
