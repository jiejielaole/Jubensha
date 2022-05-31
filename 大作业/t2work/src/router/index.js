import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
            keepAlive: false
          }
  },
  {
    path: '/me',
    name: 'me',
    meta: {
            keepAlive: false
          },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MeView.vue')
  },
  {
    path: '/yueche',
    name: 'yueche',
    meta: {
            keepAlive: false
          },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/YueCheView.vue')
  },
  {
    path: '/juben',
    name: 'juben',
    meta: {
            keepAlive: false
          },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JuBenView.vue')
  },
  {
    path: '/jubeninfo',
    name: 'jubeninfo',
    meta: {
            keepAlive: false
          },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JuBenInfoView')
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory(),
  routes
})

export default router
