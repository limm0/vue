<template>
  <div id="ReceivingAddress">
    <header>
      <div class="leftBtn">
        <span class="fa fa-angle-left fa-lg"></span>
      </div>
      <h2>我的收货地址</h2>
      <div class="rightBtn">
        <span class="addAddress">添加</span>
      </div>
    </header>
    <div class="container">
      <section>
        <div class="userInfo">
          <h3><span>李萌萌</span><span>186****3544</span></h3>
          <p>北京市北京市海淀区上地七街北京八维研修学院</p>
        </div>
        <div class="editPanel">
          <span><i class="fa fa-check-circle"></i>设为默认</span>
          <b><i class="fa fa-trash fa-lg"></i>删除</b>
          <b><i class="fa fa-edit fa-lg"></i>编辑</b>
        </div>
      </section>
      <section>
        <div class="userInfo">
          <h3><span>李萌萌</span><span>186****3544</span></h3>
          <p>北京市北京市海淀区上地七街北京八维研修学院</p>
        </div>
        <div class="editPanel">
          <span><i class="fa fa-check-circle"></i>设为默认</span>
          <b><i class="fa fa-trash fa-lg"></i>删除</b>
          <b><i class="fa fa-edit fa-lg"></i>编辑</b>
        </div>
      </section>
      <section>
        <div class="userInfo">
          <h3><span>李萌萌</span><span>186****3544</span></h3>
          <p>北京市北京市海淀区上地七街北京八维研修学院</p>
        </div>
        <div class="editPanel">
          <span><i class="fa fa-check-circle"></i>设为默认</span>
          <b><i class="fa fa-trash fa-lg"></i>删除</b>
          <b><i class="fa fa-edit fa-lg"></i>编辑</b>
        </div>
      </section>
      <section>
        <div class="userInfo">
          <h3><span>李萌萌</span><span>186****3544</span></h3>
          <p>北京市北京市海淀区上地七街北京八维研修学院</p>
        </div>
        <div class="editPanel">
          <span><i class="fa fa-check-circle"></i>设为默认</span>
          <b><i class="fa fa-trash fa-lg"></i>删除</b>
          <b><i class="fa fa-edit fa-lg"></i>编辑</b>
        </div>
      </section>
      <section>
        <div class="userInfo">
          <h3><span>李萌萌</span><span>186****3544</span></h3>
          <p>北京市北京市海淀区上地七街北京八维研修学院</p>
        </div>
        <div class="editPanel">
          <span><i class="fa fa-check-circle"></i>设为默认</span>
          <b><i class="fa fa-trash fa-lg"></i>删除</b>
          <b><i class="fa fa-edit fa-lg"></i>编辑</b>
        </div>
      </section>
      <section>
        <div class="userInfo">
          <h3><span>李萌萌</span><span>186****3544</span></h3>
          <p>北京市北京市海淀区上地七街北京八维研修学院</p>
        </div>
        <div class="editPanel">
          <span><i class="fa fa-check-circle"></i>设为默认</span>
          <b><i class="fa fa-trash fa-lg"></i>删除</b>
          <b><i class="fa fa-edit fa-lg"></i>编辑</b>
        </div>
      </section>
      <section>
        <div class="userInfo">
          <h3><span>李萌萌</span><span>186****3544</span></h3>
          <p>北京市北京市海淀区上地七街北京八维研修学院</p>
        </div>
        <div class="editPanel">
          <span><i class="fa fa-check-circle"></i>设为默认</span>
          <b><i class="fa fa-trash fa-lg"></i>删除</b>
          <b><i class="fa fa-edit fa-lg"></i>编辑</b>
        </div>
      </section>
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
  #ReceivingAddress{
    width:100%;
    height:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    header{
      height:40px;
      border-bottom: 1px solid $borderColor;
      position: relative;
      line-height:40px;
      text-align: center;
      font-size:14px;
      color:$headerColor;
      background: $headColor;
      h2{
        font-weight: bold;
        font-size:14px;
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
      flex:1;
      padding:10px;
      overflow: auto;
      section{
        width:100%;
        border:1px solid $borderLightColor;
        border-radius:3px;
        margin-bottom:10px;
        .userInfo{
          width:100%;
          height:60px;
          background: #fff;
          padding:10px;
          h3,p{
            width:100%;
            height:20px;
            line-height: 20px;
          }
        }
        .editPanel{
          width:100%;
          height:30px;
          padding:5px 10px;
          background:$headColor;
          span,b{
            height:20px;
            line-height:20px;
          }
          b{
            float:right;
            padding-left:10px;
            i{
              padding-right:4px;
              color:$btnColor;
            }
          }
          span{
            i{
              padding-right:4px;
              color:#ccc;
            }
          }
        }
      }
    }
  }
</style>
