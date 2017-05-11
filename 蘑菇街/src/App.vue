<template>
  <div id="app">
    <div class="container"><router-view></router-view></div>
    <footer id="footer">
      <router-link to='/Home'>
        <div>
          <i class="fa fa-home fa-lg"></i>
          <span>首页</span>
        </div>
      </router-link>
      <router-link to='/Classification'>
        <div>
          <i class="fa fa-th-large fa-lg"></i>
          <span>分类</span>
        </div>
      </router-link>
      <router-link to='/ShoppingCart'>
        <div>
          <i class="fa fa-shopping-cart fa-lg"></i>
          <span>购物车</span>
        </div>
      </router-link>
      <router-link to='/UserInfo'>
        <div>
          <i class="fa fa-user-circle-o fa-lg"></i>
          <span>我的</span>
        </div>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  *{
    box-sizing:border-box;
  }
  h1,h2,h3,h4,h5,h6{
    font-weight:normal;
    font-size:14px;
  }
  b,strong{
    font-weight:normal;
  }
  em,i{
    font-style:normal;
  }
  a{
    color:#000;
    &:hover,&:link,&:active{
      text-decoration: none;
    }
  }
  html,body,#app{
    width:100%;
    height:100%;
  }
  #app{
    background: #eee;
    overflow:hidden;
    display:flex;
    flex-direction: column;
  }
  .container{
    flex:1;
    overflow: auto;
  }
  #footer{
    width:100%;
    background:#fff;
    border-top:1px solid #ccc;
    height:44px;
    display:-webkit-box;
    text-align:center;
    a{
      display:block;
      -webkit-box-flex:1;
      display:flex;
      align-items: center;
      color:#999;
      &.router-link-active{
        color: #FF5777;
      }
      div{
        width:100%;
        height:100%;
        span{
          width:100%;
          display: inline-block;
          a{
            text-decoration: none;
          }
        }
        i{
          margin:0 auto;
          display:block;
          width:20px;
          height:20px;
          &.fa{
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }

</style>
