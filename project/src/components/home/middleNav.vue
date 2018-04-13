<template>
  <div class="nav">
  	<a class="nav_img" href="">
     <img src="http://i2.m.vancl.com/oms/2018_1_11_16_3_27_2908_678x60.jpg" alt=""> 
    </a>
    <div class="nav_list">
      <a href="">
        <img src="http://i1.m.vancl.com/oms/2018_1_10_15_53_37_1188_55x60.jpg" alt="">
        <span>新品</span>
      </a>
      <a href="">
        <img src="http://i6.m.vancl.com/oms/2018_1_10_15_53_37_6172_59x54.jpg" alt="">
        <span>特惠</span>
      </a>
      <a href="">
        <img src="http://i9.m.vancl.com/oms/2018_2_5_10_14_24_9022_59x59.jpg" alt="">
        <span>杂货</span>
      </a>
      <router-link to="/channel">
        <img src="http://i9.m.vancl.com/oms/2018_1_10_15_53_37_9203_59x56.jpg" alt="">
        <span>频道</span>
      </router-link>
      <router-link to="/Customization">
        <img src="http://i9.m.vancl.com/oms/2018_1_25_16_41_11_9078_59x59.jpg" alt="">
        <span>定制</span>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'middleNav',
  data () {
    return {
      msg: ''
    }
  }
}

</script>
<style scoped>
body,div,a,span{margin: 0;padding: 0;}
img{border: 0;width: 100%;}
a{text-decoration: none;}
html{font-size: 20px;}

.nav{
  padding: 1rem;
  background: #fff;
}
.nav_img{
  display: block;
  margin-bottom: 1rem;
}
.nav_list:before,.nav_list:after{
  content: "";
  display: table;
  clear: both;
}
.nav_list a{
  float: left;
  width: 20%;
  text-align: center;
  color: #666;
}
.nav_list a img{
  width: 2.8rem;
  height: 2.8rem;
}
.nav_list a> span{
  display: block;
  margin-top: 5px;
}
</style>
