<template>
  <div class="coupons">
    <ul>
      <li>
        <h3 class="couponHead">两元无门槛<span>去逛逛<b class="fa fa-angle-right fa-lg"></b></span></h3>
        <div class="cont">
          <div class="left">
            <div class="money">￥<span>3</span></div>
            <p>减两元(APP认证店铺专享)</p>
          </div>
          <div class="right">
            <p>使用期限</p>
            <p>2017.03.30 18:12</p>
            <p>2017.03.31 18:12</p>
          </div>
        </div>
      </li>
      <li>
        <h3 class="couponHead">两元无门槛<span>去逛逛<b class="fa fa-angle-right fa-lg"></b></span></h3>
        <div class="cont">
          <div class="left">
            <div class="money">￥<span>3</span></div>
            <p>减两元(APP认证店铺专享)</p>
          </div>
          <div class="right">
            <p>使用期限</p>
            <p>2017.03.30 18:12</p>
            <p>2017.03.31 18:12</p>
          </div>
        </div>
      </li>
      <li>
        <h3 class="couponHead">两元无门槛<span>去逛逛<b class="fa fa-angle-right fa-lg"></b></span></h3>
        <div class="cont">
          <div class="left">
            <div class="money">￥<span>3</span></div>
            <p>减两元(APP认证店铺专享)</p>
          </div>
          <div class="right">
            <p>使用期限</p>
            <p>2017.03.30 18:12</p>
            <p>2017.03.31 18:12</p>
          </div>
        </div>
      </li>
      <li>
        <h3 class="couponHead">两元无门槛<span>去逛逛<b class="fa fa-angle-right fa-lg"></b></span></h3>
        <div class="cont">
          <div class="left">
            <div class="money">￥<span>3</span></div>
            <p>减两元(APP认证店铺专享)</p>
          </div>
          <div class="right">
            <p>使用期限</p>
            <p>2017.03.30 18:12</p>
            <p>2017.03.31 18:12</p>
          </div>
        </div>
      </li>
      <li>
        <h3 class="couponHead">两元无门槛<span>去逛逛<b class="fa fa-angle-right fa-lg"></b></span></h3>
        <div class="cont">
          <div class="left">
            <div class="money">￥<span>3</span></div>
            <p>减两元(APP认证店铺专享)</p>
          </div>
          <div class="right">
            <p>使用期限</p>
            <p>2017.03.30 18:12</p>
            <p>2017.03.31 18:12</p>
          </div>
        </div>
      </li>
      <li class="expired">
        <h3 class="couponHead">两元无门槛<span>去逛逛<b class="fa fa-angle-right fa-lg"></b></span></h3>
        <div class="cont">
          <div class="left">
            <div class="money">￥<span>3</span></div>
            <p>减两元(APP认证店铺专享)</p>
          </div>
          <div class="right">
            <p>使用期限</p>
            <p>2017.03.30 18:12</p>
            <p>2017.03.31 18:12</p>
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
  $bgGray:#c4c4c4;
  $bgRed:#FF684A;
  $shopRed:#ee4566;
  $shopGray:#b0b0b0;
  .coupons{
    width:100%;
    height:auto;
    padding:0 10px;
    ul{
      width:100%;
      li{
        &.expired{
          background: $ShopBg;
          &:before{
            content:"";
            width:104px;
            height:70px;
            position: absolute;
            right:0px;
            top:0;
            background:url(../../../assets/img/used.png) no-repeat center center;
            background-size: 70%;
          }
        }
        width:100%;
        height: 124px;
        background: $couponRedColor;
        border-radius: 3px;
        color:#fff;
        margin-top: 10px;
        padding:0 12px;
        position:relative;
        .couponHead{
          width:100%;
          height:44px;
          line-height:44px;
          border-bottom: 1px dotted $leftHeadBorder;
          position: relative;
          &:before,&:after{
            content:"";
            width:10px;
            height:10px;
            background: $bgColor;
            position:absolute;
            bottom:-5px;
            border-radius: 100%;
          }
          &:before{
            left:-17px;
          }
          &:after{
            right:-17px;
          }
          span{
            float: right;
            font-size:12px;
            .fa-angle-right{
              padding-left:4px;
            }
          }
        }
        &>.cont{
          height:80px;
          .left,.right{
            height:100%;
          }
          .left{
            width:60%;
            float:left;
            p{
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .money{
              height:58px;
              span{
                font-size:40px;
              }
            }
          }
          .right{
            width:40%;
            height:100%;
            float: right;
            text-align: left;
            padding:18px 6px 8px 6px;
            div span{
              padding:2px 4px;
              border:1px solid $rightColor;
              margin-top:4px;
            }
          }
        }
      }
    }
  }
</style>