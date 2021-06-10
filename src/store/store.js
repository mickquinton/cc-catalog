import Vue from 'vue'
import Vuex from 'vuex'
import Navigation from './common/navigation'
import Heroes from './csn/heroes'
import Sidesheet from './common/sideSheet'
import Icon from './icon/icons'
import Assets from './csn/assetsCsn'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Navigation,
    Heroes,
    Sidesheet,
    Icon,
    Assets
  }
})
