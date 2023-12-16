import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "./assets/styles/style.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "normalize.css"
//FontAwsome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.config.productionTip = false

store.subscribe( (mutation, state) => {
  localStorage.setItem('cart', JSON.stringify(state.eStore.cart)); 
  localStorage.setItem('orderDetails',JSON.stringify(state.eStore.orderDetails));
 
  localStorage.setItem('currentUser',JSON.stringify(state.account.currentUser));
  localStorage.setItem('isAuth',JSON.stringify(state.account.isAuth));
 
}) 

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')

