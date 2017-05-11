<template>
  <div id="Coupon">
    <header>
      <div class="leftBtn">
        <span class="fa fa-angle-left fa-lg"></span>
      </div>
      <h2>订单列表</h2>
      <div class="rightBtn">
        <span class="fa fa-shopping-cart fa-lg"></span>
      </div>
    </header>
    <div class="container hide">
      <div class="nav">
        <div><router-link to="/ShoppingList/AllList"><span>全部</span></router-link></div>
        <div><router-link to="/ShoppingList/PendingPayment"><span>待付款<b></b></span></router-link></div>
        <div><router-link to="/ShoppingList/PendingReceiving"><span>待收货<b></b></span></router-link></div>
        <div><router-link to="/ShoppingList/PendingEvaluation"><span>待评价<b></b></span></router-link></div>
        <div><router-link to="/ShoppingList/CustomerService"><span>售后</span></router-link></div>
      </div>
      <div class="showBox"><router-view></router-view></div>
      <div class="empty">
        <div class="emptyIcon">
          <span class="fa fa-file-text-o"></span>
        </div>
        <p>还没有相关订单哦~</p>
      </div>
      <p class="nomore">没有更多了~</p>
    </div>
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

      &.hide{
        .empty{
          display:none;
        }
        .nomore{
          display:block;
        }
        .showBox{
          display: block;
        }
      }
      .showBox{
        display: none;
        flex:1;
      }
      .nav{
        width:100%;
        height:44px;
        border-bottom: 1px solid $borderColor;
        background: #fff;
        display: flex;
        justify-content: space-around;
        div{
          flex:1;
          height:100%;
          text-align: center;
          line-height: 44px;
          &>.router-link-active{
            border-bottom: 1px solid $btnColor;
            color:$btnColor;
            display: inline-block;
            height:100%;
          }
          a{
            width:100%;
            height:100%;
            display: inline-block;
          }
        }
      }
      .empty{
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .emptyIcon{
          width:128px;
          height:128px;
          border-radius: 100%;
          background:#ddd5d7;
          display: flex;
          align-items: center;
          justify-content: center;
          .fa-file-text-o{
            font-size:60px;
            color:#fff;
          }
        }
        p{
          height:33px;
          padding:10px 0;
          line-height:18px;
        }
      }
      .nomore{
        width:100%;
        height:30px;
        text-align: center;
        line-height:30px;
        display: none;
      }
    }
  }
</style>