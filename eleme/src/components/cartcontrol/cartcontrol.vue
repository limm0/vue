<template>
	<div class="btns">
		<span class="btn">
			<transition name="move">
				<i class="minus icon-remove_circle_outline" @click="minus" v-show="food.count>0"></i>
			</transition>
			<transition name="show">
				<b v-show="food.count>0">{{this.food.count}}</b>
			</transition>
			<i class="plus icon-add_circle" @click="plus"></i>
		</span>
	</div>
</template>
<script>
	export default {
		data () {
			return {}
		},
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			minus (event) {
				this.food.count--
			},
			plus (event) {
				if (!this.food.count) {
					this.$set(this.food, 'count', 1)
				} else {
					this.food.count++
				}
				this.$emit('add', event.target)
			}
		}
	}
</script>
<style lang="stylus">
	.btns
		font-size: 24px
		line-height: 24px
		vertical-align: top
		height: 24px
		font-size: 0
		.btn
			height: 24px
			display: block
			i
				font-size: 24px
				line-height: 24px
				height: 24px
				width: 24px
				display: inline-block
				color: rgb(0, 160, 220)
				&.minus
					transform: translate3d(0, 0, 0) rotate(0)
					opacity: 1
					&.move-enter-active,&.move-leave-active
						transition: all .5s
					&.move-enter,&.move-leave-active
						opacity: 0
						transform: translate3d(24px, 0, 0) rotate(180deg)
			b
				font-size: 10px
				line-height: 24px
				width: 24px
				height: 24px
				display: inline-block
				text-align: center
				color: rgb(147, 153, 159)
				vertical-align: top
				opacity: 1
				&.show-enter-active,&.show-leave-active
					transition: all 1s
				&.show-enter,&.show-leave-active
					opacity: 0
</style>
