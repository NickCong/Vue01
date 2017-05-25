import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import About from '../components/About'
import Recruit from '../components/Recruit'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Blog from '../pages/Blog'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
},
    {
      path: '/about',
      name: 'about',
      component: About
},
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
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
      path: '/blog',
      name: 'blog',
      component: Blog
}
  ]
})
