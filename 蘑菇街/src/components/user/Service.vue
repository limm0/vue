<template>
  <div id="Service">
    <header>
      <div class="leftBtn">
        <span class="fa fa-angle-left fa-lg"></span>
      </div>
      <h2>蘑菇街客服</h2>
    </header>
    <div class="msg">
    	<p class="none">暂无聊天消息</p>
    </div>
    <footer>
    	<span class="fa fa-image fa-lg"><input type="file"></span>
    	<div class="input"><input type="text"></div>
    	<span class="send"><b>发送</b></span>
    </footer>
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
  #Service{
  	width:100%;
  	height:100%;
  	display: flex;
  	flex-direction: column;
  	background:#fff;
	header{
		height:44px;
		border-bottom: 1px solid $borderColor;
		position: relative;
		line-height:44px;
		text-align: center;
		font-size:20px;
		color:$headerColor;
		background: #fff;
		h2{
			font-size:20px;
		}
		.leftBtn{
			position: absolute;
			top:0;
			height:100%;
			left:0;
			padding-left: 14px;
		}
	}
	.msg{
		width:100%;
		flex:1;
		.none{
			width:100%;
			height:40px;
			line-height:40px;
			text-align: center;
			font-size: 14px;
		}
	}
	footer{
		width:100%;
		display: flex;
		border-top:1px solid $borderColor;
		.fa-image{
			width:44px;
			line-height:44px;
			text-align: center;
			position: relative;
			input{
				position:absolute;
				left:0;
				top:0;
				width:44px;
				height:44px;
				overflow: hidden;
				opacity: 0;
			}
		}
		.input{
			flex:1;
			input{
				width:100%;
				height:32px;
				padding:6px 0;
				display: inline-block;
				margin-top:6px;
				border:none;
				font-size:16px;
				background: #efefef;
				text-indent: 4px;
				border-radius:3px;
			}
		}
		.send{
			width:64px;
			height:44px;
			padding:0 10px;
			b{
				width:100%;
				height:32px;
				background:$btnColor;
				color:#fff;
				display: inline-block;
				margin-top:6px;
				border-radius:3px;
				text-align: center;
				line-height: 32px;
			}
		}
	}
  }
</style>