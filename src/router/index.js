import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Blog from '../pages/Blog'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'login',
      component: Login
},
    {
      path: '/login',
      name: 'login',
      component: Login
},
    {
      path: '/register',
      name: 'register',
      component: Register
}
,
    {
      path: '/blog/:id',
      name: 'blog',
      component: Blog
}
  ]
})
