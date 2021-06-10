export default {
  namespaced: true,
  state() {
    return {
      mainNavigation: [
        { title: "Study 1", path: "/cards" },
        { title: "Study 2", path: "/lists" },
        { title: "Study 3", path: "/study003" },
      ],

      pageHeaders: [
        { title: "Morbi justo", icon: 'mdi-slot-machine' },
        { title: "Lorem ipsum dolor", icon: 'mdi-poker-chip' },
        { title: "See more", icon: 'mdi-arrow-right' },
        { title: "Back", icon: 'mdi-arrow-left' },
      ],

      headerList: {
        casino: { title: "Morbi justo", icon: 'mdi-slot-machine' },
        liveCasino: { title: "Lorem ipsum dolor", icon: 'mdi-poker-chip' },
        seeMore: { title: "See more", icon: 'mdi-arrow-right' },
        back: { title: "Back", icon: 'mdi-arrow-left' },
      }
    }
  },

  getters: {
    mainNavigation(state) {
      return state.mainNavigation
    },

    pageHeaders(state) {
      return state.pageHeaders
    },

    headerList(state) {
      return state.headerList
    }
  }
}
