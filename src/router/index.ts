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
      component: () => Promise.resolve(Home)
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => Promise.resolve(Menu)
    },
    {
      path: '/about',
      name: 'about',
      component: () => Promise.resolve(About)
    },
    {
      path: '/how-to-order',
      name: 'how-to-order',
      component: () => Promise.resolve(HowToOrder)
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => Promise.resolve(Contact)
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => Promise.resolve(Checkout)
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => Promise.resolve(Cart)
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Add global navigation guard
router.beforeEach((to, from, next) => {
  next()
})

// Add error handling
router.onError((error) => {
  console.error('Router error:', error)
  router.push('/')
})

export default router