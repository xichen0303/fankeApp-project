<!--王迎港-----------详情页面-->
<template>
  <div class="Details">
    <div class="main">
      <Header></Header>
      <Swiper></Swiper>
      <div class="intro">
        <span class="name">水洗棉 蝴蝶袖 女款 藏青色</span>
        <span class="original">398元</span>
        <span class="discount">158元</span>
        <div>
          <router-link to="#" class="activity">充100返100，点击充值</router-link>
        </div>
        <div>
          <span class="ChongZhi">充值购买更优惠</span>
        </div>
        <!--规格选择-->
        <div class="specification-wrap">
          <div class="specification" @click="specification = !specification">
            <span class="icon"></span>
            <span class="style">选择 颜色/尺码</span>
            <span class="open"></span>
          </div>
          <div class="specification-main" v-show="specification">
            <div class="specification-color">
              <h3 class="size-box-tit">选择颜色</h3>
              <p class="size-box-wrap">
                <span class="size-box">白色</span>
                <span class="size-box">蓝白条纹</span>
                <span class="size-box">虎纹鲨鱼</span>
              </p>
            </div>
            <div class="specification-size">
              <h3 class="size-box-tit">尺码选择</h3>
              <p class="size-box-wrap">
                <span class="size-box">S</span>
                <span class="size-box">M</span>
              </p>
            </div>
            <div class="specification-num">
              <h3 class="size-box-tit">购买数量</h3>
              <p class="size-box-wrap">
                <span class="shopAdd"></span>
                <span class="num">1</span>
                <span class="shopSub"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--商品详情评论咨询-->
      <div class="tab">
        <ul>
          <li>
            <span @click="showFun('img')" :class="{ 'red': showImg === show }">商品详情</span>
          </li>
          <li>
            <span @click="showFun('comment')" :class="{ 'red': showComment === show }">评论</span>
          </li>
          <li>
            <span @click="showFun('consult')" :class="{ 'red': showConsult === show }">咨询</span>
          </li>
        </ul>
      </div>
      <!--<div class="border"></div>-->
      <div class="show-img" v-if="show == 'img'">
        <img src="http://i2.m.vancl.com/oms/2017_3_28_15_2_20_2223_640x99.jpg" alt="">
        <img src="http://i7.m.vancl.com/oms/2017_3_28_15_2_24_7142_640x420.jpg" alt="">
        <img src="http://i5.m.vancl.com/oms/2017_3_28_15_2_24_5714_640x108.jpg" alt="">
        <img src="http://i7.m.vancl.com/oms/2017_3_28_15_2_24_7109_640x813.jpg" alt="">
        <img src="http://i9.m.vancl.com/oms/2017_3_28_15_2_26_9029_640x458.jpg" alt="">
        <img src="http://i9.m.vancl.com/oms/2017_3_28_15_2_26_9552_640x306.jpg" alt="">
      </div>
      <div class="show-comment" v-if="show == 'comment'">
        <div class="comment">
          <p>
            <span>来自:1391***</span>
            <span>2018/1/24 13:30:47</span>
          </p>
          <p>好很好好很好</p>
        </div>
        <div class="comment">
          <p>
            <span>来自:1391***</span>
            <span>2018/1/24 13:30:47</span>
          </p>
          <p>好很好好很好</p>
        </div>
        <div class="more">
          <span class="" @click="more = !more" v-if="more">查看更多</span>
          <span class="" v-else>加载中...</span>
        </div>
      </div>
      <div class="show-consult" v-if="show == 'consult'" >
        <div class="consult-imp">
          <h3>我要咨询:</h3>
          <div class="cont">
            <textarea placeholder="您输入的字数不要超过60个字" maxlength="60">

            </textarea>
          </div>
          <div class="sub">
            <span>提交</span>
          </div>
        </div>
        <div class="consult">
          <p class="issue">问:162cm，55kg，穿多大的码呀！谢谢</p>
          <p class="user">
            <span class="user-name">用户:183*******</span>
            <span class="date">2018-02-24</span>
          </p>
          <p class="answer">亲爱的客户您好，您可以尝试购买一件M码的哦，您也可以参考单品页面尺码对应表来选择您的尺码哦。感谢您的支持！祝您购物愉快！\(^o^)/~</p>
        </div>
        <div class="consult">
          <p class="issue">问:162cm，55kg，穿多大的码呀！谢谢</p>
          <p class="user">
            <span class="user-name">用户:183*******</span>
            <span class="date">2018-02-24</span>
          </p>
          <p class="answer">亲爱的客户您好，您可以尝试购买一件M码的哦，您也可以参考单品页面尺码对应表来选择您的尺码哦。感谢您的支持！祝您购物愉快！\(^o^)/~</p>
          <div class="more">
            <span class="" @click="more = !more" v-if="more">查看更多</span>
            <span class="" v-else>加载中...</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <router-link to="#">
        <span class="shopCar"></span>
      </router-link>
      <router-link to="#">
        <span class="addCar">加入购物车</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Header from "./Header"
  import Swiper from "./Swiper"
  export default {
    name: 'Details',
    components: {
      Header,
      Swiper
    },
    data () {
      return {
        title: "商品详情",
        more: true,
        show: "img",
        showImg:"img",
        showComment:"comment",
        showConsult:"consult",
        specification: false,
      }
    },
    created() {
      this.$store.dispatch("pageNameA",this.title);
      console.log(this.$store.state.pageName);
    },
    methods: {
      showFun: function (cell) {
        this.show = cell;
      }
    }
  }
</script>


