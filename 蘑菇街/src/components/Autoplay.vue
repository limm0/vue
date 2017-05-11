<!-- The ref attr used to find the swiper instance -->
<template>
	<div id="autoplay">
		<!-- Swiper -->
	    <div class="swiper-container autoP">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide"  v-for='i in autoimg'><img :src="i.image" alt=""></div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
	    </div>
	</div>
</template>
<script>
	import '../lib/swiper/js/swiper.min.js'
	export default{
		name:'autoplay',
		data(){
			return {
				autoimg:[]
			}
		},
		mounted () {
		     this.jsonp(this.address,{name:""},(err,data)=>{
		     			if (err) throw err;
						this.autoimg=data.data[this.id].list;
					});					
		},
		props:['address','id','loop'],
		updated(){
			this.$nextTick(function(){
				var mySwiper = new Swiper('.autoP', {
			   	  direction: 'horizontal',
			   	  loop: this.loop,
			   	  pagination: '.swiper-pagination',
			   	  autoplayDisableOnInteraction : false,
			   	  autoplay:3000
			   	});
			})
		}
	}
</script>
<style lang='scss' scoped>
	@import url(/src/lib/swiper/css/swiper.min.css);
	#autoplay{
		height: auto;
		img{
			width: 100%;
		}
		.swiper-pagination{
			width:auto;
			background:rgba(255, 255, 255, 0.7);
			height:8px;
			border-radius:4px;
			display:flex;
			align-items: center;
			justify-content: space-around;
			margin-left:10px;
		}
	}
</style>