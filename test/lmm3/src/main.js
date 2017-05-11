import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import config from './router.config.js'
import VueResource from "vue-resource"
import axios from "axios"

Vue.use(VueResource);
Vue.use(VueRouter);
var router=new VueRouter(config)
new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
