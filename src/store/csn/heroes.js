export default {
  namespaced: true,
  state() {
    return {
      tvScreenList:[
        { title: "Nunc laoreet eleifend", category: 'PROMOTION', priority: 'high', rating: 123, img: {src: require("@/assets/images/banner-xl/banner-xl-001.jpg")} },
        { title: "Ut scelerisque hendrerit", category: 'GAME OF THE DAY', priority: 'high', rating: 300, img: {src: require("@/assets/images/banner-xl/banner-xl-002.jpg")} },
        { title: "Pellentesque placerat", category: 'GAME OF THE DAY', priority: 'low', rating: 214, img: {src: require("@/assets/images/banner-xl/banner-xl-003.jpg")} },
        { title: "Quisque interdum sapien", category: 'ALL-TIME FAVE', priority: 'low', rating: 975, img: {src: require("@/assets/images/banner-xl/banner-xl-004.jpg")} },
      ],

      heroesList: [
        { title: "Aliquam faucibus", priority: 'high', rtp: 98.7, rating: 123, img: {src: require("@/assets/images/thumb-sm/thumb-sm-001.jpg")} },
        { title: "Lorem ipsum dolor", priority: 'low', rtp: 97.1, rating: 300, img: {src: require("@/assets/images/thumb-sm/thumb-sm-002.jpg")} },
        { title: "Nam vulputate", priority: 'high', rtp: 96.2, rating: 214, img: {src: require("@/assets/images/thumb-sm/thumb-sm-003.jpg")} },
        { title: "Cras pretium", priority: 'low', rtp: 96.7, rating: 975, img: {src: require("@/assets/images/thumb-sm/thumb-sm-004.jpg")} },
        { title: "Maecenas maximus", priority: 'high', rtp: 92.3, rating: 534, img: {src: require("@/assets/images/thumb-sm/thumb-sm-005.jpg")} },
        { title: "Suspendisse potenti", priority: 'low', rtp: 99.2, rating: 635, img: {src: require("@/assets/images/thumb-sm/thumb-sm-006.jpg")} },
        { title: "Curabitur rhoncus", priority: 'high', rtp: 97.3, rating: 876, img: {src: require("@/assets/images/thumb-sm/thumb-sm-007.jpg")} },
        { title: "Aenean quis", priority: 'low', rtp: 99.2, rating: 654, img: {src: require("@/assets/images/thumb-sm/thumb-sm-008.jpg")} },
        { title: "Sed semper ante", priority: 'high', rtp: 98.7, rating: 324, img: {src: require("@/assets/images/thumb-sm/thumb-sm-009.jpg")} },
        { title: "Vivamus non ex", priority: 'low', rtp: 97.1, rating: 983, img: {src: require("@/assets/images/thumb-sm/thumb-sm-010.jpg")} },
        { title: "Orci varius", priority: 'medium', rtp: 96.2, rating: 213, img: {src: require("@/assets/images/thumb-sm/thumb-sm-011.jpg")} },
        { title: "Morbi justo", priority: 'medium', rtp: 96.7, rating: 564, img: {src: require("@/assets/images/thumb-sm/thumb-sm-012.jpg")} },
        { title: "Proin at risus sagittis", priority: 'medium', rtp: 92.3, rating: 837, img: {src: require("@/assets/images/thumb-sm/thumb-sm-013.jpg")} },
        { title: "Integer fringilla", priority: 'medium', rtp: 99.2, rating: 164, img: {src: require("@/assets/images/thumb-sm/thumb-sm-014.jpg")} },
      ],

      assetsList: {
        asset001: { title: "Aliquam faucibus", priority: 'high', rtp: 98.7, rating: 123, img: {src: require("@/assets/images/thumb-sm/thumb-sm-001.jpg")} },
        asset002: { title: "Lorem ipsum dolor", priority: 'low', rtp: 97.1, rating: 300, img: {src: require("@/assets/images/thumb-sm/thumb-sm-002.jpg")} },
        asset003: { title: "Nam vulputate", priority: 'high', rtp: 96.2, rating: 214, img: {src: require("@/assets/images/thumb-sm/thumb-sm-003.jpg")} },
      },

      mainBannerList: {
        banner001: { title: "Nunc laoreet eleifend", category: 'PROMOTION', priority: 'high', rating: 123, img: {src: require("@/assets/images/banner-xl/banner-xl-001.jpg")} },
        banner002: { title: "Ut scelerisque hendrerit", category: 'GAME OF THE DAY', priority: 'high', rating: 300, img: {src: require("@/assets/images/banner-xl/banner-xl-002.jpg")} },
        banner003: { title: "Pellentesque placerat", category: 'GAME OF THE DAY', priority: 'low', rating: 214, img: {src: require("@/assets/images/banner-xl/banner-xl-003.jpg")} },
        banner004: { title: "Quisque interdum sapien", category: 'ALL-TIME FAVE', priority: 'low', rating: 975, img: {src: require("@/assets/images/banner-xl/banner-xl-004.jpg")} },
      }
    }
  },

  getters: {
    heroesList(state) {
      return state.heroesList
    },

    tvScreenList(state) {
      return state.tvScreenList
    },

    assetsList(state) {
      return state.assetsList
    },

    mainBannerList(state) {
      return state.mainBannerList
    }
  }
}
