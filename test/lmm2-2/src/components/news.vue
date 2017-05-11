<template>
  <div id="news">
    {{msg}}
    <button>{{this.$store.state.name}}</button>
    <button @click="change">点击触发更改事件</button>
    <router-view></router-view>
  </div>
</template>

<script>
import bus from './bus'
import {mapGetters,mapActions} from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  props:['msg'],
  mounted(){
    bus.$on('bb',function(data){
      console.log(data)
    })
  },
  methods:mapActions([
      'change'
    ])
}
</script>

<style>

</style>
