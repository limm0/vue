<template>
	<div class="shop">
		<div class="shopcart">
			<div class="cartCont">
				<div class="cart" @click="toggleList">
					<span class="icon-shopping_cart" :class="{'highlight': totalCount>0}"></span>
					<i class="foodCount" v-show="totalCount>0">{{totalCount}}</i>
				</div>
				<div class="info">
					<span class="price" :class="{'highlight': totalPrice>0}">￥<i>{{totalPrice}}</i></span>
					<span class="freight" v-show="totalPrice>0">另需配送费￥<i>{{deliveryPrice}}</i>元</span>
				</div>
				<div class="settlement" :class="payClass">
					<span>{{payDesc}}</span>
				</div>
			</div>
			<div class="balls">
				<div v-for="item in balls">
					<transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="dropped">
						<div class="ball" v-show="item.show">
							<div class="inner inner-hook"></div>
						</div>
					</transition>
				</div>
			</div>
			<transition name="fade">
				<div class="shopcarts" v-show="isShow">
					<header>
						<h2>购物车<span @click="empty">清空</span></h2>
					</header>
					<ul class="cartList">
						<li v-for="item in selectFoods">{{item.name}}
							<div class="item">
								<span class="money"><i class="currency">￥</i>{{item.price*item.count}}</span><span class="cartcontrol"><v-cartcontrol :food="item" @add="addFood"></v-cartcontrol></span>
							</div>
						</li>
					</ul>
				</div>
			</transition>
			<transition name="maskFade">
				<div class="mask" v-show="isShow" @click="hideMask"></div>
			</transition>
		</div>
	</div>
</template>
<script>
	import cartcontrol from '../cartcontrol/cartcontrol'
	export default {
		data () {
			return {
				balls: [
					{
						show: false
					},
					{
						show: false
					},
					{
						show: false
					},
					{
						show: false
					},
					{
						show: false
					}
				],
				dropBalls: [],
				isShow: false
			}
		},
		props: {
			selectFoods: {
				type: Array
			},
			deliveryPrice: {
				type: Number
			},
			minPrice: {
				type: Number
			}
		},
		computed: {
			totalCount () {
				let num = 0
				this.selectFoods.forEach((item) => {
					num += item.count
				})
				return num
			},
			totalPrice () {
				let price = 0
				this.selectFoods.forEach((item) => {
					price += item.price * item.count
				})
				return price
			},
			payDesc () {
				if (this.totalPrice === 0) {
					return `${this.minPrice}元起送`
				} else if (this.minPrice > this.totalPrice) {
					let diff = this.minPrice - this.totalPrice
					return `还差${diff}元起送`
				} else {
					return '去结算'
				}
			},
			payClass () {
				if (this.minPrice > this.totalPrice) {
					return 'not-enough'
				} else {
					return 'enough'
				}
			}
		},
		methods: {
			addFood (target) {
				this.drop(target)
			},
			empty () {
				this.selectFoods.forEach((food) => {
					food.count = 0
				})
				this.hideMask()
			},
			toggleList () {
				if (!this.totalCount) {
					this.isShow = false
					return false
				}
				this.isShow = !this.isShow
			},
			hideMask () {
				this.isShow = false
			},
			drop (target) {
				for (let i = 0; i < this.balls.length; i++) {
					let ball = this.balls[i]
					if (!ball.show) {
						ball.show = true
						ball.el = target
						this.dropBalls.push(ball)
						return
					}
				}
			},
			beforeDrop (target) {
				for (let i = 0; i < this.balls.length; i++) {
					let ball = this.balls[i]
					if (ball.show) {
						let rect = ball.el.getBoundingClientRect()
						let x = rect.left - 36
						let y = -(window.innerHeight - rect.top - 26)
						target.style.display = ''
						target.style.webkitTransform = `translate3d(0, ${y}px, 0)`
						target.style.transform = `translate3d(0, ${y}px, 0)`
						let inner = target.querySelector('.inner')
						inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
						inner.style.transform = `translate3d(${x}px, 0, 0)`
					}
				}
			},
			dropping (target, done) {
				/* eslint-disable no-unused-vars */
				let rf = target.offsetHeight
				this.$nextTick(() => {
					target.style.webkitTransform = 'translate3d(0, 0, 0)'
					target.style.transform = 'translate3d(0, 0, 0)'
					let inner = target.querySelector('.inner')
					inner.style.webkitTransform = 'translate3d(0, 0, 0)'
					inner.style.transform = 'translate3d(0, 0, 0)'
					target.addEventListener('transitionend', done)
				})
			},
			dropped (target) {
				let ball = this.dropBalls.shift()
				if (ball.show) {
					ball.show = false
					target.style.display = 'none'
				}
			}
		},
		components: {
			'v-cartcontrol': cartcontrol
		}
	}
