<template>
  <div id="Chat">
    <header>
      <div class="fa fa-angle-left fa-lg leftBtn"></div>
      <h2>聊天</h2>
    </header>
    <div class="content">
      <dl>
        <dt><img src="src/assets/img/mogukf.jpg" alt=""></dt>
        <dd>
          <h3>蘑菇街客服<time>16:13</time></h3>
          <p>小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="src/assets/img/flxx.jpg" alt=""></dt>
        <dd>
          <h3>福利消息<time>16:13</time></h3>
          <p>小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="src/assets/img/dstx.jpg" alt=""></dt>
        <dd>
          <h3>定时提醒<time>16:13</time></h3>
          <p>小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="src/assets/img/hdxx.jpg" alt=""></dt>
        <dd>
          <h3>活动消息<time>16:13</time></h3>
          <p>小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="src/assets/img/ddzs.jpg" alt=""></dt>
        <dd>
          <h3>订单助手<time>16:13</time></h3>
          <p>小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="src/assets/img/mgms.jpg" alt=""></dt>
        <dd>
          <h3>多多小秘书<time>16:13</time></h3>
          <p>小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，小主，您的优惠券即将过期了，还不快来享用，</p>
        </dd>
      </dl>
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
  #Chat{
    width:100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background:#fff;
    header{
      width:100%;
      height:42px;
      line-height:42px;
      text-align: center;
      position: relative;
      font-size:20px;
      border-bottom:1px solid $borderColor;
      .leftBtn{
        position:absolute;
        left:14px;
        top:0;
        height:100%;
        line-height:42px;
      }
      h2{
        font-size:20px;
      }
    }
    .content{
      width:100%;
      flex:1;
      overflow: auto;
      dl{
        height: 66px;
        width:100%;
        border-bottom:1px solid $borderColor;
        display: flex;
        align-items: center;
        padding:12px 8px 14px 8px;
        dt{
          width:36px;
          height:36px;
          img{
            height:100%;
            border-radius:100%;
          }
        }
        dd{
          flex:1;
          width:100%;
          height:40px;
          overflow: hidden;
          padding-left:12px;
          h3{
            time{
              float:right;
              font-size:12px;
              color:#999;
              padding-right:10px;
            }
          }
          p{
            width: 100%;
            padding-right:10px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color:#999;
          }
        }
      }
    }
  }
</style>
