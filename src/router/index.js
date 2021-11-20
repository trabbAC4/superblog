
//Implemented vue router and built routes for navbar
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import yourposts from '../views/selfposts.vue'
import login from '../views/login.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/viewothers',
    name: 'others',
    component: About, 
  },
  {
    path: '/viewyours',
    name: 'yours',
    component: yourposts
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
