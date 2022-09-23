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
    path: '/band-members',
    name: 'Band Members',
    component: () => import('../views/BandMembers.vue')
  },
  {
    path: '/set-list',
    name: 'Set List',
    component: () => import( '../views/SetList.vue')
  },
  {
    path: '/add-song',
    name: 'Add Song',
    component: () => import( '../views/AddSong.vue')
  },
  {
    path: '/edit-song/:id',
    name: 'Edit Song',
    component: () => import( '../views/EditSong.vue')
  },
  {
    path: '/live/:id',
    name: 'Live View',
    component: () => import( '../views/Live.vue')

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
