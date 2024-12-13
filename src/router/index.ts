import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import About from '../views/About.vue'
import HowToOrder from '../views/HowToOrder.vue'
import Contact from '../views/Contact.vue'
import Checkout from '../views/Checkout.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/how-to-order',
      name: 'how-to-order',
      component: HowToOrder
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router