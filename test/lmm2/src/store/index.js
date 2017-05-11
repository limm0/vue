import Vue from "vue"
import Vuex from "vuex"
// import getters from "./getters"
// import actions from "./actions"
// import mutations from "./mutations"
Vue.use(Vuex);
const state={
	count:1
}
const getters={
	OddOrEven(state){
		return state.count%2==0?"偶数":"奇数"
	}
}
const actions={
	btn1({commit}){
		commit("btn1")
	},
	btn2({commit}){
		commit("btn2")
	},
	btn3({commit}){
		commit("btn3")
	},
	btn4({commit}){
		commit("btn4")
	}
}
const mutations={
	btn1(state){
		state.count++;
	},
	btn2(state){
		state.count--;
	},
	btn3(state){
		state.count=state.count*2;
	},
	btn4(state){
		state.count=state.count/2;
	}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})