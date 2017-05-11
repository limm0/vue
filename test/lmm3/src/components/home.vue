<template>
  <div id="home">
    <div id="ShoppingCart">
      <header>
        <div class="leftBtn"><span class="fa fa-icon-angle-left"></span></div>
        <h2>购物车</h2>
        <div class="rightBtn"></div>
      </header>
    </div>
  </div>
</template>

<script>

import axios from "axios"

export default {
  data () {
    return {
      
    }
  },
  mounted:function(){
  	// axios.get("./src/data/test.json").then(function(res){
  	// 	console.log(res.data)
  	// },function(err){
  	// 	console.log(err)
  	// })
  	this.$http.jsonp("https://list.mogujie.com/search",{page:1},{jsonp:"callback"}).then(function(res){
  		console.log(res.data)
  	},function(err){
  		console.log(err)
  	})
  }

}
</script>

<style>

</style>
