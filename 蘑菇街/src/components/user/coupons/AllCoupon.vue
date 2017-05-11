<template>
  <div class="coupons">
    <ul>
      <li>
        <div class="left">
          <p class="couponHead">两元无门槛</p>
          <div class="money">￥<span>3</span></div>
          <p>减两元(APP认证店铺专享)</p>
        </div>
        <div class="right">
          <p>使用期限</p>
          <p>2017.03.30 18:12</p>
          <p>2017.03.31 18:12</p>
          <div><span>立即使用</span></div>
        </div>
      </li>
      <li>
        <div class="left">
          <p class="couponHead">两元无门槛</p>
          <div class="money">￥<span>3</span></div>
          <p>减两元(APP认证店铺专享)</p>
        </div>
        <div class="right">
          <p>使用期限</p>
          <p>2017.03.30 18:12</p>
          <p>2017.03.31 18:12</p>
          <div><span>立即使用</span></div>
        </div>
      </li>
      <li>
        <div class="left">
          <p class="couponHead">两元无门槛</p>
          <div class="money">￥<span>3</span></div>
          <p>减两元(APP认证店铺专享)</p>
        </div>
        <div class="right">
          <p>使用期限</p>
          <p>2017.03.30 18:12</p>
          <p>2017.03.31 18:12</p>
          <div><span>立即使用</span></div>
        </div>
      </li>
      <li>
        <div class="left">
          <p class="couponHead">两元无门槛</p>
          <div class="money">￥<span>3</span></div>
          <p>减两元(APP认证店铺专享)</p>
        </div>
        <div class="right">
          <p>使用期限</p>
          <p>2017.03.30 18:12</p>
          <p>2017.03.31 18:12</p>
          <div><span>立即使用</span></div>
        </div>
      </li>
      <li class="expired">
        <div class="left">
          <p class="couponHead">两元无门槛</p>
          <div class="money">￥<span>3</span></div>
          <p>减两元(APP认证店铺专享)</p>
        </div>
        <div class="right">
          <p>使用期限</p>
          <p>2017.03.30 18:12</p>
          <p>2017.03.31 18:12</p>
          <div><span>立即使用</span></div>
        </div>
      </li>
      <li class="expired">
        <div class="left">
          <p class="couponHead">两元无门槛</p>
          <div class="money">￥<span>3</span></div>
          <p>减两元(APP认证店铺专享)</p>
        </div>
        <div class="right">
          <p>使用期限</p>
          <p>2017.03.30 18:12</p>
          <p>2017.03.31 18:12</p>
          <div><span>立即使用</span></div>
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
        width:100%;
        height: 96px;
        background: $couponRedColor;
        border-radius: 3px;
        color:#fff;
        margin-top: 10px;
        &.expired{
          background: $couponGrayColor;
          .left{
            background:$leftColor;
            position:relative;
            .couponHead{
              border-bottom: 1px dotted $leftHeadBorder;
            }
            &:after{
              content:"";
              width:96px;
              height:96px;
              position: absolute;
              right:-48px;
              top:0;
              background:url(../../../assets/img/used.png) no-repeat center center;
              background-size: 100%;
            }
          }
          .right{
            position: relative;
            color:$rightColor;
            div{
              span{
                border:1px solid $rightColor;
              }
            }
            &:before{
              content:"";
              width:4px;
              height:100%;
              background:url(../../../assets/img/line.png);
              background-size: 100%;
              position:absolute;
              left:-2px;
              top:0;
            }
          }
        }
        .left,.right{
          height:100%;
        }
        .left{
          width:63%;
          float:left;
          padding:8px 6px;
          background:$btnColor;
          p{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .couponHead{
            width:100%;
            height:30px;
            border-bottom: 1px dotted #fff;
          }
          .money{
            height:30px;
            span{
              font-size:22px;
            }
          }
        }
        .right{
          width:37%;
          float: right;
          color:#fff;
          text-align: center;
          padding:8px 6px;
          div{
            margin-top:4px;
            span{
              margin-top:2px;
              padding:0 4px;
              border:1px solid #fff;
            }
          }
        }
      }
    }
  }
</style>