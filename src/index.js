import Vue from 'vue'
import VueRouter from 'vue-router'

import Antd from 'ant-design-vue'

import App from './App.vue'
import Index from './compent/Index.vue'
import Order from './compent/Order.vue'

import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)
Vue.use(VueRouter)
const routes = [
	{ path: '/', component: Index },
	{ path: '/order', component: Order }
]
const router = new VueRouter({
	routes
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
// new Vue({
// 	el: '#app',
// 	router,
// 	components: { App },
// 	template: '<App/>'
// })