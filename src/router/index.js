import { createRouter, createWebHistory } from 'vue-router'
import Testing from '../views/Testing.vue'
import Vacciantion from '../views/Vaccination.vue'
import TestingUpdates from '../views/testing/TestingUpdates.vue'
import TestingRules from '../views/testing/TestingRules.vue'
import TestingUsers from '../views/testing/TestingUsers.vue'
import TestingNotifications from '../views/testing/TestingNotifications.vue'

const routes = [
  { path: '/', redirect: '/testing' },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing,
    children: [
      { path: '/', redirect: '/update' },
      {
        path: 'update',
        component: TestingUpdates
      },
      {
        path: 'rule',
        component: TestingRules
      },
      {
        path: 'user',
        component: TestingUsers
      },
      {
        path: 'notification',
        component: TestingNotifications
      }
    ]
  },
  {
    path: '/vaccination',
    name: 'Vaccination',
    component: Vacciantion
  },
  {
    path: '/rules',
    name: 'Rules',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rules.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
