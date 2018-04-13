<!--王迎港-----------轮播图组件-->
<template>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./../../static/images/6375698-1j201703291510573229.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/images/6375698-1j201703291510573229.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/images/6375698-1j201703291510573229.jpg" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Banner',
    data () {
      return {

      }
    },
    mounted() {
      var mySwiper = new Swiper ('.swiper-container', {
        autoplay: {
          disableOnInteraction: false,
        },
        loop: true,

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    beforeDestroy() {
      var mySwiper = new Swiper ('.swiper-container', {
        autoplay: {
          disableOnInteraction: false,
        },
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    updated() {
      var mySwiper = new Swiper ('.swiper-container', {
        autoplay: {
          disableOnInteraction: false,
        },
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>


<style scoped>
  .banner {
    box-sizing: border-box;
    padding: 0.5em 3.2em 0 3.2em;
    width: 100%;
  }
  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
</style>
