<template>
  <v-app>
    <v-main>
      <base-sidesheet></base-sidesheet>
      <main-header></main-header>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    'main-header': require('./components/mainHeader/mainHeader').default,
    'base-sidesheet': require('./components/common/baseSideSheet').default
  }
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;900&display=swap')

.main
  width: 100%

</style>
