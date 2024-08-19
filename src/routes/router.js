import { createWebHistory, createRouter } from 'vue-router'

import Home from './Home.vue'
import Cart from './Cart.vue'

const routes = [
  { 
    path: '/', 
    component: Home,
    props: true
  },
  { 
    path: '/cart', 
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router