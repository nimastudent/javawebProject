import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AppIndex from '../views/AppIndex.vue'


import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect:'/index'
  },
  {
    path:'/index',
    name:'index',
    component:Index,
    children: [
      {
        path:'/index',
        name:'AppIndex',
        component:AppIndex
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/test',
    component:Test
  }
]

const router = new VueRouter({
  routes
})

export default router
