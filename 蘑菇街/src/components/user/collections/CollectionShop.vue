<template>
  <div id="CollectionCommodity">
    <ul>
    	<li>
    		<div class="title">
    			<dl>
    				<dt><img src="src/assets/img/shopLogo.jpg" alt=""></dt>
    				<dd>
    					<h4>MY麦简籁</h4>
    					<p><span>销量8636</span><span>收藏4669</span></p>
    				</dd>
    			</dl>
    		</div>
    		<div class="pics">
    			<div>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    			</div>
    		</div>
    	</li>
    	<li>
    		<div class="title">
    			<dl>
    				<dt><img src="src/assets/img/shopLogo.jpg" alt=""></dt>
    				<dd>
    					<h4>MY麦简籁</h4>
    					<p><span>销量8636</span><span>收藏4669</span></p>
    				</dd>
    			</dl>
    		</div>
    		<div class="pics">
    			<div>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    			</div>
    		</div>
    	</li>
    	<li>
    		<div class="title">
    			<dl>
    				<dt><img src="src/assets/img/shopLogo.jpg" alt=""></dt>
    				<dd>
    					<h4>MY麦简籁</h4>
    					<p><span>销量8636</span><span>收藏4669</span></p>
    				</dd>
    			</dl>
    		</div>
    		<div class="pics">
    			<div>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    			</div>
    		</div>
    	</li>
    	<li>
    		<div class="title">
    			<dl>
    				<dt><img src="src/assets/img/shopLogo.jpg" alt=""></dt>
    				<dd>
    					<h4>MY麦简籁</h4>
    					<p><span>销量8636</span><span>收藏4669</span></p>
    				</dd>
    			</dl>
    		</div>
    		<div class="pics">
    			<div>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    			</div>
    		</div>
    	</li>
    	<li>
    		<div class="title">
    			<dl>
    				<dt><img src="src/assets/img/shopLogo.jpg" alt=""></dt>
    				<dd>
    					<h4>MY麦简籁</h4>
    					<p><span>销量8636</span><span>收藏4669</span></p>
    				</dd>
    			</dl>
    		</div>
    		<div class="pics">
    			<div>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    				<span><img src="src/assets/img/scsp.jpg" alt=""></span>
    			</div>
    		</div>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/color";
  #CollectionCommodity{
  	width:100%;
  	ul{
  		width:100%;
  		li{
  			width:100%;
  			margin-top:10px;
  			padding:10px 12px 16px 12px;
  			height:160px;
  			background: #fff;
  			overflow: hidden;
  			.title{
  				height:50px;
  				padding:10px 0;
				width:100%;
				dl{
					width:100%;
					height:100%;
					display: flex;
					dt{
						height:100%;
						img{
							height:100%;
						}
					}
					dd{
						flex:1;
						height:100%;
						padding-left:8px;
						h4{
							line-height:1;
						}
						p{
							line-height: 1;
							color:#999;
							padding-top:2px;
							span{
								padding-right:10px;
							}
						}
					}
				}
  			}
  			.pics{
  				overflow: auto;
  				div{
  					height:auto;
  					width:1000px;
  					span{
  						width:86px;
  						height:86px;
  						float: left;
  						margin-right:4px;
  						img{
  							height:100%;
  						}
  					}
  				}
  			}
  		}
  	}
  }
</style>