import Vue from 'vue'

//add Bootstrap to Vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import Experience from './Experience.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


new Vue({
  render: h => h(Experience),
}).$mount('#experience')

