<template>
  <div id="TG">
    <!-- 团购页面头部 -->
    <div class="groupBuy_header">
      <div class="header_box">
        <div class="bg">精选</div>
        <div class="swiper-container choiceness-continer">
            <ul class="swiper-wrapper">
                <li class="swiper-slide slide-right">女装</li>
                <li class="swiper-slide slide-right">女鞋</li>
                <li class="swiper-slide slide-right">包包</li>
                <li class="swiper-slide slide-right">美妆</li>
                <li class="swiper-slide slide-right">男友</li>
                <li class="swiper-slide slide-right">内衣</li>
                <li class="swiper-slide slide-right">生活</li>
                <li class="swiper-slide slide-right">运动</li>
                <li class="swiper-slide slide-right">配饰</li>
                <li class="swiper-slide slide-right">食品</li>
                <li class="swiper-slide slide-right">母婴</li>
            </ul>
        </div>
      </div>
    </div>
    <div id="content">
      <div class="content">
        <div id="thislist">
          <div class="groupBuy_banner">
            <autoplay :address="'http://mce.mogucdn.com/jsonp/multiget/3?pids=40918%2C12908%2C43037%2C12777'" :id="'12908'" :loop="true"></autoplay>
          </div>
          <!-- 中间导航（U质团） -->
          <div class="groupBuy_pic">
            <ul>
              <li v-for="item in groupBuyPicList">
                <img :src="item.image" alt="">
                <p>
                  <span>{{item.title}}</span>
                  <i>{{item.description}}</i>
                </p>
              </li>
            </ul>
          </div>
          <!-- 团购页面主体 -->
          <div class="groupBuy_main">
            <div class="groupBuy_pinpai">
              <div class="groupBuy_pinpai_left">
                <h2>品牌团</h2>
                <p>甄选尖货打牌满减</p>
                <span><img src="src/img/下载 (1).png" alt=""></span>
              </div>
              <div class="groupBuy_pinpai_right">
                <div class="swiper-container swiper-container1">
                    <div class="swiper-wrapper swiper-wrapper1">
                        <div class="swiper-slide swiper-slide1" v-for="(item,index) in brandList" v-if="item.logo&&index<24">
                          <img :src="item.logo" alt="">
                          <p>{{item.name}}</p>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
            <div class="groupBuy_main_personBuy">
              <h2>大家都在买<span>特价尖货限时抢</span></h2>
              <div class="groupBuy_personBuy_list">
                <div class="swiper-container swiper-container2">
                    <div class="swiper-wrapper swiper-wrapper2">
                        <div class="swiper-slide swiper-slide2">
                          <img src="/src/img/b1.jpg" alt="">
                          <div class="img_info">
                            <h2>2017春上新中国版</h2>
                            <p><b>￥57.21</b><span>￥84.27</span></p>
                            <em>已抢:1127</em>
                          </div>
                        </div>
                        <div class="swiper-slide swiper-slide2">
                          <img src="/src/img/b2.jpg" alt="">
                          <div class="img_info">
                            <h2>2017春上新中国版</h2>
                            <p><b>￥57.21</b><span>￥84.27</span></p>
                            <em>已抢:1127</em>
                          </div>
                        </div>
                        <div class="swiper-slide swiper-slide2">
                          <img src="/src/img/b2.jpg" alt="">
                          <div class="img_info">
                            <h2>2017春上新中国版</h2>
                            <p><b>￥57.21</b><span>￥84.27</span></p>
                            <em>已抢:1127</em>
                          </div>
                        </div>
                        <div class="swiper-slide swiper-slide2">
                          <img src="/src/img/b2.jpg" alt="">
                          <div class="img_info">
                            <h2>2017春上新中国版</h2>
                            <p><b>￥57.21</b><span>￥84.27</span></p>
                            <em>已抢:1127</em>
                          </div>
                        </div>
                        <div class="swiper-slide swiper-slide2">
                          <img src="/src/img/b2.jpg" alt="">
                          <div class="img_info">
                            <h2>2017春上新中国版</h2>
                            <p><b>￥57.21</b><span>￥84.27</span></p>
                            <em>已抢:1127</em>
                          </div>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
            
            <div class="groupBuy_main_pic">
              <h2>今日精选<span>小编吐血推荐</span></h2>
              <ul>
                <li v-for="item in groupBuyMainPicList"><img :src="item.show.img" alt=""></li>
              </ul>
            </div>

            <div class="groupBuy_mian_list">
              <dl v-for="item in groupBuyMainList" :leftTime="item.leftTime" :isEnd="item.going">
                <dt><img :src="item.img" alt=""></dt>
                <dd>
                  <h2>{{item.title}}</h2>
                  <span><b>良品</b><i>广告</i></span>
                  <em>￥<span>{{item.originalPrice}}</span></em>
                  <div>
                    <h3><b>￥</b><p>{{item.price}}</p></h3>
                    <h4><b>省</b><i>￥</i><span>{{item.savePrice}}</span></h4>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import autoplay from '../Autoplay.vue';
