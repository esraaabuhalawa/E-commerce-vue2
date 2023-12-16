import Vue from 'vue'
import Vuex from 'vuex'

import account from './account/account'
import eStore from './eStore/products'
Vue.use(Vuex)

export default new Vuex.Store({

  mutations: {
    //to use localhost to store state
    initialiseVar(state) {
      if (localStorage.getItem('cart')) {
        state.eStore.cart = JSON.parse(localStorage.cart)
      }
      if (localStorage.getItem('orderDetails') != null) {
        state.eStore.orderDetails = JSON.parse(localStorage.orderDetails)
      }
      if (localStorage.getItem('currentUser') != null) {
        state.account.currentUser = JSON.parse(localStorage.currentUser)
        state.account.isAuth = JSON.parse(localStorage.isAuth)
      }
    }
  },

  modules: {
    account,
    eStore
  },
})

