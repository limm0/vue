<template>
  <div id="CollectionCommodity">
    <ul>
    	<li>
    		<dl>
    			<dt><img src="src/assets/img/scsp.jpg" alt=""></dt>
    			<dd>
    				<h4>欧洲站真皮春鞋运动休闲厚底鞋内增高头层牛皮韩版系带小白鞋女潮</h4>
    				<p><strong>￥138.00</strong><b>￥197.15</b><i><span>找相似</span></i></p>
    			</dd>
    		</dl>
    	</li>
    	<li>
    		<dl>
    			<dt><img src="src/assets/img/scsp.jpg" alt=""></dt>
    			<dd>
    				<h4>欧洲站真皮春鞋运动休闲厚底鞋内增高头层牛皮韩版系带小白鞋女潮</h4>
    				<p><strong>￥138.00</strong><b>￥197.15</b><i><span>找相似</span></i></p>
    			</dd>
    		</dl>
    	</li>
    	<li>
    		<dl>
    			<dt><img src="src/assets/img/scsp.jpg" alt=""></dt>
    			<dd>
    				<h4>欧洲站真皮春鞋运动休闲厚底鞋内增高头层牛皮韩版系带小白鞋女潮</h4>
    				<p><strong>￥138.00</strong><b>￥197.15</b><i><span>找相似</span></i></p>
    			</dd>
    		</dl>
    	</li>
    	<li>
    		<dl>
    			<dt><img src="src/assets/img/scsp.jpg" alt=""></dt>
    			<dd>
    				<h4>欧洲站真皮春鞋运动休闲厚底鞋内增高头层牛皮韩版系带小白鞋女潮</h4>
    				<p><strong>￥138.00</strong><b>￥197.15</b><i><span>找相似</span></i></p>
    			</dd>
    		</dl>
    	</li>
    	<li>
    		<dl>
    			<dt><img src="src/assets/img/scsp.jpg" alt=""></dt>
    			<dd>
    				<h4>欧洲站真皮春鞋运动休闲厚底鞋内增高头层牛皮韩版系带小白鞋女潮</h4>
    				<p><strong>￥138.00</strong><b>￥197.15</b><i><span>找相似</span></i></p>
    			</dd>
    		</dl>
    	</li>
    	<li>
    		<dl>
    			<dt><img src="src/assets/img/scsp.jpg" alt=""></dt>
    			<dd>
    				<h4>欧洲站真皮春鞋运动休闲厚底鞋内增高头层牛皮韩版系带小白鞋女潮</h4>
    				<p><strong>￥138.00</strong><b>￥197.15</b><i><span>找相似</span></i></p>
    			</dd>
    		</dl>
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
  		margin-top:10px;
  		width:100%;
  		li{
			width:100%;
			height:88px;
			padding:6px 12px;
			background:#fff;
			border-bottom:1px solid $borderColor;
			dl{
				height:100%;
				width:100%;
				display: flex;
				dt{
					height:100%;
					img{
						height:100%;
					}
				}
				dd{
					flex:1;
					padding-left:6px;
					position: relative;
					h4{
						font-size:12px;
						word-break: break-all;
						display: -webkit-box;
						-webkit-box-orient:vertical;
						-webkit-line-clamp:2;
						overflow: hidden;
						height:38px;
					}
					p{
						width:100%;
						position:absolute;
						bottom: 0;
						left:0;
						display: flex;
						align-items: center;
						strong{
							color:$btnColor;
							font-size:16px;
							width:33.3%;
						}
						b{
							text-decoration: line-through;
							color:#999999;
							width:33.3%;
							text-align: center;
						}
						i{
							width:33.3%;
							display: flex;
							justify-content: center;
							span{
								padding:0 6px;
								border:1px solid #000;
							}
						}
					}
				}
			}
  		}
  	}
  }
</style>