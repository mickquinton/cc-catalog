export default {
  namespaced: true,
  state() {
    return {
      bannerList: {
        banner001: { title: 'Nunc laoreet eleifend', category: 'PROMOTION', priority: 'high', rating: 123, img: { src: require('@/assets/images/banner-xl/banner-xl-001.jpg') } },
        banner002: { title: 'Ut scelerisque hendrerit', category: 'GAME OF THE DAY', priority: 'high', rating: 300, img: { src: require('@/assets/images/banner-xl/banner-xl-002.jpg') } },
        banner003: { title: 'Pellentesque placerat', category: 'GAME OF THE DAY', priority: 'low', rating: 214, img: { src: require('@/assets/images/banner-xl/banner-xl-003.jpg') } },
        banner004: { title: 'Quisque interdum sapien', category: 'ALL-TIME FAVE', priority: 'low', rating: 975, img: { src: require('@/assets/images/banner-xl/banner-xl-004.jpg') } }
      },

      gameList: {
        game001: { title: 'Aliquam faucibus', type: '3D slots', priority: 'high', rtp: 98.7, rating: 123, img: { src: require('@/assets/images/thumb-sm/thumb-sm-001.jpg') } },
        game002: { title: 'Lorem ipsum dolor', type: '3D slots', priority: 'low', rtp: 97.1, rating: 300, img: { src: require('@/assets/images/thumb-sm/thumb-sm-002.jpg') } },
        game003: { title: 'Nam vulputate', type: 'table game', priority: 'high', rtp: 96.2, rating: 214, img: { src: require('@/assets/images/thumb-sm/thumb-sm-003.jpg') } },
        game004: { title: 'Cras pretium', type: 'table game', priority: 'low', rtp: 96.7, rating: 975, img: { src: require('@/assets/images/thumb-sm/thumb-sm-004.jpg') } },
        game005: { title: 'Maecenas maximus', type: 'social', priority: 'high', rtp: 92.3, rating: 534, img: { src: require('@/assets/images/thumb-sm/thumb-sm-005.jpg') } },
        game006: { title: 'Suspendisse potenti', type: 'social', priority: 'low', rtp: 99.2, rating: 635, img: { src: require('@/assets/images/thumb-sm/thumb-sm-006.jpg') } },
        game007: { title: 'Curabitur rhoncus', type: 'jackpot', priority: 'high', currency: 'RMB 9,343,653.54', rtp: 97.3, rating: 876, img: { src: require('@/assets/images/thumb-sm/thumb-sm-007.jpg') } },
        game008: { title: 'Aenean quis', type: 'jackpot', priority: 'low', currency: 'RMB 31,542,456.90', rtp: 99.2, rating: 654, img: { src: require('@/assets/images/thumb-sm/thumb-sm-008.jpg') } },
        game009: { title: 'Sed semper ante', type: 'arcade', priority: 'high', rtp: 98.7, rating: 324, img: { src: require('@/assets/images/thumb-sm/thumb-sm-009.jpg') } },
        game010: { title: 'Vivamus non ex', type: 'arcade', priority: 'low', rtp: 97.1, rating: 983, img: { src: require('@/assets/images/thumb-sm/thumb-sm-010.jpg') } },
        game011: { title: 'Orci varius', type: 'casual', priority: 'medium', rtp: 96.2, rating: 213, img: { src: require('@/assets/images/thumb-sm/thumb-sm-011.jpg') } },
        game012: { title: 'Morbi justo', type: 'casual', priority: 'medium', rtp: 96.7, rating: 564, img: { src: require('@/assets/images/thumb-sm/thumb-sm-012.jpg') } },
        game013: { title: 'Proin at risus sagittis', type: 'shooter', priority: 'medium', rtp: 92.3, rating: 837, img: { src: require('@/assets/images/thumb-sm/thumb-sm-013.jpg') } },
        game014: { title: 'Integer fringilla', type: 'shooter', priority: 'medium', rtp: 99.2, rating: 164, img: { src: require('@/assets/images/thumb-sm/thumb-sm-014.jpg') } }
      }
    }
  },

  getters: {
    bannerList(state) {
      return state.bannerList
    },

    gameList(state) {
      return state.gameList
    }
  }
}
