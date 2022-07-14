import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Refer from '../views/Refer.vue'
import View from '../views/View.vue'
import SentItems from '../views/SentItems.vue'
import Trash from '../views/Trash.vue'
import SentItemView from '../views/SentItemView.vue'
import Compose from '../views/Compose.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/refer',
    name: 'Refer',
    component: Refer
  },
  {
    path: '/View/:msgId',
    name: 'View',
    component: View
  },
  {
    path: '/SentItems/SentView/:msgId',
    name: 'SentItemView',
    component: SentItemView
  },
  {
    path: '/SentItems',
    name: 'SentItems',
    component: SentItems
  },
  {
    path: '/Trash',
    name: 'Trash',
    component: Trash
  },
  {
    path: '/Compose',
    name: 'Compose',
    component: Compose
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
