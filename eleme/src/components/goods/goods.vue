<template>
	<div class="goodsBox">
		<div class="goods">
			<div ref="menuWrap" class="menuWrap">
				<ul class="left">
					<li v-for="(item,index) in goods" @click="selectMenu(index,$event)" :class="{'current':index===currentIndex}">
						<div class="item">
							<p class="itemCont"><span :class="classMap[item.type]" class="icon" v-if="classMap[item.type]"></span>{{item.name}}</p>
						</div>
					</li>
				</ul>
			</div>
			<div ref="foodWrap" class="foodWrap">
				<ul class="right">
					<li v-for="item in goods" ref="foodList">
						<div class="title">{{item.name}}</div>
						<ul class="foods">
							<li v-for="food in item.foods" @click="selectFood(food,$event)">
								<div class="food-item">
									<div class="photo"><img :src="food.image" alt=""></div>
									<div class="con">
										<h2 class="foodTitle">{{food.name}}</h2>
										<p class="info" v-if="food.description">{{food.description}}</p>
										<p class="info"><span>月售{{food.cellCount}}份</span><span>好评率{{food.rating}}%</span></p>
										<p class="price">
											<span class="newPrice"><i>￥</i>{{food.price}}</span>
											<i v-if="food.oldPrice" class="oldPrice">{{food.oldPrice}}</i>
											<span class="cartcontrol"><v-cartcontrol :food="food" @add="addFood"></v-cartcontrol></span>
										</p>
									</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<v-shopcart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice" ref="shopcart"></v-shopcart>
		<v-food :food="selectedFood" ref="food" @add="addFood"></v-food>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import cartcontrol from '../cartcontrol/cartcontrol'
	import shopcart from '../shopcart/shopcart'
	import food from '../food/food'
	const ERRNO = 0
	export default {
		data () {
			return {
				goods: [],
				listHeight: [],
				scrollY: 0,
				selectedFood: {}
			}
		},
		methods: {
			selectMenu (index, event) {
				if (!event._constructed) {
					return
				}
				let foodList = this.$refs.foodList
				let el = foodList[index]
				this.foodScroll.scrollToElement(el, 300)
			},
			selectFood (food, event) {
				if (!event._constructed) {
					return
				}
				this.selectedFood = food
				this.$refs.food.show()
			},
			addFood (target) {
				this._drop(target)
			},
			_drop (target) {
				this.$nextTick(() => {
					this.$refs.shopcart.drop(target)
				})
			},
			_initScroll () {
				this.menuScroll = new BScroll(this.$refs.menuWrap, {click: true})
				this.foodScroll = new BScroll(this.$refs.foodWrap, {
					click: true,
					probeType: 3
				})
				this.foodScroll.on('scroll', (pos) => {
					this.scrollY = Math.abs(Math.round(pos.y))
				})
			},
			_calculateHeight () {
				let foodList = this.$refs.foodList
				let height = 0
				this.listHeight.push(height)
				for (let i = 0; i < foodList.length; i++) {
					let item = foodList[i]
					height += item.clientHeight
					this.listHeight.push(height)
				}
			}
		},
		created () {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
			this.$http.get('api/goods').then(function (data) {
				if (data.data.errno === ERRNO) {
					this.goods = data.data.data
					this.$nextTick(() => {
						document.addEventListener('touchmove', function (e) {
							return false
						}, false)
						this._initScroll()
						this._calculateHeight()
					})
				}
			}.bind(this))
		},
		components: {
			'v-cartcontrol': cartcontrol,
			'v-shopcart': shopcart,
			'v-food': food
		},
		computed: {
			currentIndex () {
				for (let i = 0; i < this.listHeight.length; i++) {
					let h1 = this.listHeight[i]
					let h2 = this.listHeight[i + 1]
					if (!h2 || (this.scrollY >= h1 && this.scrollY < h2)) {
						return i
					}
				}
				return 0
			},
			selectFoods () {
				let list = []
				this.goods.forEach((item) => {
					item.foods.forEach((food) => {
						if (food.count > 0) {
							list.push(food)
						}
					})
				})
				return list
			}
		},
		props: {
			seller: Object
		}
	}
</script>
<style lang="stylus">
	@import '../../common/stylus/mixin'
	.goodsBox
		flex: 1
		overflow: hidden
		position: relative
		padding-bottom: 44px
		.goods
			width: 100%
			height:100%
			overflow: hidden
			display: flex
			.menuWrap
				width: 80px
				.left
					width: 100%
					background: #f3f5f7
					li
						width:100%
						height: 54px
						padding: 0 12px
						background: #f3f5f7
						&.current
							background: #fff
							margin-top: -1px
							z-index: 20
							position: relative
							.item
								border-none()
						.item
							width: 100%
							height: 100%
							border-1px(rgba(7, 17, 27, .1))
							display: flex
							align-items: center
							font-size: 12px
							line-height: 14px
							color: rgb(7, 17, 27)
							.itemCont
								.icon
									width: 12px
									height: 12px
									display: inline-block
									classMap(_3)
									background-size: 12px 12px
									background-repeat: no-repeat
									vertical-align: top
									margin-top: 1px
									margin-right: 2px
						&.on
							background: #fff
							font-weight: 700
			.foodWrap
				flex: 1
				.right
					width: 100%
					&>li
						.title
							width: 100%
							height: 26px
							line-height: 26px
							font-size: 12px
							color: rgb(143, 153,159)
							background: #f3f5f7
							border-left: 2px solid #d9dde1
							text-indent: 12px
						.foods
							width: 100%
							&>li
								width: 100%
								padding: 18px 18px 0 18px
								&:last-of-type>.food-item
									border-none()
								.food-item
									width: 100%
									border-1px(rgba(7, 17, 27, .1))
									display: flex
									padding-bottom: 18px
									.photo
										width: 57px
										height:57px
										img
											width: 100%
											height: 100%
									.con
										flex: 1
										padding-left: 18px
										.foodTitle
											width: 100%
											height: 14px
											font-size: 14px
											color: rgb(7, 17, 27)
											overflow: hidden
										.info
											width: 100%
											font-size: 10px
											line-height: 12px
											max-height: 32px
											padding-top: 8px
											color: rgb(147, 153, 159)
											word-break: break-all
											display: -webkit-box
											-webkit-line-clamp: 2
											-webkit-box-orient: vertical
											overflow: hidden
											span
												margin-right: 12px
										.price
											width: 100%
											padding-top: 8px
											position: relative
											.newPrice
												font-size: 14px
												font-weight: 700
												color: rgb(240, 20, 20)
												vertical-align: top
												display: inline-block
												i
													font-size: 10px
													vertical-align: bottom
													font-weight: normal
											.oldPrice
												font-size: 10px
												font-weight: 700
												color: rgb(147, 153, 159)
												padding-left: 4px
												text-decoration: line-through
												vertical-align: top
												display: inline-block
											.cartcontrol
												position: absolute
												right: 0
												top: 2px
</style>
