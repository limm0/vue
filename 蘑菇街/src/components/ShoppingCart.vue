<template>
  <div id="ShoppingCart">
    <header>
      <div class="leftBtn">
        <span class="fa fa-angle-left fa-lg"></span>
      </div>
      <h2>购物车(<b class="count">1</b>)</h2>
      <div class="rightBtn">
        <span>编辑</span>
        <span class="fa fa-commenting-o fa-sm"></span>
      </div>
    </header>
    <div class="content">
      <section>
        <h4>
          <i class="fa fa-circle-thin fa-lg choose"></i>
          <b>蘑菇小胖</b>
          <span>领劵<i class="fa fa-angle-right fa-lg"></i></span>
        </h4>
        <div class="commodity">
          <div class="select">
            <i class="fa fa-circle-thin fa-lg"></i>
          </div>
          <dl>
            <dt><img src="src/assets/img/shangpin.jpg" alt=""></dt>
            <dd>
              <h5>春季上新牛仔裤春季上新牛仔裤春季上新牛仔裤春季上新牛仔裤</h5>
              <p class="description">颜色：深蓝色，尺码：XL建议120-130斤；颜色：深蓝色，尺码：XL建议120-130斤；</p>
              <div><span><b class="newPrice">￥<i>51.00</i></b><b class="oldPrice">￥<i>86.00</i></b></span><span class="closeNumber">x1</span></div>
            </dd>
          </dl>
        </div>
      </section>
      <section>
        <h4>
          <i class="fa fa-circle-thin fa-lg choose"></i>
          <b>蘑菇小胖</b>
          <span>领劵<i class="fa fa-angle-right fa-lg"></i></span>
        </h4>
        <div class="commodity">
          <div class="select">
            <i class="fa fa-circle-thin fa-lg"></i>
          </div>
          <dl>
            <dt><img src="src/assets/img/shangpin.jpg" alt=""></dt>
            <dd>
              <h5>春季上新牛仔裤春季上新牛仔裤春季上新牛仔裤春季上新牛仔裤</h5>
              <p class="description">颜色：深蓝色，尺码：XL建议120-130斤；颜色：深蓝色，尺码：XL建议120-130斤；</p>
              <div><span><b class="newPrice">￥<i>51.00</i></b><b class="oldPrice">￥<i>86.00</i></b></span><span class="closeNumber">x1</span></div>
            </dd>
          </dl>
        </div>
      </section>
      <section>
        <h4>
          <i class="fa fa-circle-thin fa-lg choose"></i>
          <b>蘑菇小胖</b>
          <span>领劵<i class="fa fa-angle-right fa-lg"></i></span>
        </h4>
        <div class="commodity">
          <div class="select">
            <i class="fa fa-circle-thin fa-lg"></i>
          </div>
          <dl>
            <dt><img src="src/assets/img/shangpin.jpg" alt=""></dt>
            <dd>
              <h5>春季上新牛仔裤春季上新牛仔裤春季上新牛仔裤春季上新牛仔裤</h5>
              <p class="description">颜色：深蓝色，尺码：XL建议120-130斤；颜色：深蓝色，尺码：XL建议120-130斤；</p>
              <div><span><b class="newPrice">￥<i>51.00</i></b><b class="oldPrice">￥<i>86.00</i></b></span><span class="closeNumber">x1</span></div>
            </dd>
          </dl>
        </div>
      </section>
      <section>
        <h4>
          <i class="fa fa-circle-thin fa-lg choose"></i>
          <b>蘑菇小胖</b>
          <span>领劵<i class="fa fa-angle-right fa-lg"></i></span>
        </h4>
        <div class="commodity">
          <div class="select">
            <i class="fa fa-circle-thin fa-lg"></i>
          </div>
          <dl>
            <dt><img src="src/assets/img/shangpin.jpg" alt=""></dt>
            <dd>
              <h5>春季上新牛仔裤春季上新牛仔裤春季上新牛仔裤春季上新牛仔裤</h5>
              <p class="description">颜色：深蓝色，尺码：XL建议120-130斤；颜色：深蓝色，尺码：XL建议120-130斤；</p>
              <div><span><b class="newPrice">￥<i>51.00</i></b><b class="oldPrice">￥<i>86.00</i></b></span><span class="closeNumber">x1</span></div>
            </dd>
          </dl>
        </div>
      </section>
    </div>
    <footer>
      <div class="left">
        <i class="fa fa-circle-thin fa-lg"></i>
        <span>全选(<b class="totalCount">0</b>)</span>
        <span class="total">￥<b>0.00</b></span>
      </div>
      <div class="right">
        <span id="settlement">去结算</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  mounted:function(){
  	this.$http.get("./src/data/test.json").then(function(res){
  		// console.log(res)
  	},function(err){
  		console.log(err)
  	})
  	// this.$http.jsonp("https://list.mogujie.com/search",{page:1},{jsonp:"callback"}).then(function(res){
  	// 	console.log(res.data)
  	// },function(err){
  	// 	console.log(err)
  	// })
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/color";
  #ShoppingCart{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    overflow: hidden;
    header{
      width:100%;
      height:40px;
      position:relative;
      font-size:14px;
      background: #FAFAFA;
      border-bottom:1px solid $borderColor;
      .leftBtn,.rightBtn{
        height:100%;
        line-height:40px;
        position:absolute;
        top:0;
        font-size:12px;
        color:#979797;
        display:flex;
        justify-content: center;
        align-items: center;
      }
      .leftBtn{
        left:0;
        padding-left:20px;
      }
      .rightBtn{
        right:0;
        padding-right:20px;
        .fa{
          padding-left:4px;
        }
      }
      h2{
        height: 100%;
        line-height:40px;
        text-align: center;
      }
    }
    .content{
      flex:1;
      overflow: auto;
      section{
        width:100%;
        height: 160px;
        border-bottom:1px solid $borderColor;
        background:#fff;
        &>h4{
          width:100%;
          height:34px;
          line-height:34px;
          padding:0 12px;
          border-bottom:1px solid $borderColor;
          font-size:12px;
          b{
            padding-left: 6px;
          }
          span{
            float:right;
            i{
              padding-left:4px;
            }
          }
        }
        .commodity{
          height:120px;
          padding:16px 12px;
          width:100%;
          display:flex;
          align-items: center;
          .select{
            width:26px;
            height:100%;
            text-align:left;
            display: flex;
            align-items: center;
          }
          dl{
            flex:1;
            display:flex;
            align-items: center;
            height:100%;
            overflow: hidden;
            dt{
              width:58px;
              height:100%;
              img{
                height:100%;
              }
            }
            dd{
              padding-left:10px;
              h5,p{
                flex:1;
                font-size:12px;
                display: -webkit-box;
                word-break: break-all;
                -webkit-line-clamp:2;
                -webkit-box-orient:vertical;
                overflow: hidden;
              }
              p{
                color:#999999;
              }
              .oldPrice{
                font-size:12px;
                text-decoration: line-through;
                color:#999;
                padding-left:4px;
              }
              .closeNumber{
                float:right;
              }
            }
          }
        }
      }
    }
    footer{
      width:100%;
      height:40px;
      line-height:40px;
      padding:0 12px;
      border-top:1px solid $borderColor;
      .left{
        float:left;
        height:100%;
        span{
          padding-left:8px;
        }
        span.total{
          color:$btnColor;
        }
      }
      .right{
        float: right;
        height:100%;
        display: flex;
        align-items: center;
        span{
          height:30px;
          width:70px;
          background: $btnColor;
          color:#fff;
          display:block;
          border-radius:3px;
          text-align: center;
          line-height: 30px;
        }
      }
    }
  }
</style>
