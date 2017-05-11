<template>
  <div id="PendingReceiving">
    <section>
      <h3>已完成</h3>
      <div class="commodity">
        <h4>千凡姑娘</h4>
        <dl>
          <dt><img src="src/assets/img/splb.jpg" alt=""></dt>
          <dd>
            <div class="commodityInfo">
              <p>【5双装】袜子男纯棉船袜百搭纯色短袜子全棉男士商务休闲男袜</p>
              <span class="oldPrice">￥29.90</span>
              <span class="newPrice">￥19.90</span>
            </div>
            <div class="selectedInfo">
              <p>颜色：5色如图；尺码：5双装；</p>
              <span class="number">x1</span>
            </div>
          </dd>
        </dl>
      </div>
      <div class="shoppingInfo">
        <span>全国包邮</span>
        <span>合计 : <b>19.90</b></span>
      </div>
      <div class="btns">
        <span class="logistics">查看物流</span>
        <span class="evaluate">评价</span>
      </div>
    </section>
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
  #PendingReceiving{
    width:100%;
    padding:10px;
    section{
      width:100%;
      border:1px solid $borderLightColor;
      h3{
        height:38px;
        width:100%;
        padding:0 10px;
        line-height:38px;
        color: #f43c32;
        background:#f6f5f5;
        border-bottom:1px solid #f0f0f0;
      }
      div{
        background:#fff;
        border-bottom:1px solid $borderLightColor;
      }
      .commodity{
        width:100%;
        padding:10px;
        h4{
          width:100%;
          height:30px;
          line-height:30px;
          font-size:12px;
          color:#727272;
          border-bottom:1px solid $borderLightColor;
        }
        dl{
          width:100%;
          display:flex;
          padding:10px 0;
          dt{
            width:56px;
            height:56px;
            border:1px solid $borderLightColor;
            padding:1px;
            img{
              width:100%;
              height:100%;
            }
          }
          dd{
            flex:1;
            padding-left:10px;
            .commodityInfo{
              width:100%;
              overflow: hidden;
              border-bottom: none;
              p{
                float:left;
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:2;
                overflow: hidden;
                width:70%;
                font-size:14px;
              }
              span{
                width:30%;
                float: right;
                text-align: right;
                &.oldPrice{
                  color:#999;
                  text-decoration: line-through;
                }
              }
            }
            .selectedInfo{
              width:100%;
              height:30px;
              line-height:30px;
              overflow: hidden;
              border-bottom: none;
              color:#999;
              p{
                width:70%;
                height:100%;
                float: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .number{
                width:30%;
                float: right;
                text-align: right;
              }
            }
          }
        }
      }
      .shoppingInfo{
        width:100%;
        height:54px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding:0 10px;
        span{
          padding-left:10px;
          height:20px;
          display: flex;
          align-items: flex-end;
          b{
            font-size:20px;
            line-height:1.2;
            color:#f43c32;
            padding-left:4px;
          }
        }
      }
      .btns{
        width:100%;
        height:50px;
        padding:10px;
        display: flex;
        justify-content: flex-end;
        border-bottom:none;
        span{
          height:30px;
          border:1px solid $borderLightColor;
          padding:4px 10px;
          border-radius:3px;
          margin-left: 10px;
          &.evaluate{
            background: #f43c32;
            color:#fff;
            border-color:#f43c32;
          }
        }
      }
    }
  }
</style>