<template>
  <div id="MRSX">
   <!--  头部图片 -->
    <div class="everyDay_banner">
      <img src="/src/img/1.jpg">
    </div>
    <!-- title标题 -->
    <div class="everyDay_title">
      <img src="/src/img/title.png" alt="">    
    </div>
   <!--  主题内容 -->
    <div class="everyDay_mian">
      <div class="everyDay_mian_today">
        <h2 class="everyDay_mian_bt"><span></span>今日新品推荐<span></span></h2>
        <div class="everyDay_mian_today_list">
          <dl>
            <dt><img src="/src/img/mrsx.png" alt=""></dt>
            <dd>
              <div class="dd_title">
                <h2>撞色绑带牛仔背带裙</h2>
                <p>百搭宽松 下摆开叉</p>
              </div>
              <div class="dd_text">
                <p style="text-indent:2em;">肩带是彩色条纹的背心裙，腰上有腰带，可以系上一个蝴蝶结，显出你纤细的腰身</p>
              </div>
              <div class="dd_money">
                <p>新品价</p>
                <h2>￥59.20</h2>
                <span>原价:￥102</span>
              </div>
              <div class="dd_btn">
                <p>立即购买 ></p>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <div class="everyDay_mian_more">
        <h2 class="everyDay_mian_bt"><span></span>更多新品精选<span></span></h2>
        <div class="everyDay_more_title">
          <span class="bg">新艺美妆</span>
          <span>新包in季</span>
          <span>更多新品</span>
        </div>
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

<style scoped>
  #MRSX{
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
  .everyDay_mian_today{
    width: 100%;
    height: auto;
  }
  .everyDay_mian_bt{
    text-align: center;
    font-size: 14px;
    color: #333333;
    display: -webkit-box;
     -webkit-box-pack: center;
    -webkit-box-align: center;
    padding: 15px 0;
    background: #F7F7F7;
    border-top: 2px solid #F1F1F1;
  }
  .everyDay_mian_bt span{
    width: 36px;
    height: 4px;
    background: #E9E9E9;
    display: block;
    margin:0 4px;
  }
  .everyDay_mian_today_list{
    width: 100%;
    height: 100%;
    background: #F7F7F7;
    padding:10px;
    overflow: hidden;
  }
  .everyDay_mian_today_list dl{
    width: 100%;
    height: 100%;
    display: -webkit-box;
  }
  .everyDay_mian_today_list dl dt{
    width: 50%;
    padding-right: 15px;
  }
  .everyDay_mian_today_list dl dt img{
    width: 100%;
  }
  .everyDay_mian_today_list dl dd{
    -webkit-box-flex:1;
  }
  .everyDay_mian_today_list dl dd .dd_title{
     border-bottom: 1px solid #ccc;
  }
  .everyDay_mian_today_list dl dd .dd_title h2{
    font-size: 14px;
    padding-bottom: 3px;
  }
  .everyDay_mian_today_list dl dd .dd_title p{
    font-size: 14px;
    color: #525252;
  }
  .everyDay_mian_today_list dl dd .dd_text{
    font-size: 12px;
  }
  .everyDay_mian_today_list dl dd .dd_text p{
    color: #525252;
    line-height: 25px;
  }
  .everyDay_mian_today_list dl dd .dd_money{
    display: -webkit-box;
    -webkit-box-align: center;
    overflow: hidden;
  }
  .everyDay_mian_today_list dl dd .dd_money p{
    width: 40px;
    height: 20px;
    font-size: 10px;
    color: #ff8181;
    text-align: center;
    border: 1px solid #ff8181;
    border-radius: 3px;
  }
  .everyDay_mian_today_list dl dd .dd_money h2{
    font-size: 14px;
    font-weight: normal;
    padding: 0 4px;
    color: #ff5a5a;
  }
  .everyDay_mian_today_list dl dd .dd_money span{
    display: block;
    color: #949494;
    font-size: 12px;
    text-decoration: line-through;
    line-height: 20px;
  }
  .everyDay_mian_today_list dl dd .dd_btn{
    margin-top: 6px;
  }
  .everyDay_mian_today_list dl dd .dd_btn p{
    width: 110px;
    height: 24px;
    border-radius: 12px;
    text-align: center;
    line-height: 24px;
    color: #fff;
    background-color: #ff8181;
  }
  .everyDay_mian_more{
    width: 100%;
    height: 100%;
  }
  .everyDay_more_title{
    width: 100%;
    height: 38px;
    background: #F7F7F7;
    display: -webkit-box;
     -webkit-box-pack: center;
    -webkit-box-align: center;
  }
  .everyDay_more_title span{
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .everyDay_more_title span.bg{
    color: #F72F76;
  }
  .everyDay_mian_more_list{
    width: 100%;
    height: auto;
    background:#fff;
  }
  .everyDay_mian_more_list dl{
    width: 100%;
    height: 120px;
    padding:6px;
    display: -webkit-box;
    border-bottom: 1px solid #fafafa;
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
  }
  .everyDay_mian_more_list dl dd .price p{
    float: left;
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
  }
</style>
