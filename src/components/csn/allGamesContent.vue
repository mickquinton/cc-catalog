<template>
  <div>
    <v-item-group>
      <v-tab-item>
        <v-row class="d-none d-md-flex mt-4 pa-0">
          <v-container class="pa-0">
            <!-- THUMBNAIL LOOP -->
            <v-col class="mt-n4">
              <v-row dense>
                <v-container class="d-flex flex-wrap pa-0">
                  <v-item-group class="ma-2" v-for="(hero, i) in heroesList" :key="i">
                    <v-item v-slot="{ active, toggle }">
                      <v-card transition="scroll-y-transition" :color="active ? '' : ''" @click="toggle" width="135" height="208" style="margin: 0 -4px 4px -4px">
                        <v-img transition="fade-transition" :src="hero.img.src" class="white--text align-end shrink" gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5) 200%" height="120"> </v-img>
                        <v-card-actions>
                          <v-card-text class="text-body-2 px-2">{{ hero.title }}</v-card-text>
                        </v-card-actions>
                        <v-card-text class="text-caption px-4 mt-n6">RTP: {{ hero.rtp }}</v-card-text>
                      </v-card>
                    </v-item>
                  </v-item-group>
                </v-container>
              </v-row>
            </v-col>
          </v-container>
        </v-row>

        <!-- MOBILE -->
        <v-row class="d-sm-flex d-md-none mt-4 pa-0">
          <v-container class="pa-0">
            <!-- THUMBNAIL LOOP -->
            <v-col class="mt-n4">
              <v-row dense>
                <v-container :class="$vuetify.breakpoint.xs ? 'd-flex flex-wrap pa-0 justify-center' : 'd-flex flex-wrap pa-0'">
                  <v-item-group class="px-0" v-for="(hero, i) in heroesList" :key="i" style="margin">
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :class="$vuetify.breakpoint.xs ? 'mx-1 my-2' : 'mx-2 my-2'"
                        transition="scroll-y-transition"
                        :color="active ? '' : ''"
                        @click="toggle"
                        :width="$vuetify.breakpoint.xs ? '170' : $vuetify.breakpoint.sm ? '168' : '135'"
                        height="208"
                      >
                        <v-img transition="fade-transition" :src="hero.img.src" class="white--text align-end shrink" gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5) 200%" height="120"> </v-img>
                        <v-card-actions>
                          <v-card-text class="text-body-2 px-2">{{ hero.title }}</v-card-text>
                        </v-card-actions>
                        <v-card-text class="text-caption px-4 mt-n6">RTP: {{ hero.rtp }}</v-card-text>
                      </v-card>
                    </v-item>
                  </v-item-group>
                </v-container>
              </v-row>
            </v-col>
          </v-container>
        </v-row>
      </v-tab-item>
    </v-item-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: null
      }
    },

    computed: {
      heroesList() {
        return this.$store.getters['Heroes/heroesList']
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
