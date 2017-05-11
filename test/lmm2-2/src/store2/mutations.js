export default {
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