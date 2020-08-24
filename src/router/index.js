import Vue from 'vue'
import VueRouter from 'vue-router'
import MapBox from '../components/MapBox'
import Signup from '../components/auth/Signup.vue'
import Login from '../components/auth/Login.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MapBox',
    component: MapBox,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },,
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth status of user
    let user = firebase.auth().currentUser

    if(user) {
      next()
    } else {
      next({ name: 'Login' })
    }

  } else {
    next()
  }
})

export default router
