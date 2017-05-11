<template>
	<div class="star" :class="starSize">
		<span v-for="(item,index) in itemClass" :class="item" key="index" class="star-item"></span>
	</div>
</template>
<script>
	const STAR_NUM = 5
	const CLS_ON = 'on'
	const CLS_HALF = 'half'
	const CLS_OFF = 'off'
	export default {
		props: {
			size: {
				type: Number
			},
			score: {
				type: Number
			}
		},
		computed: {
			starSize () {
				return 'star-' + this.size
			},
			itemClass () {
				let result = []
				let score = Math.floor(this.score * 2) / 2
				let halfScore = score % 1 !== 0
				let onScore = Math.floor(score)
				for (let i = 0; i < onScore; i++) {
					result.push(CLS_ON)
				}
				if (halfScore) result.push(CLS_HALF)
				while (result.length < STAR_NUM) {
					result.push(CLS_OFF)
				}
				return result
			}
		}
	}
</script>
<style lang="stylus">
	@import '../../common/stylus/mixin'
	.star
		font-size: 0
		&.star-48
			.star-item
				display: inline-block
				background-repeat: no-repeat
				width: 20px
				height: 20px
				margin-right: 22px
				background-size: 20px 20px
				&:last-child
					margin-right: 0
				&.on
					image('star48_on')
				&.half
					image('star48_half')
				&.off
					image('star48_off')
		&.star-36
			.star-item
				display: inline-block
				background-repeat: no-repeat
				width: 15px
				height: 15px
				margin-right: 6px
				background-size: 15px 15px
				&:last-child
					margin-right: 0
				&.on
					image('star36_on')
				&.half
					image('star36_half')
				&.off
					image('star36_off')
		&.star-24
			.star-item
				display: inline-block
				background-repeat: no-repeat
				width: 10px
				height: 10px
				margin-right: 3px
				background-size: 10px 10px
				&:last-child
					margin-right: 0
				&.on
					image('star24_on')
				&.half
					image('star24_half')
				&.off
					image('star24_off')
</style>
