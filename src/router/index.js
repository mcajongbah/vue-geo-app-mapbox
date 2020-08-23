import Vue from 'vue'
import VueRouter from 'vue-router'
import MapBox from '../components/MapBox'
import Signup from '../components/auth/Signup.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MapBox',
    component: MapBox
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
