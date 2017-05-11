<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tabBox">
        <div class="tab-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
      </div>
    </div>
    <keep-alive class="content">
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from 'components/header/header'
const ERR_NO = 0
export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then(function (data) {
      if (data.data.errno === ERR_NO) {
        this.seller = Object.assign({}, this.seller, data.data.data)
      }
    }.bind(this))
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus">
  @import "./common/stylus/mixin"
  html,body
    width: 100%
    height: 100%
    #app
      width:100%
      height:100%
      display: flex
      flex-direction: column
      overflow: hidden
      .tab
        width: 100%
        height: 40px
        font-size: 14px
        border-1px(rgba(7,17,27,0.1))
        .tabBox
          width: 100%
          height: 100%
          display: flex
          .tab-item
            height: 100%
            flex: 1
            text-align: center
            line-height: 40px
            &>a
              color: rgb(77,85,93)
              &.router-link-active
                color: rgb(240,20,20)
      .content
        flex: 1
        overflow: hidden
</style>
