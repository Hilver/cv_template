/* eslint import/no-unassigned-import: "off" */
import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')
