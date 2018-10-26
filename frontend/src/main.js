import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
