import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: () => import('../views/Home.vue')
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import('../views/Lists.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../views/Cards.vue')
  },
  {
    path: '/study003',
    name: 'Study003',
    component: () => import('../views/Study003.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
