<template>
  <div id="app">
    <div class="header">
      <h2>{{this.$store.state.name}}</h2>
    </div>
    <div class="content">
      <button @click="vuexClick('app页面传参')">vuex</button>
      <router-view></router-view>
    </div>
    <div class="footer">
      <span><router-link to="/home">主页</router-link></span>
      <span><router-link to="/news">新闻</router-link></span>
      <span><router-link to="/user">用户</router-link></span>
    </div>
  </div>
</template>

<script>
import bus from './components/bus'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: '这是App'
    }
  },
  methods:mapActions([
      'vuexClick'
    ])
}
</script>
  
<style lang="scss">
  html,body{
    width:100%;
    height:100%;
  }
  #app{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .header{
      width:100%;
      height:40px;
      h2{
        width:100%;
        height:100%;
        text-align:center;
        line-height:40px;
        background:#f60;
      }
    }
    .footer{
      width:100%;
      height:40px;
      display:flex;
      align-items: center;
      justify-content: space-between;
      span{
        background:gray;
        width:100%;
        height:100%;
        line-height:40px;
        text-align: center;
        border-right: 2px solid #fff;
        a{
          color:#fff;
          width:100%;
          height:100%;
          display: block;
        }
        &:last-of-type{
          border-right: none;
        }
      }
    }
    .content{
      flex:1;
    }
  }
</style>