<style scoped>
  .red {
    color: red;
  }
  .Details {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .main {
    flex: 1;
    overflow-y: auto;
  }
  .intro {
    padding: .5em 2em;
    line-height: 2.2em;
  }
  .original {
    color: #c8161e;
    font-size: 1.2em;
    text-decoration: line-through;
    margin-right: 0.1em;
  }
  .discount {
    color: #c8161e;
    font-size: 1.5em;
  }
  .activity {
    color: #c8161e;
    font-size: 1.2em;
    margin-right: 1.5em;
    max-width: 16.5em;
  }
  .ChongZhi {
    color: #c8161e;
    font-size: 1.2em;
    margin-right: 1.5em;
    max-width: 16.5em;
  }
  /*规格选择*/
  .specification-wrap {
    padding: .9em 0;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
  }
  .specification {
    background: #f5f5f5;
    padding: .8em .8em;
    cursor: pointer;
  }
  .specification:after {
    content: "";
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    clear: both;
  }
  .icon {
    float: left;
    margin-right: .8em;
    margin-top: .3em;
    height: 1.35em;
    width: 1.35em;
    background: url("./../../static/images/size_icon.jpg") no-repeat center center;
    background-size: contain;
  }
  .style {
    float: left;
    font-size: 1.2em;
    color: #4c4c4c;
  }
  .open {
    float: right;
    margin-top: .3em;
    width: .7em;
    height: 1.35em;
    background: url(./../../static/images/swordr_icon.jpg) no-repeat center center;
    background-size: contain;
  }
  .red {
    color: red;
  }
  /*规格选择主体 */
  .specification-main {
    color: #4d4d4d;;
  }
  /*color*/
  .specification-color {
    border-bottom: 1px solid #ccc;
  }
  .size-box-tit {
    font-size: 100%;
    font-weight: 400;
  }
  .size-box-wrap {
    overflow: hidden;
    padding-top: 1em;
    padding-bottom: .7em;
  }
  .size-box {
    float: left;
    margin-right: .5em;
    margin-bottom: .5em;
    padding: .5em .8em;
    border: .1em solid #b3b3b3;
    border-radius: .1em;
    line-height: 1.5;
  }
  /*size*/
  .specification-size {
    border-bottom: 1px solid #ccc;
  }
  /*num*/
  .specification-num span {
    float: left;
    width: 2em;
    height: 2em;
    line-height: 2em;
    border-radius: .1em;
    text-align: center;
  }
  .num {
    border: 1px solid #666;
    color: #4d4d4d;
    margin: 0 .75em;
  }
  .shopAdd {
    background: #f5f5f5 url(./../../static/images/minus.jpg) no-repeat center center;
    background-size: contain;
    border: 1px solid #f5f5f5;
  }
  .shopSub {
    background: #4d4d4d url(./../../static/images/plus.jpg) no-repeat center center;
    background-size: contain;
    border: 1px solid #4d4d4d;
  }

  /*商品详情评论咨询*/
  .tab {
    text-align: center;
    border-bottom: 1px solid #666;
  }
  .tab ul {
    overflow: hidden;
    margin: 1.5em auto;
    zoom: 1;
  }
  .tab ul li {
    float: left;
    width: 33%;
    font-size: 1.2em;
    color: #4c4c4c;
  }
  /*商品详情*/
 .show-img {
   width: 100%;
 }
  img {
    width: 100%;
  }
  /*商品评论*/
  .comment {
    padding: .5em 2em;
    color: #999;
    border-bottom: 1px dashed #999;
  }
  .comment p {
    margin-bottom: .5rem;
    overflow: hidden;
    font-size: 1.3em;
  }
  .comment p span {
    float: left;
  }
  /*查看更多*/
  .more {
    text-align: center;
    padding: 2em;
  }
  .more span {
    color: #999;
    font-size: 1.3em;
    border: 1px solid #b5b8ba;
    padding: .4em 4em;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }
  /*咨询*/
  .consult-imp {
    background: #e3e3e3;
    margin-bottom: 1em;
    padding: .5em 2em;
  }
  .consult-imp h3 {
    color: #666;
    font-size: 1.3em;
    line-height: 2em;
    font-weight: 400;
  }
  .consult-imp .cont {
    font-size: 1.3em;
  }
  .consult-imp textarea {
    width: 100%;
    height: 6em;
    font-size: inherit;
    color: #999;
    box-sizing: border-box;
  }
  .consult-imp .sub {
    text-align: center;
    padding: 1em 0;
  }
  .consult-imp .sub span {
    display: block;
    width: 100%;
    background: #d5200e;
    color: #fff;
    font-size: 1.3em;
    padding: .4em 0;
  }
  .issue {
    padding: .5em 2em;
    font-size: 1.3em;
    color: #e8270c;
  }
  .user {
    padding: 0 2em;
    overflow: hidden;
    font-size: 1.3em;
    color: #999;
  }
  .user .user-name {
    float: left;
  }
  .user .date {
    float: right;
  }
  .answer {
    padding: .5em 2em;
    border-bottom: 1px dashed #999;
    font-size: 1.3em;
    color: #666;
  }
  .consult {
    border-bottom: 1px dashed #999;
  }






  .footer {
    max-width: 640px;
    width: 100%;
    height: 3rem;
    border-top: 1px solid #999;
    overflow: hidden;
    background: #fff;
    z-index: 999;
    line-height: 0;
  }
  .footer a {
    position: relative;
    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    color: #999;
  }
  .footer .shopCar  {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    width: 3rem;
    height: 2.4rem;
    background: url(http://i7.m.vancl.com/oms/2016_12_14_17_59_33_7590_60x800.jpg) no-repeat 0 -12rem;
    background-size: 3rem 40rem;
    overflow: hidden;
  }
  .footer .addCar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    overflow: hidden;
    width: 100%;
    height: 100%;
    line-height: 3rem;
    color: #fff;
    background-color: #b81c22;
    font-size: 1.2rem;
  }



</style>