export default {
  data () {
    return {
      groupBuyPicList:[],
      groupBuyMainList:[],
      groupBuyMainPicList:[],
      brandList:[],
      myScroll:null
    }
  },
  components:{
    autoplay
  },
  mounted(){
    let that=this;
    //渲染中间导航
     this.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=40918%2C12908%2C43037%2C12777',{name:""},function(err,data){
          if (err) throw err;
          that.groupBuyPicList=data.data[12777].list
    });
    // 渲染品牌团
    this.jsonp('http://tuan.mogujie.com/tuanBrand/brandIndex?bizKey=handschop',{name:""},function(err,data){
          if (err) throw err;
          that.brandList=that.brandList.concat(data.result.handschop.brand,data.result.handschop.list,data.result.handschop.next);
    })
    //渲染页面主体
    this.jsonp('http://list.mogujie.com/search?cKey=app-tuan-v2&algoKey=app_tuan_book_pop&fcid=10053172&pid=&searchTag=&sort=pop&page=1&ratio=3%3A4&_version=61&cpc_offset=0&_=1492157115763',{name:""},function(err,data){
          if (err) throw err;
          that.groupBuyMainPicList=data.result.wall.docs.slice(0,2);
          that.groupBuyMainList=data.result.wall.docs.slice(2);
    })
     new Swiper('.choiceness-continer', {
           freeMode: true,
           slidesPerView: 'auto',
           observer:true,
           observeParents:true
       });

     
      this.$set(this,'myScroll',new IScroll('#content'))
    
     
  },
  updated(){
    this.myScroll.refresh();
    new Swiper('.swiper-container1', {
             freeMode:true,
             slidesPerView: 'auto',
             observer:true,
             observeParents:true
         });
    new Swiper('.swiper-container2', {
             freeMode:true,
             slidesPerView: 'auto',
             observer:true,
             observeParents:true
         });
  }
}
</script>

