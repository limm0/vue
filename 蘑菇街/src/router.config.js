//我的
import UserInfo from "./components/UserInfo.vue"
//购物车
import ShoppingCart from "./components/ShoppingCart.vue"
//我的收藏
import Collection from "./components/user/Collection.vue"
import CollectionCommodity from "./components/user/collections/CollectionCommodity.vue"
import CollectionShop from "./components/user/collections/CollectionShop.vue"
//我的优惠券
import Coupon from "./components/user/Coupon.vue"
import AllCoupon from "./components/user/coupons/AllCoupon.vue"
import ShopCoupon from "./components/user/coupons/ShopCoupon.vue"
//售后、客服、反馈
import Chat from "./components/user/Chat.vue"
import Service from "./components/user/Service.vue"
import Feedback from "./components/user/Feedback.vue"
//我的订单
import ShoppingList from "./components/user/shoppingCart/ShoppingList.vue"
import AllList from "./components/user/shoppingCart/AllList.vue"
import PendingPayment from "./components/user/shoppingCart/PendingPayment.vue"
import PendingReceiving from "./components/user/shoppingCart/PendingReceiving.vue"
import PendingEvaluation from "./components/user/shoppingCart/PendingEvaluation.vue"
import CustomerService from "./components/user/shoppingCart/CustomerService.vue"
//收货地址
import ReceivingAddress from "./components/user/ReceivingAddress.vue"
//首页
import Home from './components/Home.vue'
//分类
import Classification from './components/Classification.vue'
//团购、每日上新、新人专享
import tg from './components/littleNavList/TG.vue'
import mrsx from './components/littleNavList/MRSX.vue'
import xrzx from './components/littleNavList/XRZX.vue'
//上衣、裤子、鞋子。。。
import Jacket from './components/ShoppingList/Jacket.vue'
import Skirt from './components/ShoppingList/Skirt.vue'
import Pants from './components/ShoppingList/Pants.vue'
import Shoes from './components/ShoppingList/Shoes.vue'
import Underwear from './components/ShoppingList/Underwear.vue'
import Bag from './components/ShoppingList/Bag.vue'
//商品详情页
import CommodityDetails from './components/CommodityDetails.vue'
//限时快抢
import FlashSale from './components/FlashSale.vue'
export default {
	routes:[
		{path:'/Home',component:Home},
		{path:'/tg',component:tg},
		{path:'/mrsx',component:mrsx},
		{path:'/xrzx',component:xrzx},
		{path:'/Jacket',component:Jacket},
		{path:'/Skirt',component:Skirt},
		{path:'/Pants',component:Pants},
		{path:'/Shoes',component:Shoes},
		{path:'/Underwear',component:Underwear},
		{path:'/Bag',component:Bag},
		{path:'/Classification',component:Classification},
		{path:"/UserInfo",component:UserInfo},
		{path:"/ReceivingAddress",component:ReceivingAddress},
		{path:"/CommodityDetails",component:CommodityDetails},
		{path:"/FlashSale",component:FlashSale},
		{
			path:"/ShoppingList",
			component:ShoppingList,
			children:[
				{path:"AllList",component:AllList},
				{path:"PendingPayment",component:PendingPayment},
				{path:"PendingReceiving",component:PendingReceiving},
				{path:"PendingEvaluation",component:PendingEvaluation},
				{path:"CustomerService",component:CustomerService},
				{path:"/ShoppingList",redirect:"AllList"}
			]
		},
		{path:"/ShoppingCart",component:ShoppingCart},
		{
			path:"/Collection",
			component:Collection,
			children:[
				{path:"CollectionCommodity",component:CollectionCommodity},
				{path:"CollectionShop",component:CollectionShop},
				{path:"/Collection",redirect:"CollectionCommodity"}
			]
		},
		{
			path:"/Coupon",
			component:Coupon,
			children:[
				{path:"AllCoupon",component:AllCoupon},
				{path:"ShopCoupon",component:ShopCoupon},
				{path:"/Coupon",redirect:"AllCoupon"}
			]
		},
		{path:"/Chat",component:Chat},
		{path:"/Service",component:Service},
		{path:"/Feedback",component:Feedback},
		{path:"/",redirect:"/Home"},
		{path:"*",redirect:"/Home"}
	]
}