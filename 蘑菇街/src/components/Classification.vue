<template>
	<div class="main">
		<headerView></headerView>
		<div class="list">
			<div class="main_left">
				<ul>
					<li v-for='(item,i) in a.type' :class="i==0?'onC':''"><a href="javascript:;" @click='fun(i)'>{{item}}</a></li>
				</ul>
			</div>
			<div class="main_right">
				
				<div class="right_top">
					<a href="javascript:;" v-for='i in a.imgs'>
						<img v-bind:src='i.img'>
						<p>{{i.name}}</p>
					</a>
					
				</div>
				<div class="right_bottom">
					<div class="navBox">
						<nav class='nav'>
							<a href="javascript:;" class='bg' @click='check(0,a.info)'>综合</a>
							<a href="javascript:;" @click='check(1,a.info)'>销量</a>
							<a href="javascript:;" @click='check(2,a.info)'>新品</a>
						</nav>
					</div>
					<div class='info-list'>
						<a href="javascript:;" class='imgInfo' v-for='y in a.info'>
							<div class='imgs'>
								<p class='txt'>已售{{y.count}}件</p>
								<img v-bind:src="y.img" alt="">
							</div>
							<div class='introduce'>
								<div class='int_top'><p>{{y.name}}</p></div>
								<div class='int_bottom'>
									<p>¥{{y.price}}</p>
									<p class='fa fa-star'>{{y.sum}}</p>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerView from './Header.vue';
	export default{
		data(){
			return {
				a:'',//渲染数据
				top:'' ,
				index:0//默认下标
			}
		},
		components:{
			headerView
		},
		mounted(){//页面dom搭建结束----------
			
			//数据请求-----------------
			new Promise((resolve,reject)=>{
				this.$http.get("./src/data/hotel.json").then((res)=>{
			  		resolve(res.data)
			  	},function(err){
			  		console.log(err)
			  	})
			}).then((data)=>{
				this.a=data;
				var that=this;
				
			  	setTimeout(function(){
			  		let rightBox=document.querySelector(".right_top");
			  		let rightBoxTop=rightBox.offsetHeight;
			  		that.top=rightBoxTop
			  		arrangeFn();
			  	},0)
			})
	
		  	//滚动加载新数据效果----------------------
		  	let that=this;
		  	let nav=document.querySelector(".navBox");
		  	let rightTop=document.querySelector('.right_top');
		  	let rightBottom=document.querySelector('.right_bottom');
		  	let mainRight=document.querySelector('.main_right');
		  	mainRight.onscroll=loadMore;
		  	function loadMore(){
		  		
		  		let rightHeight=rightBottom.offsetHeight+rightTop.offsetHeight; //右盒子的总高度；

		  		//给小导航定位
		  		if(this.scrollTop>=that.top){
		  			nav.classList.add("ps")
		  		}else{
		  			nav.classList.remove("ps")
		  		}
		 
		  		//滚动加载数据
		  		if(rightHeight-this.scrollTop<=700){ //如果总高度-滚动高度小于一定数值是再次请求数据；
		  			this.onscroll=null//删除滚动效果
		  			that.$http.get("./src/data/hotel.json").then((res)=>{
				  		that.a.info=that.a.info.concat(res.data.info);
				  		setTimeout(function(){
					  		rightBottom=document.querySelector('.right_bottom');
					  		rightHeight=rightBottom.offsetHeight+rightTop.offsetHeight; //再次获得有盒子的总高度
					  		mainRight.onscroll=loadMore;//回复滚动效果
					  	},0)
				  	},function(err){
				  		console.log(err)
				  	})
		  		}
		  	}

		  	//排序功能-------------
		  	var arrangeFn=(ind)=>{
		  		if(!ind)ind=this.index
		  		
		  		var imgInfos=Array.from(document.querySelectorAll('.imgInfo'));
		  	}
		},
		methods:{ //点击函数
			fun:function(ind){
				
				//点击切换效果
				var ls=Array.from(document.querySelectorAll('.main_left li'));
				ls.forEach(function(item){item.classList.remove('onC')})
				ls[ind].classList.add('onC')
			},
			check:function(ind,data){
				
				//点击切换效果
				var as=Array.from(document.querySelectorAll('.nav a'));
				as.forEach(function(item){item.classList.remove('bg')})
				as[ind].classList.add('bg');
				// --排序功能实现--------
				if(ind==1){
					data.sort(function(a,b){
						return b.count-a.count
					})

				}else if(ind==2){
					data.sort(function(a,b){
						return b.sum-a.sum
					})
				}else{
					data.sort(function(a,b){
						return b.n-a.n
					})
				}
				
			}

		}
		
	}
