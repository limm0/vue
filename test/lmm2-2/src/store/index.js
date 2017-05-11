
const state={
	name:'aa',
	age:13
}

const actions={
	vuexClick({commit},data){
		commit('click1',data)
	},
	change({commit}){
		commit('click2')
	}
}

const mutations={
	click1(state,data){
		state.name="bb"
		console.log(data)
	},
	click2(state){
		state.name="cc"
	}
}

const getters={

}

export default {
	state,
	mutations,
	actions,
	getters
}