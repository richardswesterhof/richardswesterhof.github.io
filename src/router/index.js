import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/socials',
    name: 'Socials',
    component: () => import(/* webpackChunkName: "socials" */ '@/views/Socials.vue')
  },
  {
    path: '/cv',
    name: 'Curriculum Vitae',
    component: () => import(/* webpackChunkName: "cv" */ '@/views/CurriculumVitae.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '@/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // set the title of the page to "Richard Westerhof - [ROUTE_NAME]"
  document.title = process.env.VUE_APP_BASE_TITLE + " - " + to.name.toString()
  // always call next()!
  next();
});

export default router
