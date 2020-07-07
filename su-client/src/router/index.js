import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import Diary from "../views/Diary";
import Gallery from "../views/Gallery";
import Message from "../views/Message";
import Shop from "../views/Shop";
import About from "../views/About"


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
   component: About
  },
  {
    path: '/diary',
    name: 'Diary',
   component: Diary
  },
  {
    path: '/gallery',
    name: 'Gallery',
   component: Gallery
  },
  {
    path: '/message',
    name: 'Message',
   component: Message
  },
  {
    path: '/shop',
    name: 'Shop',
   component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
