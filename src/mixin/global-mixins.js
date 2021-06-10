export default {
    data() {
      return {
        // empty
      }
    },
    computed: {
    },
  
    methods: {
      changeRoute(path) {
        path !== this.$route.path && this.$router.push(path)
      }
    }
  }
  