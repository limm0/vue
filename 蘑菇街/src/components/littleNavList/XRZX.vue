<template>
  <div id="XRZX">
   <!--  头部图片 -->
    <div class="everyDay_banner">
      <img src="/src/img/xrms.png">
    </div>
   <!--  主题内容 -->
    <div class="everyDay_mian">
      <div class="everyDay_mian_more">
        <h2 class="everyDay_mian_bt"><i><img src="src/img/xrzx.png" alt=""></i><span><em class="fa fa-clock-o"></em><b>距离秒杀结束还有<time>28:13:21</time></b></span></h2>
        <div class="everyDay_mian_more_list">
          <dl v-for="x in items">
            <dt><img :src="x.image" alt=""></dt>
            <dd>
              <h2>{{x.title}}</h2>
              <div class="status-bar-box">
                <div class="status-bar" style="width:80%"></div>
              </div>
              <div class="num">
                 <p>已抢购{{x.total}}件</p>
                 <span>仅剩{{x.left}}件</span>
              </div>
             <div class="price"> 
               <p><span>￥{{x.salePrice}}</span><i>￥{{x.price}}</i></p>
               <h3>立即抢购</h3>
             </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  data () {
    return {
      items:null
    }
  },
  mounted:function(){
    this.jsonp('http://qiang.mogujie.com/jsonp/actGroupItem/1?groupKey=120&bizKey=rush_main',{name:"callback"},(err,data)=>{
              if (err) throw err;
              this.items=data.data.itemList
        })
  }
  /*name: 'app',
  data () {
    return {
      myData:http:"http://qiang.mogujie.com/jsonp/actGroupItem/1?groupKey=122&bizKey=rush_main&callback=httpCb149187479952546&_=1491874799525",
      v1:""
    }
  },
  methods:{
    show:function(){
      this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
      {//请求参数
        params: {
          wd:this.v1
        },
        jsonp:'cb'
      }).then(function(res){
        this.myData = JSON.parse(res.bodyText).s
        console.log(this.myData)
      },function(){
        //console.log(1)
      });
    }
  }*/
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/color.scss";
  #XRZX{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .everyDay_banner{
    width: 100%;
    height: auto;
  }
  .everyDay_banner img{
    width: 100%;
    height: 100%;
  }
  .everyDay_title{
    width: 100%;
    height: 33px;
    background: #F2F2F2;
    display: -webkit-box;
  }
  .everyDay_title img{
    width: 100%;
  }
  .everyDay_mian_more{
    width: 100%;
    height: 100%;
  }
  .everyDay_mian_bt{
    width:100%;
    height:40px;
    padding:8px;
    background:#fff;
    i{
      width:30%;
      height:100%;
      float:left;
      img{
        width:100%;
      }
    }
    span{
      width:60%;
      float:right;
      height:100%;
      border-radius:10px;
      background:#eee;
      color:#666;
      font-size:12px;
      line-height:24px;
      text-align: center;
      time{
        padding-left:4px;
      }
      .fa-clock-o{
        padding-right:4px;
      }
    }
  }
  .everyDay_mian_more_list{
    width: 100%;
    height: auto;
    background:#fff;
  }
  .everyDay_mian_more_list dl{
    width: 100%;
    height: 140px;
    padding:6px;
    display: -webkit-box;
    border-bottom: 1px solid $borderColor;
  }
  .everyDay_mian_more_list dl dt{
    width: 40%;
    height:100%;
    padding-right: 10px;
    overflow: hidden;
  }
  .everyDay_mian_more_list dl dt img{
    height: 100%;
  }
  .everyDay_mian_more_list dl dd{
    -webkit-box-flex: 1;
  }
  .everyDay_mian_more_list dl dd h2{
    font-size: 12px;
    padding-bottom: 7px;
    color: #333;
  }
  .status-bar-box{
    text-align: center;
    background-color: #E5E5E5;
    border-radius: .07rem;
    line-height: 0.33rem;
    font-size: 0.22rem;
    margin-bottom: 5px;
    width: 100%;
    height: .12rem;
    position: relative;
  }
  .status-bar{
    position: absolute;
    height: 100%;
    width: 50%;
    border-radius: .07rem;
    z-index: 1;
  }
  .everyDay_mian_more_list dl dd{
    display:flex;
    flex-direction: column;
    padding-bottom: 10px;
  }
  .everyDay_mian_more_list dl dd .num{
    width: 100%;
    height: 20px;
  }
  .everyDay_mian_more_list dl dd .num p{
    float: left;
    font-size: 12px;
    color: #999999;
  }
  .everyDay_mian_more_list dl dd .num span{
    display: block;
    float: right;
    font-size: 12px;
    color: #ff5777;
  }
  .everyDay_mian_more_list dl dd .price{
    width: 100%;
    margin-top: 5px;
    flex:1;
    position: relative;
  }
  .everyDay_mian_more_list dl dd .price p{
    float: left;
    height:100%;
    background: url(/src/img/xrzxlogo.png) no-repeat left top;
    background-size:100%;
    padding-top:20px;
    position:absolute;
    left:0;
    bottom:0;
  }
  .everyDay_mian_more_list dl dd .price p span{
    font-size: 14px;
    color: #333;
  }
  .everyDay_mian_more_list dl dd .price p i{
    font-weight: normal;
    font-style: normal;
    font-size: 12px;
    display: block;
    padding-left: 3px;
    text-decoration: line-through;
    color: #999999;
    margin-bottom: -5px;
  }
  .everyDay_mian_more_list dl dd .price h3{
    margin-top: 4px;
    float: right;
    width: 82px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    color: #fff;
    background: #ff5777;
    border-radius:3px;
    position: absolute;
    right:0;
    bottom:0;
  }
</style>
