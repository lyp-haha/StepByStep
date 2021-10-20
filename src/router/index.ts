import { createRouter, createWebHashHistory } from 'vue-router'

import { routeLsit } from '../config/index'


const router = createRouter({
  history: createWebHashHistory(),
  routes: routeLsit
})

export default router