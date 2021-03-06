import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Todo',
    component: Todo
  }, {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})
