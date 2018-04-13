<template>
  <div class="everyday">
  	<div class="head">
      <div class="pull_left">
        <span class="head_title">
          <i class="clock_icon"></i>
          <span>每日秒杀</span>
        </span>
        <span class="gray">
          <i class="shuxian"></i>
          {{message}}点场
        </span>
      </div>
      <div class="pull_right">
        <span class="gray">距开始</span>
        <span class="time_h tim_cou">00</span>:<span class="time_m tim_cou">00</span>:<span class="time_s tim_cou">00</span>
      </div>
    </div>
    <div class="swiper">
      <div class="swiper_wrapper" style="transition-duration: 0ms;transform: translate3d(0px 0px 0px);">
        <div class="swiper_slide">
          <a href="">
            <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6375182/mid/6375182-1j201709190939204939.jpg" alt="">
            <div class="product_price">
              <span class="recharge_price">￥438</span>
              <del class="gray">￥798</del>
            </div>
          </a>
        </div>
        <div class="swiper_slide">
          <a href="">
            <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6377992/mid/6377992-1j201710181702562128.jpg" alt="">
            <div class="product_price">
              <span class="recharge_price">￥438</span>
              <del class="gray">￥798</del>
            </div>
          </a>
        </div>
        <div class="swiper_slide">
          <a href="">
            <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6375799/mid/6375799-1j201702281537535124.jpg" alt="">
            <div class="product_price">
              <span class="recharge_price">￥438</span>
              <del class="gray">￥798</del>
            </div>
          </a>
        </div>
        <div class="swiper_slide">
          <a href="">
            <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6378978/mid/6378978-1j201712201102291019.jpg" alt="">
            <div class="product_price">
              <span class="recharge_price">￥438</span>
              <del class="gray">￥798</del>
            </div>
          </a>
        </div>
        <div class="swiper_slide">
          <a href="">
            <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6376949/mid/6376949-1j201704281659082732.jpg" alt="">
            <div class="product_price">
              <span class="recharge_price">￥438</span>
              <del class="gray">￥798</del>
            </div>
          </a>
        </div>
        <div class="swiper_slide">
          <a href="">
            <img src="http://i.vanclimg.com/276/356/q80/product/6/3/7/6378000/mid/6378000-1j201710121408227197.jpg" alt="">
            <div class="product_price">
              <span class="recharge_price">￥438</span>
              <del class="gray">￥798</del>
            </div>
          </a>
        </div>
        <div class="more" style="visibility: visible;">
          <a href="">查看更多></a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'Everyday',
  data () {
    return {
      message: '10'
    }
  }
}

</script>
<style scoped>
body,div,a,span{margin: 0;padding: 0;}
img{border: 0;width: 100%;max-width: 100%;}
a{text-decoration: none;}
html{font-size: 20px;}

.head{
  padding: 1rem;
  line-height: 1;
}
.head:before,.head:after{
  content: "";
  display: table;
  clear: both;
}
.head .pull_left{
  float: left;
}
.head .pull_right{
  float: right;
}
.head_title{
  font-size: 1.3rem;
}
.clock_icon{
  display: inline-block;
  width: 1.2rem;
  height: 1.25rem;
  margin-right: 5px;
  vertical-align: middle;
  background: url(../../../static/img/wallet-clock-hot.png) no-repeat;
  background-size: 1.25rem;
  background-position: 0 -1.25rem;
}
.gray{
  color: #adadad;
}
.shuxian{
  padding: 1rem 0.3rem 0.2rem;
  margin-left: 0.6rem;
  border-left: 1px solid;
  font-size: 0;
}
.pull_right span{
  display: inline-block;
  vertical-align: middle;
}
.tim_cou{
  margin: 0 2px;
  width: 1.3rem;
  line-height: 1.3rem;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  background-color: #b81c22;
}

.swiper_wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  z-index: 1;
  display: flex;
  transform-style: preserve-3d;
  transition-property: transform;
  box-sizing: content-box;
}
.swiper_wrapper::-webkit-scrollbar {
display: none;/*隐藏滚轮*/
}
.swiper_slide{
  transform-style: preserve-3d;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  width: 96.973px;
  margin-right: 6px;
  text-align: center;
  cursor: pointer;
  display: flex;
  box-pack: center;
  justify-content: center;
  box-align: center;
  align-items: center;
}
.product_price{
  display: table;
  margin: 0.5rem 0;
  width: 100%;
  line-height: 1;
  text-align: left;
}
.product_price>span, .product_price>del{
  display: table-cell;
  vertical-align: middle;
}
.recharge_price{
  font-size: 1.2rem;
  margin: 0 0.5rem 0 0.2rem;
  color: #b81c22;
}


.more{
  text-align: center;
}
.more a{
  display: inline-block;
  padding: 0 10px;
  color: #cdba8d;
  writing-mode: vertical-lr;
  letter-spacing: 2px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  height: 125px;
  text-decoration: none;
}
</style>
