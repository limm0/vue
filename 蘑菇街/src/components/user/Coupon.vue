<template>
  <div id="Coupon">
    <header>
      <div class="leftBtn">
        <span class="fa fa-angle-left fa-lg"></span>
      </div>
      <h2>优惠券</h2>
      <div class="rightBtn">
        <span class="fa fa-shopping-cart fa-lg"></span>
      </div>
    </header>
    <div class="container">
      <div class="nav">
        <div><router-link to="/Coupon/AllCoupon"><span>全场劵</span></router-link></div>
        <div><router-link to="/Coupon/ShopCoupon"><span>店铺券</span></router-link></div>
      </div>
      <router-view></router-view>
      <p class="nomore">没有更多内容了</p>
    </div>
    <footer>
      <p>兑换优惠券</p>
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
  #Coupon{
    width:100%;
    height:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
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
      .leftBtn,.rightBtn{
        position: absolute;
        top:0;
        height:100%;
      }
      .leftBtn{
        left:0;
        padding-left: 14px;
      }
      .rightBtn{
        right:0;
        padding-right: 14px;
      }
    }
    .container{
      flex: 1;
      overflow: auto;
      background: $bgColor;
      .nav{
        width:100%;
        height:30px;
        border-bottom: 1px solid $borderColor;
        div{
          width:50%;
          height:100%;
          float: left;
          text-align: center;
          line-height: 30px;
          &>.router-link-active{
            border-bottom: 1px solid $btnColor;
            color:$btnColor;
            display: inline-block;
            height:100%;
          }
          span{
            padding:0 10px;
            height:100%;
            display: inline-block;
          }
        }
      }
      .nomore{
        height:30px;
        text-align: center;
        line-height: 30px;
        color:$headerColor;
        font-size:14px;
      }
    }
    footer{
      width:100%;
      height:44px;
      border-top:1px solid $borderColor;
      text-align: center;
      line-height:44px;
      font-size: 14px;
      font-weight: bold;
      color:#5e5e5e;
      background: $headColor;
    }
  }
</style>