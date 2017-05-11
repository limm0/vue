<template>
	<div class="headWrap">
		<div class="header">
			<div class="content">
				<div class="top">
					<div class="left">
						<img width="64" height="64" :src="seller.avatar">
					</div>
					<div class="right">
						<h3 class="title">
							<span class="brand"></span><b>{{seller.name}}</b>
						</h3>
						<p class="DistributionMode"><span>{{seller.description}}</span>/<span>{{seller.deliveryTime}}分钟送达</span></p>
						<div class="discount">
							<div class="desc" v-if="seller.supports">
								<span :class="classMap[seller.supports[0].type]"></span><span class="description">{{seller.supports[0].description}}</span>
							</div>
							<div class="more" @click="showMask">
								<span class="number">{{seller.ratingCount}}</span><span class="icon icon-keyboard_arrow_right"></span>
							</div>
						</div>
					</div>
				</div>
				<div class="bottom" @click="showMask">
					<span class="bulletin"></span>
					<p class="desc">{{seller.bulletin}}</p>
					<span class="more icon-keyboard_arrow_right"></span>
				</div>
			</div>
			<div class="bg">
				<img :src="seller.avatar" alt="">
			</div>
		</div>

		<transition name="fade">
			<div class="mask" v-show="isShowMask">
				<div class="maskBox">
					<div class="maskContent">
						<h2 class="title">{{seller.name}}</h2>
						<v-star :size="48" :score="seller.score" class="star"></v-star>
						<div class="split-line">
							<span class="line"></span>
							<p class="titleCon">优惠信息</p>
							<span class="line"></span>
						</div>
						<ul class="discountBox">
							<li v-for="item in seller.supports"><span><i class="icon" :class="classMap[item.type]"></i></span><p>{{item.description}}</p></li>
						</ul>
						<div class="split-line">
							<span class="line"></span>
							<p class="titleCon">商家公告</p>
							<span class="line"></span>
						</div>
						<p class="notice">{{seller.bulletin}}</p>
					</div>
				</div>
				<div class="close icon-close" @click="hideMask"></div>
			</div>
		</transition>
	</div>
</template>
<script>
	import star from 'components/star/star'
	export default {
		props: {
			seller: {
		    	type: Object
		    }
  		},
  		created () {
  			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  		},
  		components: {
  			'v-star': star
  		},
  		data () {
  			return {
  				isShowMask: false
  			}
  		},
  		methods: {
  			hideMask () {
  				this.isShowMask = false
  			},
  			showMask () {
  				this.isShowMask = true
  			}
  		}
	}
</script>
<style lang="stylus">
	@import '../../common/stylus/mixin'
	.header
		width: 100%
		position: relative
		overflow: hidden
		.content
			width: 100%
			background: rgba(7, 17, 27, 0.5)
			color: #fff
			.top
				width: 100%
				display: flex
				padding: 24px 12px 18px 24px
				overflow: hidden
				.left
					width: 64px
					height:64px
					img
						border-radius: 2px
				.right
					flex: 1
					padding-left: 16px
					.title
						width: 100%
						padding: 2px 0 8px 0
						.brand
							display: inline-block
							width: 30px
							height: 18px
							image(brand)
							background-size: 30px 18px
							background-repeat: no-repeat
							vertical-align: top
						b
							font-size: 16px
							line-height: 16px
							font-weight: bold
							padding-left: 6px
					.DistributionMode
						font-size: 12px
						line-height: 12px
						font-weight: 200
						padding-bottom: 10px
					.discount
						width: 100%
						font-size: 10px
						line-height: 12px
						font-weight: 200
						position: relative
						.desc
							width: 100%
							display: flex
							span
								vertical-align: top
								width: 12px
								height: 12px
								background-size: 12px 12px
								background-repeat: no-repeat
								classMap('_1')
							.description
								flex: 1
								padding-left: 4px
						.more
							height: 24px
							font-size: 10px
							line-height: 10px
							font-weight: 200
							padding: 7px 8px
							border-radius: 12px
							background: rgba(0, 0, 0, .2)
							position: absolute
							right: 0
							top: 50%
							margin-top: -12px
							.number
								vertical-align: top
							.icon
								vertical-align: top
								padding-left: 2px
			.bottom
				width: 100%
				font-size: 10px
				line-height: 28px
				font-weight: 200
				padding: 0 12px
				display: flex
				background: rgba(7, 17, 27, .2)
				.bulletin
					image(bulletin)
					width: 22px
					height: 12px
					display: block
					background-size: 22px 12px
					background-repeat: no-repeat
					margin-top: 8px
				.desc
					flex: 1
					white-space: nowrap
					text-overflow: ellipsis
					overflow: hidden
					margin: 0 4px
				.more
					display: block
					font-size: 10px
					margin-top: 9px
		.bg
			position: absolute
			left: 0
			top: 0
			filter: blur(10px)
			z-index: -1
			width: 100%
			height: 100%
			img
				width: 100%
				height: 100%
	.mask
		position: fixed
		right: 0
		top: 0
		width: 100%
		height: 100%
		background: rgba(7, 17, 27, .8)
		backdrop-filter: blur(10px)
		z-index: 100
		opacity: 1
		overflow: auto
		&.fade-enter-active,&.fade-leave-active
			transition: all .5s
		&.fade-enter,&.fade-leave-active
			opacity: 0
			background: rgba(7, 17, 27, 0)
		.maskBox
			width: 100%
			min-height: 100%
			color: #fff
			.maskContent
				width: 100%
				height: 100%
			.title
				width:100%
				font-size: 16px
				line-height: 16px
				text-align: center
				font-weight: 700
				padding-top: 64px
			.star
				width: 100%
				height: 24px
				text-align: center
				padding-top: 16px
			.split-line
				width: 100%
				height: 14px
				line-height: 14px
				font-size: 14px
				font-weight: 700
				padding:0 36px 24px 36px
				display: flex
				align-items: center
				padding-top: 28px
				.titleCon
					padding: 0 12px
				.line
					flex: 1
					border-1px(rgba(255, 255, 255, .5))
			.discountBox
				width: 100%
				padding: 0 48px
				font-size: 12px
				line-height: 12px
				font-weight: 200
				li
					margin-bottom: 12px
					&:last-of-type
						margin-bottom: 0
					.icon
						width: 16px
						height: 16px
						display: inline-block
						classMap(_2)
						background-size: 16px 16px
						vertical-align: top
					p
						display: inline-block
						padding-left: 6px
			.notice
				width: 100%
				padding: 24px 12px
				font-size: 12px
				line-height: 24px
		.close
			width: 100%
			height: 32px
			line-height: 32px
			text-align: center
			margin-bottom: 32px
			color: #fff
			position: relative
			bottom: 0
			left: 0
</style>
