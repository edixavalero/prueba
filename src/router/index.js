import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Prueba from '@/components/prueba'
import Cards from '@/components/card'
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/prueba',
      name: 'Prueba',
      component: Prueba
    },
    {
      path: '/card',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
