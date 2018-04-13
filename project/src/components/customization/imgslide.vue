<template>
  <div class="swiper_wrapper">
    <div class="wrap">
      <div v-for="item in list">
        <a href="">
          <img v-lazy="item.src" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'imgslide',
  props:{
      "list":{
        type: Array,
        required: true
      }
  },
  data () {
    return {
      msg: ''
    }
  }
}

</script>
<style scoped>
body,div,a,span,ul,li,h1,h2,h3,h4,h5,h6{margin: 0;padding: 0;}
img{border: 0;width: 100%;height:auto;display: block;}
html{font-size: 20px;}
a{text-decoration: none;display: block;}
ul,li,ol{list-style: none;}
/* ================ */
.swiper_wrapper{
 margin: 0 auto;
 position: relative;
 overflow: hidden;
 z-index: 1;
 padding: 0;
}
.wrap{
  position: relative;
  width: 100%;
  z-index: 1;
  overflow-x: auto;
  display: flex;
  box-sizing: content-box;
}
.wrap::-webkit-scrollbar { display: none }
.wrap>div{
  width: 112.242px;
  margin-right: 2px;
  position: relative;
  height: 100%;
  flex-shrink: 0;
}

</style>
