<template>
	<div id="user">
		<div class="btns">
			<button @click="btn1">加一</button>
			<button @click="btn2">减一</button>
			<button @click="btn3">加倍</button>
			<button @click="btn4">减倍</button>
		</div>
		<p>{{$store.state.count}}</p>
		<p>{{OddOrEven}}</p>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		computed:mapGetters([
			'OddOrEven'
		]),
		methods:mapActions([
			'btn1',
			'btn2',
			'btn3',
			'btn4'
		])
	}
</script>
<style scoped lang="scss">
	.btns{
		width:100%;
		height:40px;
		margin:20px 0;
		display:flex;
		justify-content: space-around;
		button{
			width:60px;
			height:40px;
			display:block;
			border:none;
			background:#f00;
			border-radius: 10px;
			color:#fff;
			outline: none;
		}
	}
	p{
		width:100%;
		text-align: center;
		line-height:80px;
		font-size:40px;
		font-weight:bolder;
	}
</style>