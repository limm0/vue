<template>
	<div id="user">
		<div>
			用户
			<button @click="modify">改变vuex数据</button>
		</div>
	</div>
</template>
<script>
	export default {
		methods:{
			modify(){
				this.$store.dispatch('change')
			}
		}
	}
</script>