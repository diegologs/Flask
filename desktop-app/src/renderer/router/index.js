import Vue from 'vue'
import Router from 'vue-router'

import Task from '../components/Task/Task.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },

     {
      path: '/task/:id',
      name: 'task.show',
      component: Task
    },

    {
      path: '*',
      redirect: '/'
    }
  ]
})
