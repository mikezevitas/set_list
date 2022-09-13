import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SongList from '../views/SongsList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/songs',
    name: 'Song List',
    component: SongList
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add-song',
    name: 'Add Song',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddSong.vue')
  },
  {
    path: '/edit-song/:id',
    name: 'Edit Song',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditSong.vue')
  },
  {
    path: '/live/:id',
    name: 'Live View',
    component: () => import(/* webpackChunkName: "about" */ '../views/Live.vue')

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
