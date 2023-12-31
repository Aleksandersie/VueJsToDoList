import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "../components/MainPage"
import TaskPage from "../components/TaskPage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/todo',
      name: 'TaskPage',
      component: TaskPage
    },

  ]
})
