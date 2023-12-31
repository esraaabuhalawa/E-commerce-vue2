import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductList from '../views/ProductList'
import SingleProduct from '../views/SingleProduct'
import Cart from '../views/Cart'
import Contact from '../views/Contact';
import DiscountProducts from '../views/DiscountProducts'
import ErrorPage from '../views/ErrorView'
import CheckOut from '../views/CheckOut'
import Reset from '../views/Reset'
import Recipt from '../views/Recipt'

import store from '@/store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products/product-category/:category/',
    name: 'products',
    component: ProductList
  },
  {
    path:"/product/:id",
    name:"singleproduct",
    component: SingleProduct
  },
  {
    path: '/cart',
    name:'cart',
    component: Cart
  },
  {
    path: '/reset',
    name:'reset',
    component: Reset
  },
  {
    path: '/checkout',
    name:'checkout',
    component: CheckOut,
    meta:{
      hideNavbar : true
    },
    beforeEnter : (to,from,next)=>{
      store.commit('initialiseVar')
     if(store.state.account.isAuth === true){  
        next()
      }else{
        alert('Please sign in first');
        next(false)
      }
    }
  },
  {
    path: '/recipt',
    name:'recipt',
    component: Recipt,
    meta:{
      hideNavbar : true
    },
  },
  {
    path: '/contact',
    name:'contact',
    component: Contact
  },
  {
    path: '/discount',
    name:'discount',
    component: DiscountProducts
  },
  {
    path: "/:catchAll(.*)",
    name: "errorpage",
    component: ErrorPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

router.beforeEach((to, from,next) => {
  // ...
  // explicitly return false to cancel the navigation
  let documentTitle= `${process.env.VUE_APP_TITLE} | ${to.name} `
  if(to.params.pageTitle){
      documentTitle += `| ${to.params.pageTitle}`
  }
  document.title = documentTitle;
  //console.log(to)
  next()
})

//import { createRouter, createWebHistory } from 'vue-router'
export default router
