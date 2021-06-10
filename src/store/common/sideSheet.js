export default {
  namespaced: true,
  state() {
    return {
      isOn: false
    }
  },

  getters: {
    isOn(state) {
      return state.isOn
    }
  },

  mutations: {
    toggleSideSheet(state) {
      state.isOn = !state.isOn
    }
  },

  actions: {
    toggleSideSheet({ commit }) {
      commit("toggleSideSheet")
    },

  }
}
