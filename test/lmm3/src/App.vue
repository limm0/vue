<template>
  <div id="app">
    <div class="header">
      <h2>头部</h2>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link to="/home">主页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/user">用户</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
  
<style>

</style>
