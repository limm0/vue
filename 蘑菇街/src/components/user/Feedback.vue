<template>
  <div id="Feedback">
    <header>
      <div class="leftBtn">
        <span class="fa fa-angle-left fa-lg"></span>
      </div>
      <h2>意见反馈</h2>
    </header>
    <div class="container">
      <p>亲爱的菇凉,我们珍视你的每一个反馈,你的建议和批评是对蘑菇街最大的支持,是我们对产品优化改造的方向和动力</p>
      <div class="input">
      	<div class="topBox">
      		<div class="cont">
      			<div class="contBox">
      				<div class="textarea" contenteditable="true"></div>
      			</div>
      		</div>
      		<div class="addBtn">
      			<span class="fa fa-plus-square-o fa-lg"></span>
      			<input type="file" class="addFile">
      		</div>
      	</div>
      	<div class="bottomBox">
      		<span class="phone">手机号</span>
      		<span class="number"><input type="number" placeholder="方便我们更快向你反馈哦"></span>
      	</div>
      </div>
    </div>
    <footer>
      <p>提交</p>
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
  $bgGray:#c4c4c4;
  $bgRed:#FF684A;
  $shopRed:#ee4566;
  $shopGray:#b0b0b0;
  #Feedback{
    width:100%;
    height:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background:#fff;
    header{
      height:44px;
      border-bottom: 1px solid $borderColor;
      position: relative;
      line-height:44px;
      text-align: center;
      font-size:18px;
      color:$headerColor;
      background: $headColor;
      h2{
        font-weight: bold;
        font-size:18px;
      }
      .leftBtn{
        position: absolute;
        top:0;
        height:100%;
        left:0;
        padding-left: 14px;
      }
    }
    .container{
      flex: 1;
      overflow: auto;
      background: #fff;
      padding:10px;
      display:flex;
      flex-direction: column;
      p{
		width:100%;
		height:auto;
		font-size:14px;
      	padding-bottom:10px;
      }
      .input{
      	flex:1;
      	width:100%;
      	border:1px solid $borderLightColor;
      	border-radius:6px;
      	display:flex;
      	flex-direction: column;
      	.topBox{
      		width:100%;
      		flex:1;
      		padding:10px;
      		position:relative;
      		.cont{
      			width:100%;
      			height:100%;
      			padding-bottom:70px;
      			.contBox{
      				width:100%;
      				height:100%;
      				overflow: auto;
	      			padding: 6px;
      				.textarea{
	      				font-size:14px;
	      				width:100%;
	      				height:100%;
	      			}
      			}
      		}
      		.addBtn{
      			position:absolute;
      			bottom:10px;
      			left:10px;
      			.fa-plus-square-o{
      				font-size:70px;
      				color:$borderLightColor;
      			}
      			.addFile{
      				width:100%;
      				height:100%;
      				position:absolute;
      				top:0;
      				left:0;
      				opacity: 0;
      			}
      		}
      	}
      	.bottomBox{
      		height:36px;
      		border-top:1px solid $borderLightColor;
      		display: flex;
			.phone{
				width:64px;
				height:100%;
				line-height:36px;
				text-align: center;
				border-right:1px solid $borderLightColor;
				font-size: 14px;
				color:$headerColor;
			}
			.number{
				flex:1;
				input{
					width:100%;
					height:100%;
					display: inline-block;
					border:none;
					text-indent: 4px;
				}
			}
      	}
      }
    }
    footer{
      width:100%;
      height:44px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      p{
      	width:96%;
      	height:30px;
      	margin-left:2%;
      	margin-top:7px;
      	line-height:30px;
      	background:$btnColor;
      	color:#fff;
      	border-radius:3px;
      }
    }
  }
</style>