import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AppIndex from '../views/AppIndex.vue'
import Details from '../views/Details.vue'
import Cart from '../views/Cart.vue'
import ShoppingCart from '../components/cart/shoppingCart.vue'


import UnLogin from '../components/cart/unLogin.vue'
import Test from '../components/cart/shoppingCart.vue'

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
      },
      {
        path:'/cart',
        name:'cart',
        component:Cart,
        children:[
          {
            path:'/cart',
            component:ShoppingCart
          },
          {path:'/cart/unLogin',
          component:UnLogin,
        }
        ]

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
    path:'/details',
    name:'details',
    component:Details
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
