<template>
  <div id="Collection">
    <header>
      <div class="leftBtn">
        <span class="fa fa-angle-left fa-lg"></span>
      </div>
      <h2>我的收藏</h2>
    </header>
    <div class="container">
      <div class="nav">
        <div><router-link to="/Collection/CollectionCommodity"><span>宝贝</span></router-link></div>
        <div><router-link to="/Collection/CollectionShop"><span>店铺</span></router-link></div>
      </div>
      <router-view></router-view>
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
  #Collection{
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
      font-size:16px;
      color:$headerColor;
      background: $headColor;
      h2{
        font-weight: bold;
        font-size:16px;
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
      background: $bgColor;
      .nav{
        width:100%;
        height:40px;
        background: #fff;
        font-size:14px;
        div{
          width:50%;
          height:100%;
          float: left;
          text-align: center;
          line-height: 40px;
          a{
            display: inline-block;
            height:100%;
            width:100%;
          }
          &>.router-link-active{
            border-bottom: 1px solid $btnColor;
            color:$btnColor;
          }
          span{
            padding:0 10px;
            height:100%;
            display: inline-block;
          }
        }
      }
    }
  }
</style>
