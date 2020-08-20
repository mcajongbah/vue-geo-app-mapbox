import Vue from 'vue'
import VueRouter from 'vue-router'
import MapBox from '../components/MapBox'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MapBox',
    component: MapBox
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
