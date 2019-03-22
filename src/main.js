import Vue from 'vue'
import App from './App.vue'
import Contact from './Contact.vue'
import Experience from './Experience.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Contact),
}).$mount('#contact')

new Vue({
  render: h => h(Experience),
}).$mount('#experience')

