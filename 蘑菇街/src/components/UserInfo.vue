<template>
  <div id="UserInfo">
    <header>
      <dl>
        <dt><img src="src/assets/img/photo.jpg" alt=""></dt>
        <dd>
          <h4>我的蘑菇名</h4>
          <router-link to="/ReceivingAddress"><p>我的收货地址<span class="fa fa-angle-right fa-lg"></span></p></router-link>
        </dd>
      </dl>
    </header>
    <div class="nav">
      <router-link to="/ShoppingList/AllList"><h3><img src="src/assets/img/wddd.png" alt=""><span>我的订单</span><span class="fa fa-angle-right fa-lg"></span></h3></router-link>
      <div class="navigator">
        <router-link to="/ShoppingList/PendingPayment"><img src="src/assets/img/dfk.png" alt=""><i>待付款</i><b>8</b></router-link>
        <router-link to="/ShoppingList/PendingReceiving"><img src="src/assets/img/dsh.png" alt=""><i>待收货</i><b>8</b></router-link>
        <router-link to="/ShoppingList/PendingEvaluation"><img src="src/assets/img/dpj.png" alt=""><i>待评价</i><b>8</b></router-link>
        <router-link to="/ShoppingList/CustomerService"><img src="src/assets/img/sh.png" alt=""><i>售后</i></router-link>
      </div>
    </div>
    <div class="download">
      <img src="src/assets/img/moguDownload.png" alt="">
    </div>
    <div class="lists">
      <ul>
        <li><router-link to="/ShoppingCart"><span><img src="src/assets/img/gwc.png" alt=""></span><p><strong>我的购物车</strong><i class="fa fa-angle-right fa-lg"></i></p></router-link></li>
        <li><router-link to="/Coupon"><span><img src="src/assets/img/yhj.png" alt=""></span><p><strong>我的优惠券</strong><i class="fa fa-angle-right fa-lg"></i><span>您有一张优惠券即将过期</span></p></router-link></li>
        <li><router-link to="/Collection/CollectionCommodity"><span><img src="src/assets/img/scsp.png" alt=""></span><p><strong>我收藏的商品</strong><i class="fa fa-angle-right fa-lg"></i></p></router-link></li>
        <li><router-link to="/Collection/CollectionShop"><span><img src="src/assets/img/scdp.png" alt=""></span><p><strong>我收藏的店铺</strong><i class="fa fa-angle-right fa-lg"></i></p></router-link></li>
      </ul>
      <ul>
        <li><router-link to="/Chat"><span><img src="src/assets/img/xxtz.png" alt=""></span><p><strong>消息通知</strong><i class="fa fa-angle-right fa-lg"></i></p></router-link></li>
        <li><router-link to="/Service"><span><img src="src/assets/img/kf.png" alt=""></span><p><strong>客服</strong><i class="fa fa-angle-right fa-lg"></i></p></router-link></li>
        <li><router-link to="/Feedback"><span><img src="src/assets/img/yjfk.png" alt=""></span><p><strong>意见反馈</strong><i class="fa fa-angle-right fa-lg"></i></p></router-link></li>
      </ul>
    </div>
    <div class="exit">
      <div class="exitBtn">退出登录</div>
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
  #UserInfo{
    width:100%;
    height:100%;
    overflow: auto;
    background: $bgColor;
    header,.nav,.lists>ul{
      background: #fff;
      margin-bottom:8px;
    }
    header{
      width:100%;
      height:78px;
      padding:20px 14px;
      dl{
        width:70%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        dt{
          width:38px;
          height:38px;
          img{
            height:100%;
            border-radius: 100%;
          }
        }
        dd{
          flex: 1;
          padding-left:14px;
          p{
            font-size:12px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            span{
              height:100%;
            }
          }
        }
      }
    }
    .nav{
      width:100%;
      height:98px;
      h3{
        width:100%;
        height:42px;
        border-bottom:1px solid $borderColor;
        padding:10px 14px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        img{
          height:100%;
        }
        span{
          padding-left: 4px;
          &:first-of-type{
            flex:1;
            text-align: left;
          }
        }
      }
      .navigator{
        width:100%;
        height:56px;
        display:flex;
        align-items: center;
        justify-content: space-around;
        a{
          display:flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: column;
          position:relative;
          img{
            height:16px;
          }
          i{
            padding-top:4px;
          }
          b{
            position:absolute;
            top:-4px;
            right: 0px;
            background: #F5123E;
            width:16px;
            height: 16px;
            border-radius: 100%;
            color: #fff;
            text-align: center;
            line-height:16px;
          }
        }
      }
    }
    .download{
      width:100%;
      img{
        width:100%;
      }
      margin-bottom:8px;
    }
    .lists{
      width:100%;
      ul{
        width:100%;
        li{
          padding-left:14px;
          height:42px;
          &>a{
            width:100%;
            height: 100%;
            display: block;
            align-items: center;
            display: flex;
            color: #333;
            &>span{
              width:24px;
              height:24px;
              display:block;
              margin-right:12px;
              img{
                height:100%;
              }
            }
          }
          &:last-of-type p{
            border-bottom:none;
          }
          p{
            height:100%;
            flex: 1;
            line-height: 42px;
            border-bottom:1px solid $borderColor;
            strong{
              font-size:14px;
            }
            i,span{
              float: right;
              color:#999999;
            }
            i{
              height:100%;
              line-height:42px;
              padding:0 16px 0 4px;
            }
          }
        }
      }
    }
    .exit{
      width:100%;
      height:34px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin:6px 0;
      .exitBtn{
        width:90%;
        height:100%;
        background: $btnColor;
        color:#fff;
        text-align: center;
        line-height: 34px;
        border-radius:3px;
      }
    }
  }
</style>
