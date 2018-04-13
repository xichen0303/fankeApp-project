<template>
  <div class="contain">
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div v-for="item in list" class="swiper-slide">
                <a href="">
                  <img :src="item.src" alt="">
                </a>
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home_slideshow',
  data () {
    return {
      list: []
    }
  },
  mounted() {
      axios.get("http://localhost:3000/home_swiper")
      .then((res)=>{
          this.list = res.data;
          this.$nextTick(function(){
              var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                autoplay: {
                  disableOnInteraction: false,
                },
                pagination: {
                  el: '.swiper-pagination',
                },
              })
          })
      })
  }/*,
  updated() {
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        auto: true,
        
      })
  }*/
}

</script>

<style scoped>
body,div,a,span{margin: 0;padding: 0;}
img{border: 0;width: 31.25rem;display: block;}
a{text-decoration: none;}
html{font-size: 20px;}

.contain{
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.wrap_img{
  width: 156.25rem;
 overflow: hidden;
 position: relative; 
}
.slide_img{
  float: left;
}
.img_index{
  position: relative;
  bottom: 25px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
}
.index_num{
  margin: 0 4px;
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: .2;
}
</style>
