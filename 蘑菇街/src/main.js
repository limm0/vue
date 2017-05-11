import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import config from './router.config.js'
import axios from "axios"
import jsonp from "jsonp"

Vue.use(VueRouter);
Vue.prototype.jsonp=jsonp;
Vue.prototype.$http = axios;
var router=new VueRouter(config)
new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
