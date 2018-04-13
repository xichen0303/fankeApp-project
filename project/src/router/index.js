import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
import Registered from '@/components/Registered'
import Login from '@/components/Login'
import FindPwd from '@/components/Findpwd'
import NewPro from '@/components/NewPro'
import Details from '@/components/Details'
=======
import shopping_cart from '@/components/shopping_cart'
import list_page from '@/components/list_page'
import preference from '@/components/preference'
import other_goods from '@/components/other_goods'
>>>>>>> 6140eaa4a9891f0a4f90829b4048fde3f3064b23
=======
import Home from '@/components/Home' // 首页
import Product from '@/components/Product' // 分类
import Customization from '@/components/Customization' // 定制
import Channel from '@/components/Channel' // 频道
>>>>>>> anhua

Vue.use(Router);

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/registered',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
<<<<<<< HEAD
      path: '/find',
      name: 'FindPwd',
      component: FindPwd
    },
    {
      path: '/new',
      name: 'NewProduct',
      component: NewPro
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
=======
      path: '/shopping_cart',
      name: 'shopping_cart',
      component: shopping_cart
    },{
      path: '/list_page',
      name: 'list_page',
      component: list_page
    },{
      path: '/preference',
      name: 'preference',
      component: preference
    },{
      path: '/other_goods',
      name: 'other_goods',
      component: other_goods
>>>>>>> 6140eaa4a9891f0a4f90829b4048fde3f3064b23
=======
      path: '/customization',
      name: 'Customization',
      component: Customization
    },
    {
      path: '/channel',
      name: 'Channel',
      component: Channel
>>>>>>> anhua
    }
  ]
})