</script>

<style lang='scss'>
	.main{
		width:100%;
		overflow:hidden;
		display:flex;
		flex-direction: column;
		height: 100%;
		background:#fff;
		.list{
			flex:1;
			display: flex;
			overflow: auto;
		}
		.main_left{
			background:#eee;
			overflow: auto;
			width:80px;
			font-size:12px;
			ul{
				width:100%;
				li{
					width:100%;
					height:38px;
					text-align:center;
					display:-webkit-box;
					-webkit-box-align:center;
					a{
						color:#666666;
						display:block;
						width:100%;
						text-decoration: none;
					}
					&.onC{
						background:#fff;
						a{
							color:#FF5777;
							border-left:3px solid #ff5777;

						}
					}
				}

			}
		}
		.main_right{
			position:relative;
			flex:1;
		    overflow:auto;
		    padding:0 2px;
			.right_top{
				width:100%;
				display: flex;
		    	flex-wrap: wrap;
		    	border-bottom: 1px solid #eaeaea;	
				a{
					width:32.33%;
				    display: flex;
				    flex-direction: column;
				    align-items: center;
				    margin:10px 0;
					img{
						display:block;
						width:65px;
						height:65px;
						background:#666;
					}
					p{
						line-height:2;
						color:#666666;
					}
				}
			}
			.right_bottom{
				width:100%;
				position: relative;
				.navBox{
					.nav{
						display:-webkit-box;
						height:34px;
						-webkit-box-align:center;
						border-bottom: 1px solid #eaeaea;
						background:#fff;
						font-size:12px;
						a{
							-webkit-box-flex:1;
							text-align:center;
							display:block;
							border-right: 1px solid #eaeaea;
							&:last-child{
								border:none;
							}
						}
						.bg{
							color:#ef4562;
						}
					}

					&.ps{
						position:fixed;
						top:44px;
						right:0;
						width:100%;
						z-index:2;
						padding-left:80px;
					}
				}
				
				.info-list{
					width:100%;
					height:auto;
					display:flex;
					flex-wrap: wrap;
					justify-content: space-around;
					.imgInfo{
						display:inline-block;
						width:48%;
						margin-top:4px;
						.imgs{
							width:100%;
							position:relative;
							img{
								width:100%;
								height:auto;
							}
							p{
							    position: absolute;
							    bottom: 4px;
							    height: 25px;
							    line-height: 25px;
							    min-width: 40%;
							    max-width: 66%;
							    text-align: left;
							    padding: 0 10px;
							    color: #fff;
							    font-size: 10px;
							    overflow: hidden;
							    text-overflow: ellipsis;
							    white-space: nowrap;
							    background:-webkit-gradient(linear, 0% 0%, 100% 0%,from(rgba(0,0,0,.6)), to(rgba(0,0,0,0)));
							}
						}
						.introduce{
							width:100%;
							font-size:12px;
							.int_top{
								padding:4px 4px 0 4px;
							    p{
							    	overflow: hidden;
								    text-overflow: ellipsis;
								    white-space: nowrap;
							    }
							}
							.int_bottom{
								padding:0px 4px 4px 4px;
								display:-webkit-box;
								p{
									-webkit-box-flex:1;
								}
								p:first-child{
									color:#ff5777;
									font-size:14px;
									font-weight:bold;
								}
								p:last-child{
									text-align:right;
									padding-top:5px;
									color:#999;
								}
								.fa-star:before {
								    float: right;
								    margin-left: 3px;
								    color:#ccc;
								}    
							}
						}
					}
				}
			}
		}
	}
</style>