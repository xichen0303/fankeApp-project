<template>
  <div class="hello">
    <Home_search/>
    <Home_slideshow/>
    <middleNav/>
    <Everyday/>
    <Content_main :list='msg1' :tit_img_src='tit_src1'/>
    <Content_main :list='msg2' :tit_img_src='tit_src2'/>
    <Content_main :list='msg1' :tit_img_src='tit_src3'/>
    <Content_main :list='msg2' :tit_img_src='tit_src4'/>
    <Content_main :list='msg1' :tit_img_src='tit_src5'/>
    <Content_main :list='msg2' :tit_img_src='tit_src6'/>
    <Content_main :list='msg1' :tit_img_src='tit_src7'/>
    <Content_main :list='msg2' :tit_img_src='tit_src8'/>
    <Content_main :list='msg1' :tit_img_src='tit_src9'/>
    <Content_main :list='msg2' :tit_img_src='tit_src10'/>
    <Content_main :list='msg1' :tit_img_src='tit_src11'/>
    <Content_main :list='msg2' :tit_img_src='tit_src12'/>
    <Content_main :list='msg1' :tit_img_src='tit_src13'/>
    <Content_main :list='msg2' :tit_img_src='tit_src14'/>
    

    <div class="foot">
      <div class="nomore">没有更多内容了...</div>
      <div class="more">
        <router-link to="/product" href="">
          <img src="https://mi5.vanclimg.com/content/html5v3/images/see-all.jpg" alt="查看更多">
        </router-link>
        <a href="javascript:;" @click="backTop()">
          <img src="https://mi5.vanclimg.com/content/html5v3/images/ret-top.jpg" alt="返回顶部">
        </a>
      </div>
      <div class="login">
        <div class="login_btn">
          <a href="">登录</a>
          <a href="">注册</a>
        </div>
      </div>
      <div class="footer">
        <ul class="clear">
          <li>
            <a href="">
              <img src="https://mi5.vanclimg.com/Content/H5/img/help.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://mi5.vanclimg.com/Content/H5/img/d2.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://mi5.vanclimg.com/Content/H5/img/weixin.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://mi5.vanclimg.com/Content/H5/img/pcsite.jpg" alt="">
            </a>
          </li>
        </ul>
        <div class="copyright">
          <h3>
            京ICP证100557号
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home_search from './Home/Home_search'
import Home_slideshow from './Home/Home_slideshow'
import middleNav from './Home/middleNav'
import Everyday from './Home/Everyday'
import Content_main from './Home/Content_main'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Home_search,
    Home_slideshow,
    middleNav,
    Everyday,
    Content_main
  },
  data () {
    return {
      msg1:[],
      msg2:[],
      tit_src1:"http://i1.m.vancl.com/oms/2018_3_2_16_19_31_1730_750x396.jpg",
      tit_src2:"http://i2.m.vancl.com/oms/2018_3_12_17_31_13_2727_750x396.jpg",
      tit_src3:"http://i6.m.vancl.com/oms/2018_3_13_16_22_24_6535_750x396.jpg",
      tit_src4:"http://i5.m.vancl.com/oms/2018_3_12_17_11_12_5842_750x396.jpg",
      tit_src5:"http://i5.m.vancl.com/oms/2018_3_2_16_19_30_5602_750x396.jpg",
      tit_src6:"http://i7.m.vancl.com/oms/2018_3_2_16_24_47_7236_750x396.jpg",
      tit_src7:"http://i7.m.vancl.com/oms/2018_3_2_16_19_31_7237_750x396.jpg",
      tit_src8:"http://i4.m.vancl.com/oms/2018_3_2_16_19_30_4555_750x396.jpg",
      tit_src9:"http://i6.m.vancl.com/oms/2018_3_2_16_19_30_6540_750x396.jpg",
      tit_src10:"http://mimages.vancl.com/oms/2018_3_2_16_19_31_302_750x396.jpg",
      tit_src11:"http://i1.m.vancl.com/oms/2018_3_2_16_19_31_1349_750x396.jpg",
      tit_src12:"http://i5.m.vancl.com/oms/2018_3_2_16_19_30_5078_750x396.jpg",
      tit_src13:"http://i2.m.vancl.com/oms/2018_3_2_16_19_29_2396_750x396.jpg",
      tit_src14:"http://i8.m.vancl.com/oms/2018_3_2_16_19_29_8285_750x396.jpg",
    }
  },
  mounted() {
      axios.get("http://localhost:3000/home_msg1")
      .then((res)=>{
        this.msg1 = res.data[1].arr_img;
      }),
      axios.get("http://localhost:3000/home_msg2")
      .then((res)=>{
        this.msg2 = res.data[1].arr_img;
      })
  },
  methods: {
      backTop () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
  }
}
</script>


<style scoped>
body,div,a,span,ul,h3{margin: 0;padding: 0;}
img{border: 0;width: 100%;}
a{text-decoration: none;}
html{font-size: 20px;}
ul,li{list-style: none;}

.hello{
  background: #fafafa;
}
.nomore{
  display: block;
  margin: 0 auto;
  width: fit-content;
  color: #ccc;
}
.more{
  height: auto;
  width: 100%;
  margin-top: 2px;
  overflow: hidden;
  margin-bottom: 3.2rem;
  display: flex;
  justify-content: space-between;
}
.more a{
  display: block;
  line-height: 0;
  float: left;
  margin: 0 1px 0 -1px;
  width: 50%;
}
.more a img{
  width: 100%;
}
.login{
  text-align: center;
  padding: 3.5rem 0;
}
.login_btn {
  display: inline-block;
}
.login_btn a{
  display: inline-block;
  font-size: 1.2rem;
  color: #4c4c4c;
  line-height: 1em;
  margin-right: 6px;
  background: #fff;
  padding: .5em 2.5em;
}
.footer{
  padding-bottom: 10em;
  text-align: center;
}
.footer ul{
  display: inline-block;
  border-bottom: 1px solid #4c4d4d;
  border-top: 1px solid #4d4d4d;
  padding: 1.2em 0;
}
.clear:before, .clear:after{
  content: '';
  display: table;
  clear: both;
}
.footer ul li{
  line-height: 0;
  float: left;
}
.footer ul li:nth-child(2) {
    margin-left: 2.8em;
    margin-right: 1.4em;
}
.footer ul li:nth-child(3) {
    margin-left: 1.4em;
    margin-right: 2.8em;
}
.footer ul a {
  display: block;
  width: 3.5em;
}
.footer .copyright{
  font-size: .9em;
  line-height: 2em;
  color: #4c4c4c;
}
h3{
  padding: 1rem;
  line-height: 1;
  font-size: 1.3rem;
  font-weight: 400;
}

</style>
