<template>
	<div id="home">
		<headerView></headerView>
		<div id="content">
			<div class="content">
				<autoplay :address="'http://mce.mogucdn.com/jsonp/multiget/3?pids=36344%2C41161%2C41119%2C40298%2C4604'" :id="'36344'" :loop="true"></autoplay>
				<div class="daily-new">
					<div v-for='(i,index) in dailyData'>
						<div v-if="index === 0">
							<router-link to="/tg">
								<h3>{{i.title}}</h3>
								<p>{{i.description}}</p>
								<h4>
									<img :src="i.image" alt="">
								</h4>
							</router-link>
						</div>
						<div v-else-if="index === 1">
							<router-link to="/mrsx">
								<h3>{{i.title}}</h3>
								<p>{{i.description}}</p>
								<h4>
									<img :src="i.image" alt="">
								</h4>
							</router-link>
						</div>
						<div v-else-if="index === 2">
							<router-link to="/xrzx">
								<h3>{{i.title}}</h3>
								<p>{{i.description}}</p>
								<h4>
									<img :src="i.image" alt="">
								</h4>
							</router-link>
						</div>
					</div>
				</div>
				<div class="panic-buying">
					<router-link to="/FlashSale">
						<h3>09点快抢·据结束 00:00:00 <span class='fa fa-angle-right'></span></h3>
						<div class="daily-new-bar">
							<div class="swiper-container home-continer">
						        <div class="swiper-wrapper">
						            <div class="swiper-slide slide-right" v-for="item in panicBuyingData">
										<div>
											<img :src="item.img" alt="">
											<p>{{item.title}}</p>
											<p><span>￥{{item.salePrice}}</span> <del>￥{{item.price}}</del></p>
										</div>
						            </div>
						        </div>
						    </div>
						</div>		
					</router-link>
				</div>
				<div class="sell">
					<h2>人气热销</h2>
					<div class="sell-template">
						<div  v-for='(i,index) in sellData'>
							<span v-if="index === 0">
								<router-link to="/Jacket">
									<section class="sellCont">
										<h3>{{i.title}}</h3>
										<p>{{(i.viceTitle).replace(/{|}/g,"")}}</p>
									</section>
									<h4>
										<img :src='i.image' alt="">
									</h4>
								</router-link>
							</span>
							<span v-else-if="index === 1">
								<router-link to="/Skirt">
									<section class="sellCont">
										<h3>{{i.title}}</h3>
										<p>{{(i.viceTitle).replace(/{|}/g,"")}}</p>
									</section>
									<h4>
										<img :src='i.image' alt="">
									</h4>
								</router-link>
							</span>
							<span v-else-if="index === 2">
								<router-link to="/Pants">
									<section class="sellCont">
										<h3>{{i.title}}</h3>
										<p>{{(i.viceTitle).replace(/{|}/g,"")}}</p>
									</section>
									<h4>
										<img :src='i.image' alt="">
									</h4>
								</router-link>
							</span>
							<span v-else-if="index === 3">
								<router-link to="/Shoes">
									<section class="sellCont">
										<h3>{{i.title}}</h3>
										<p>{{(i.viceTitle).replace(/{|}/g,"")}}</p>
									</section>
									<h4>
										<img :src='i.image' alt="">
									</h4>
								</router-link>
							</span>
							<span v-else-if="index === 4">
								<router-link to="/Underwear">
									<section class="sellCont">
										<h3>{{i.title}}</h3>
										<p>{{(i.viceTitle).replace(/{|}/g,"")}}</p>
									</section>
									<h4>
										<img :src='i.image' alt="">
									</h4>
								</router-link>
							</span>
							<span v-else-if="index === 5">
								<router-link to="/Bag">
									<section class="sellCont">
										<h3>{{i.title}}</h3>
										<p>{{(i.viceTitle).replace(/{|}/g,"")}}</p>
									</section>
									<h4>
										<img :src='i.image' alt="">
									</h4>
								</router-link>
							</span>		
						</div>
					</div>
				</div>
				<div class="choiceness">
					<h2>精选专题<span class="fa fa-angle-right"></span></h2>
					<div class="choicenessBox" v-for="item in choicenessData">
						<div class="choiceness-img">
							<img :src="item.cover" alt="">
							<span></span>
						</div>
						<div class="choiceness-bar">
							<div class="swiper-container choiceness-continer">
						        <div class="swiper-wrapper">
						            <div class="swiper-slide slide-right" v-for="pic in item.list">
										<div>
											<img :src="pic.image" alt="">
											<p><span>￥{{pic.discountPrice}}</span></p>
										</div>
						            </div>
						        </div>
						    </div>
						</div>
					</div>
				</div>
				<div class="guess-you-like">
					<h2>一·猜你喜欢·一</h2>
					<div class="guess-box"  v-for='i in guessData'>
						<router-link to="/commodityDetails">
							<div class="guess-box-img">
								<img :src="i.img" alt="">
							</div>
							<div class="guess-box-msg">
								<span v-for='k in i.props'>{{k}}</span>
							</div>
							<div class="guess-box-price">
								<p>￥{{i.orgPrice}}</p>
								<p>47382</p>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import headerView from './Header.vue';
	import autoplay from './Autoplay.vue';
	export default{
		components:{
			headerView,
			autoplay
		},
		data() {
	        return {
	            iscrollConf: {
	                bounce: true,
	            },
	            guessData:null,
	            sellData:null,
	            dailyData:null,
	            panicBuyingData:null,
	            choicenessData:null,
	            myScroll:null
	        }
	    },
		mounted () {
			this.myScroll = new IScroll('#content', { mouseWheel: true });
		     //请求猜你喜欢数据
		     this.jsonp('https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page=1&_version=61&_=1491977561029',{name:""},(err,data)=>{
		     			if (err) throw err;
		     			this.guessData=data.result.wall.docs
		     			console.log(1)
				})
			//请求人气热销数据、请求daily-new	
		     this.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=36344%2C41161%2C41119%2C40298%2C4604',{name:""},(err,data)=>{
		     			if (err) throw err;
		     			this.sellData=data.data[40298].list
		     			this.dailyData=data.data[41161].list
		     			this.panicBuyingData=data.data[41119].list[0].list
		     			console.log(2)
				});	
		     //精选专题	
		     this.jsonp('http://mce.mogujie.com/jsonp/get/3?pid=42163&page=1&pageSize=2&_=1492170020781',{name:""},(err,data)=>{
		     			if (err) throw err;
		     			this.choicenessData=data.data.list
		     			console.log(3)
				});	
		},
		updated(){
		     new Swiper('.home-continer', {
		             freeMode:true,
		             slidesPerView: 'auto',
		             observer:true,
   					 observeParents:true
		         });
		     new Swiper('.choiceness-continer', {
		             freeMode: true,
   					 slidesPerView: 'auto',
		             observer:true,
   					 observeParents:true
		         });
		     
		     this.$nextTick(function () {
		        // DOM 现在更新了
		        // `this` 绑定到当前实例
		        console.log(4)
		        this.myScroll.refresh();
		      })
		     
			
		}
		
	}