<style scoped lang="scss">
#TG{
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #F6F6F6;
  display: flex;
  flex-direction: column;
}
#content{
  width:100%;
  flex:1;
  overflow: auto;
  .content{
    width:100%;
  }
}
#pullDown, #pullUp {padding:0 10px;height:30px;line-height:30px;color:#888;text-align:center} 
.groupBuy_header{
  width: 100%;
  height: 34px;
  background: #FF5777;
  .header_box{
    width:100%;
    height:100%;
    display: flex;
  }
  .bg{
    width:55px;
    height:100%;
    color:#fff;
    line-height:34px;
    text-align: center;
  }
}
.groupBuy_header .choiceness-continer{
  flex:1;
  height: 34px;
  overflow: hidden;
}
.groupBuy_header ul{
  width:auto;
  height: 100%;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
.groupBuy_header ul li{
  width: 34px;
  height: 100%;
  width: 55px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 34px;
}
.groupBuy_header .bg{
  background: url(/src/img/下载.png) no-repeat;
}
.groupBuy_banner{
  width: 100%;
  height: 120px;
}
.groupBuy_banner ul{
  width: 100%;
  height: 100%;
}
.groupBuy_banner ul li{
  width: 100%;
  height: 100%;
}
.groupBuy_banner ul li img{
  width: 100%;
  height: 100%;
}
.groupBuy_pic{
  width: 100%;
  height: auto;
  border-bottom: 2px solid #F3F3F3;
  background: #fff;
}
.groupBuy_pic ul{
  width: 100%;
  height: auto;
  display:flex;
  flex-wrap: wrap;
}
.groupBuy_pic ul li{
  width: 47%;
  height: 80px;
  position: relative;
  overflow: hidden;
  margin:2% 0 0 2%;
  border-radius: 3px;
  &:last-of-type{
    margin-bottom:2%;
  }
}
.groupBuy_pic ul li img{
  width: 100%;
  height:100%;
}
.groupBuy_pic ul li p{
  position: absolute;
  top: 10px;
  left: 12px;
  text-align: left;
  line-height:1.4;
}
.groupBuy_pic ul li p span{
  display: block;
  color: #FE4A5D;
  font-size: 14px;
}
.groupBuy_pic ul li p i{
  display: block;
  font-style: normal;
  font-size: 12px;
  color: #999;
}
.groupBuy_pic ul li:nth-child(2) p span{
  color: #FCC94F;
}
.groupBuy_pic ul li:nth-child(3) p span{
  color: #A168E1;
}
.groupBuy_pic ul li:nth-child(4) p span{
  color: #ED98F4;
}
.groupBuy_pinpai{
  width: 100%;
  height: auto;
  padding: 10px 0;
  display: -webkit-box;
  background: #fff;
}
.groupBuy_pinpai_left{
  width: 30%;
  height: auto;
  text-align: center;
}
.groupBuy_pinpai_left h2{
  color: #333;
  font-size: 16px;
}
.groupBuy_pinpai_left p{
  color: #888;
  padding: 5px;
  padding-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.groupBuy_pinpai_left span{
  width:100%;
  height:20px;
  display: block;
  img{
    height:100%;
  }
}
.groupBuy_pinpai_right{
  width: 70%;
  height: auto;
}
.swiper-container1{
  width: 100%;
  height: auto;
}
.swiper-wrapper1{
  width: 100%;
  height: auto;
  display: -webkit-box;
}
.swiper-slide1{
  width: 66px;
  height: 93px;
  margin-right: 10px;
}
.swiper-slide1 p{
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.swiper-slide1 img{
  width: 100%;
}
.groupBuy_main_personBuy{
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 15px;
}
.groupBuy_main_personBuy h2{
  font-size: 14px;
  padding:8px;
}
.groupBuy_main_personBuy h2 span{
  color: #999;
  font-size: 12px;
  padding-left:4px;
}

.groupBuy_personBuy_list{
  width: 100%;
  height: 100%;
}
.swiper-container2{
  width: 100%;
  height: auto;
}
.swiper-wrapper2{
  width: 100%;
  height: auto;
  display: -webkit-box;
}
.swiper-slide2{
  width: 86px;
  margin-left: 8px;
  &:last-of-type{
    margin-right:8px;
  }
}
.swiper-wrapper2 img{
  width: 86px;
  height: 86px;
}
.img_info{
  text-align: center;
  padding-bottom: 10px;
}
.img_info h2{
  color: #999999;
  font-size: 12px;
  margin-top: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #999999;
}
.img_info p{
  color: #333333;
  font-size: 14px;
  overflow: hidden;
  height:20px;
  margin-bottom: 4px;
}
.img_info p b{
  height:20px;
  font-size:14px;
}
.img_info p span{
  height:20px;
  font-size: 10px;
  text-decoration: line-through;
  padding-left: 2px;
  white-space: nowrap;
}
.img_info em{
  padding:2px 10px;
  border-radius: 10px;
  text-align: center;
  background: #FFE6E8;
  color: #F64976;
}
.groupBuy_main{
  width:100%;
  height:auto;
}
.groupBuy_main_pic{
  width: 100%;
  margin-top: 15px;
  background: #fff;
}
.groupBuy_main_pic h2{
  line-height: 40px;
  font-size: 14px;
  padding-left: 8px;
}
.groupBuy_main_pic h2 span{
  font-weight: normal;
  font-size: 12px;
  padding-left: 4px;
  color: #999;
}
.groupBuy_main_pic ul{
  width: 100%;
  height:auto;
  overflow: hidden;
}
.groupBuy_main_pic ul li{
  width: 47%;
  margin-left: 2%;
  float: left;
}
.groupBuy_main_pic ul li img{
  width: 100%;
}
.groupBuy_mian_list{
  width: 100%;
  height: auto;
  background: #FBFBFB;
  overflow: hidden;
}
.groupBuy_mian_list dl{
  width: 47%;
  margin-left: 2%;
  float: left;
  margin-top: 7px;
  margin-bottom: 5px;
  background:#fff;
  border-radius:0 0 3px 3px;
}
.groupBuy_mian_list dl dt{
  width: 100%;
}
.groupBuy_mian_list dl dt img{
  width: 100%;
  border-radius:3px 3px 0 0;
}
.groupBuy_mian_list dl dd{
  text-align: center;
  padding-bottom: 4px;
  padding-left:6px;
}
.groupBuy_mian_list dl dd h2{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right:10px;
}
.groupBuy_mian_list dl dd>span{
  margin: 5px 0;
  display: block;
  text-align: left;
}
.groupBuy_mian_list dl dd span b{
  background: #F9E4A8;
  padding: 2px 4px;
}
.groupBuy_mian_list dl dd span i{
  font-style: normal;
  background: #EFF3F6;
  color: #5A6F85;
  padding: 3px 5px;
  margin-left: 5px;
}
.groupBuy_mian_list dl dd em{
  text-align: left;
  display: block;
  font-size: 10px;
  text-decoration: line-through;
  color: #999;
}
.groupBuy_mian_list dl dd div{
  text-align: left;
  display: -webkit-box;
  -webkit-box-pack: justify;
  height: 16px;
}
.groupBuy_mian_list dl dd div h3{
  display: -webkit-box;
  -webkit-box-align: center;
  color: #FF4877;
  font-size: 16px;
  line-height: 1;
}
.groupBuy_mian_list dl dd div h4{
  margin-right: 5px;
  font-size: 12px;
  display: -webkit-box;
  -webkit-box-align: center;
  background: url(/src/img/下载2.png) left center no-repeat;
  border-radius: 10px;
  font-weight: normal;
  padding: 0 4px 0 8px;
  height: 16px;
  line-height: 1;
}
.groupBuy_mian_list dl dd div h4 b{
  color: #fff;
}
.groupBuy_mian_list dl dd div h4 i{
  color: #fff;
  font-style: normal;
}
.groupBuy_mian_list dl dd div h4 span{
  color: #fff;
  padding: 0;
}
</style>
