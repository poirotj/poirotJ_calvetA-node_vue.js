import Vue from 'vue'
import Router from 'vue-router'
import leBody from '@/components/leBody.vue'
import addTodo from '@/components/addTodo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'leBody',
      component: leBody
    },
    {
      path: '/addTodo',
      name: 'addTodo',
      component: addTodo
    }
  ]
})