</script>
<style lang="stylus">
	@import '../../common/stylus/mixin.styl'
	.shopcart
		width: 100%
		height: 44px
		.cartCont
			width: 100%
			height: 44px
			background: #141d27
			position: absolute
			bottom: 0
			left: 0
			display: flex
			z-index: 99
			.cart
				width: 58px
				height: 58px
				border-radius: 100%
				background: #141d27
				position: absolute
				bottom: 0
				left: 15px
				padding: 6px 6px 8px 6px
				.foodCount
					font-size: 10px
					line-height: 10px
					padding: 2px 4px
					border-radius: 14px
					font-weight: 700
					color: #fff
					background: rgb(240, 20, 20)
					position: absolute
					top: 0
					left: 38px
				span
					background: #2b333b
					display: block
					width: 100%
					height: 100%
					border-radius: 100%
					color: rgba( 255, 255, 255, .4)
					font-size: 24px
					text-align: center
					line-height: 44px
					&.highlight
						background: rgb(0, 160, 220)
						color: #fff
			.info
				flex: 1
				height: 100%
				padding-left: 80px
				font-size: 0
				display: flex
				overflow: hidden
				span
					height: 24px
					line-height: 24px
					color: rgba(255, 255, 255, .4)
					margin-top: 10px
					display: inline-block
					vertical-align: top
					&.price
						font-size: 16px
						padding-right: 12px
						border-right: 1px solid rgba(255, 255, 255, .1)
						font-weight: 700
						i
							font-weight: 700
						&.highlight
							color: #fff
					&.freight
						padding-left: 6px
						height: 24px
						font-size: 10px
						flex: 1
						overflow: hidden
			.settlement
				width: 80px
				height: 100%
				position: absolute
				right: 0
				bottom: 0
				color: rgba(255, 255, 255, .4)
				background: #2b333b
				&.not-enough
					color: rgba(255, 255, 255, .4)
					background: #2b333b
				&.enough
					background: #00b43c
					color: #fff
				span
					width: 100%
					height: 100%
					display: inline-block
					text-align: center
					line-height: 44px
					font-size: 12px
					font-weight: 700
		.balls
			.ball
				position: fixed
				bottom: 26px
				left: 36px
				z-index: 99
				transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
				.inner
					width: 16px
					height: 16px
					background: rgb(0, 160, 220)
					border-radius: 100%
					transition: all 0.4s linear
		.shopcarts
			width: 100%
			max-height: 305px
			background: #fff
			position: absolute
			bottom: 0
			left: 0
			z-index: 70
			transform: translate3d(0, -44px, 0)
			&.fade-enter-active,&.fade-leave-active
				transition: all .5s
			&.fade-enter,&.fade-leave-active
				transform: translate3d(0, 100%, 0)
			header
				width: 100%
				background: #f3f5f7
				color: rgb(7, 17, 27)
				height: 40px
				line-height: 40px
				padding: 0 18px
				font-size: 14px
				font-weight: 200
				h2
					position: relative
					span
						position: absolute
						right: 0
						font-size: 12px
						color: rgb(0, 160, 220)
			.cartList
				width: 100%
				padding: 0 18px
				padding-bottom: 20px
				li
					width: 100%
					height: 48px
					line-height: 48px
					font-size: 14px
					color: rgb(7, 17, 27)
					border-1px(rgba(7, 17, 27, .1))
					.item
						float: right
						height: 100%
						.money
							padding-right: 12px
							font-weight: 700
							font-size: 14
							color: rgb(240, 20, 20)
							.currency
								font-size: 10px
								font-weight: normal
						.cartcontrol
							float: right
							height: 100%
							display: flex
							align-items: center
		.mask
			width: 100%
			height: 100%
			background: rgba(7, 16, 27, .6)
			z-index: 60
			position: fixed
			top: 0
			left: 0
			opacity: 1
			backdrop-filter: blur(10px)
			&.maskFade-enter-active,&.maskFade-leave-active
				transition: all .5s
			&.maskFade-enter,&.maskFade-leave-active
				opacity: 0
				background: rgba(7, 17, 27, 0)
</style>
