import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import App from './App.vue'
import LoginPage from './LoginPage.vue'
import HomePage from './HomePage.vue'
import CardSpecific from './CardSpecific.vue'
import AboutPage from './AboutPage.vue'
import ContactPage from './ContactPage.vue'


Vue.config.productionTip = false

Vue.use(Router)

const router =  new Router({
  routes: [
      {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/CardSpecific/:id',
      name: 'CardSpecific',
      component: CardSpecific
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    }
    
   
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