</script>
<style lang='scss' scoped>
	#home{
		display:flex;
		height:100%;
		overflow: hidden;
		flex-direction: column;
	}
	#content{
		width: 100%;
		flex:1;
		overflow: auto;
	}
	.content{
		width:100%;
		height:auto;
	}
	.daily-new{
		width: 100%;
		display: flex;
		background: #fff;
		&>div{
			flex: 1;
			margin-top: 10px;
			text-align: center;
			margin-bottom: 10px;
			border-right: 1px solid #e5e5e5;
			&:last-of-type{
				border-right:0;
			}
			p{
				color: #999;
			}
			h4{
				width: 100px;
				margin:0 auto;
				img{
					display: block;
					width: 50%;
					text-align: center;
					margin:0 auto;
				}
			}
		}
	}
	.panic-buying{
		width: 100%;
		padding-bottom:10px;
		background: #fff;
		margin-top: 10px;
		h3{
			line-height: 40px;
			padding: 0 15px;
			span{
				display: inline-block;
				line-height: 40px;
				float: right;
				color: #e5e5e5;
				font-size: 18px;
			}
		}
		.daily-new-bar{
			padding-left: 12px;
			overflow: hidden;
			.slide-right{
				width:30%;
				padding-right:10px;
				div{
					width: 100%;
					img{
						width: 100%;
						padding:0 6px;
					}
				}
			}
			
			p{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			p:last-child{
				span{
					color:#ff2255;
				}
			}
		}
	}
	.sell{
		width: 100%;
		background: #fff;
		margin-top: 10px;
		h2{
			line-height: 40px;
			padding-left: 10px;
		}
		.sell-template{
			width: 100%;
			border-top: 1px solid #e5e5e5;
			height: 312px;
			div{
				width:100%;
				height:100%;
				overflow: hidden;
				span,a{
					display: block;
					width:100%;
					height:100%;
				}
			}
			div:nth-child(3n-2){
				width: 42%;
 				height: 50%; 
				border-right: 1px solid #e5e5e5;
				float: left;
    			border-bottom: solid 1px #e5e5e5;
    			a{
    				display:flex;
	    			flex-direction: column;
	    			justify-content:space-between;
    			}
				.sellCont{
					height:36px;
					width:100%;
					padding-top:16px;
					h3{
						text-align: center;
						font-size: 14px;
						font-weight: bold;
					}
					p{
						text-align: center;
						color:#ff5f7e;
					}
				}
				h4{
					width: 94px;
					margin: 0 auto;
					img{
						width: 100%;
					}
				}
			}
			div:nth-child(3n-1),div:nth-child(3n){
				width: 58%;
				float: right;
				height: 25%;
				border-bottom: solid 1px #e5e5e5;
				position: relative;
				a{
					display:flex;
					align-items: center;
    			}
				.sellCont{
					height:50%;
					width:100%;
					z-index:99;
					h3{
						text-align: left;
						line-height: 1.5;
						padding-left: 10px;
						font-size:12px;
					}
					p{
						line-height: 1.5;
						padding-left: 10px;
						text-align: left;
						font-size:12px;
						color:#ff5f7e;
					}
				}
				h4{
					height:100%;
					position: absolute;
					right: 0;
				    bottom: 0;
					img{
						height: 100%;
					}
				}
			}
		}
	}
	.choiceness{
		width: 100%;
		margin-top: 10px;
		background: #fff;
		.choicenessBox{
			width:100%;
			height:100%;
		}
		h2{
			line-height: 40px;
			padding:0 10px;
			span{
				display: inline-block;
				line-height: 35px;
				float: right;
				color: #e5e5e5;
				font-size: 18px;
			}
		}
		.choiceness-img{
			padding: 0 10px;
			position: relative;
			overflow: hidden;
			img{
				width: 100%;
			}
			span{
				display: inline-block;
				width: 8px;
				height: 8px;
				background: #fff;
				text-align: center;
				transform: rotate(45deg) translate3d(-50%,-25%,0);
				position: absolute;
				top: 100%;
				left: 50%;
			}		
		}
		.choiceness-bar{
			overflow: hidden;
			height: auto;
			padding:10px;
			.slide-right{
				width:70px;
				margin-right:10px;
				&:last-of-type{
					margin-right:0;
				}
				div{
					width:100%;
					img{
						width: 100%;
					}
					p{
						height:20px;
						line-height:20px;
						margin-top:2px;
						span{
							width:100%;
							height:100%;
							display: inline-block;
							text-align: center;
						}
					}
				}
			}			
		}
	}
	.guess-you-like{
		width: 100%;
		display:flex;
		flex-wrap:wrap;
		justify-content: space-around;
		h2{
			line-height: 40px;
			width:100%;
			text-align: center;
		}
		.guess-box{
			height: auto;
			width: 48%;
			background: #fff;
			overflow: hidden;
			margin-bottom:10px;
			.guess-box-img{
				width: 100%;
				margin: 0 auto;
				img{
					display: block;
					margin: 0 auto;
					width: 100%;
				}
			}
			.guess-box-msg{
				padding:0 6px;
				height: 40px;
				margin-top:4px;
				overflow: hidden;
				display:flex;
				flex-wrap: wrap;
				span{
					display: inline-block;
					margin:1px;
					padding:2px 4px;
				    height: 18px;
				    line-height: 12px;
				    background: #eff3f6;
				    color: #5a6f7a;
				}
			}
			.guess-box-price{
				width: 100%;
				padding: 0 6px 6px 6px;
				box-sizing: border-box;
				height: 26px;
				line-height: 26px;
				p:first-child{
					float:left;
					font-weight: bold;
				}
				P:last-child{
					float: right;
				}
			}
		}
	}
</style>