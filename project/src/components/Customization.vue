<template>
  <div class="hello">
  	 <Home_slideshow />
  	 <div class="top_tit">
  	 	<div>
  	 		<a href="">
  	 			<img src="http://i2.m.vancl.com/q80/wap/2018_2_26_10_30_14_5821.jpg" alt="">
  	 		</a>
  	 	</div>
  	 <!-- ======新品推荐====== -->
  	 	<div>
  	 		<a href="">
  	 			<img src="http://i7.m.vancl.com/q80/wap/2017_9_20_11_28_18_888.jpg" alt="">
  	 		</a>
  	 	</div>
  	 </div>
  <!-- ============== -->
  	 <imgslide :list="imgslidesrc1"/>
  	 <!--  ======风格特辑======  -->
  	 <div>
  	 	<a href="">
  	 		<img src="http://i2.m.vancl.com/q80/wap/2017_9_20_11_28_31_547.jpg" alt="">
  	 	</a>
  	 </div>
  	 <div class="topic">
  	 	<a href="">
  	 		<img src="http://i1.m.vancl.com/q80/wap/2017_9_18_9_1_17_3827.jpg" alt="">
  	 	</a>
  	 </div>
  	 <imgslide :list="imgslidesrc2"/>
  	 <div class="topic">
  	 	<a href="">
  	 		<img src="http://i5.m.vancl.com/q80/wap/2017_9_18_9_1_50_1705.jpg" alt="">
  	 	</a>
  	 </div>
  	 <imgslide :list="imgslidesrc3"/>
  	 <div class="topic">
  	 	<a href="">
  	 		<img src="http://i7.m.vancl.com/q80/wap/2017_9_18_9_2_18_3443.jpg" alt="">
  	 	</a>
  	 </div>
  	 <imgslide :list="imgslidesrc4"/>
  	 <div class="topic">
  	 	<a href="">
  	 		<img src="http://i7.m.vancl.com/q80/wap/2017_9_18_9_2_36_4318.jpg" alt="">
  	 	</a>
  	 </div>
  	 <imgslide :list="imgslidesrc5"/>
 <!--  =================================================  -->
 	<div class="topic">
	  	<a href="">
	  	 	<img src="http://i9.m.vancl.com/q80/wap/2017_9_20_11_28_41_3414.jpg" alt="">
	  	</a>
	</div>
	 <imgsix :piclist="imgsix1"/>
	 <div class="topic">
	  	<a href="">
	  	 	<img src="http://i3.m.vancl.com/q80/wap/2017_9_20_11_29_0_6891.jpg" alt="">
	  	</a>
	</div>
	 <imgsix :piclist="imgsix2"/>
	 <div class="topic">
	  	<a href="">
	  	 	<img src="http://i3.m.vancl.com/q80/wap/2017_9_20_11_29_10_3628.jpg" alt="">
	  	</a>
	</div>
	 <imgsix :piclist="imgsix3"/>
	 <div class="topic">
	  	<a href="">
	  	 	<img src="http://i8.m.vancl.com/q80/wap/2017_9_20_11_29_25_1816.jpg" alt="">
	  	</a>
	</div>
	 <imgsix :piclist="imgsix4"/>
	 <div class="topic">
	  	<a href="">
	  	 	<img src="http://i9.m.vancl.com/q80/wap/2017_11_9_10_53_9_5655.jpg" alt="">
	  	</a>
	</div>
	 <imgsix :piclist="imgsix5"/>
	 <div class="topic">
	  	<a href="">
	  	 	<img src="http://i4.m.vancl.com/q80/wap/2017_9_26_16_23_16_4389.jpg" alt="">
	  	</a>
	</div>
	 <imgsix :piclist="imgsix6"/>

  <div class="gotorder">
    <a class="track" href="javascript:;">立即预约</a>
    <hr>
    <a class="track" href="javascript:;">lookbook</a>
  </div>
  </div>
</template>

<script>
import Home_slideshow from './Home/Home_slideshow'
import imgslide from './Customization/imgslide'
import imgsix from './Customization/imgsix'
import axios from 'axios'

export default {
  name: 'Customization',
  components: {
    Home_slideshow,
    imgslide,
    imgsix
  },
  data () {
    return {
      imgslidesrc1:[],
      imgslidesrc2:[],
      imgslidesrc3:[],
      imgslidesrc4:[],
      imgslidesrc5:[],

      imgsix1:[],
      imgsix2:[],
      imgsix3:[],
      imgsix4:[],
      imgsix5:[],
      imgsix6:[]
    }
  },
  mounted() {
      axios.get("http://localhost:3000/customization_imgslide1")
      .then((res)=>{
        this.imgslidesrc1 = res.data;
      }),
      axios.get("http://localhost:3000/customization_imgslide2")
      .then((res)=>{
        this.imgslidesrc2 = res.data;
      }),
      axios.get("http://localhost:3000/customization_imgslide3")
      .then((res)=>{
        this.imgslidesrc3 = res.data;
      }),
      axios.get("http://localhost:3000/customization_imgslide4")
      .then((res)=>{
        this.imgslidesrc4 = res.data;
      }),
      axios.get("http://localhost:3000/customization_imgslide5")
      .then((res)=>{
        this.imgslidesrc5 = res.data;
      }),

// ========================================
      axios.get("http://localhost:3000/customization_imgsix1")
      .then((res)=>{
        this.imgsix1 = res.data;
      }),
      axios.get("http://localhost:3000/customization_imgsix2")
      .then((res)=>{
        this.imgsix2 = res.data;
      }),
      axios.get("http://localhost:3000/customization_imgsix3")
      .then((res)=>{
        this.imgsix3 = res.data;
      }),
      axios.get("http://localhost:3000/customization_imgsix4")
      .then((res)=>{
        this.imgsix4 = res.data;
      }),
      axios.get("http://localhost:3000/customization_imgsix5")
      .then((res)=>{
        this.imgsix5 = res.data;
      }),
      axios.get("http://localhost:3000/customization_imgsix6")
      .then((res)=>{
        this.imgsix6 = res.data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,div,a,span,ul,li,h1,h2,h3,h4,h5,h6{margin: 0;padding: 0;}
img{border: 0;width: 100%;display: block;}
html{font-size: 20px;}
a{text-decoration: none;}
ul,li,ol{list-style: none;}
/* ===================================== */


.top_tit{
	width: 100%;
	overflow: hidden;
	font-size: 1.5em;
	color: #4c4c4c;
}
.top_tit>div{
	padding-top: 2px;
	text-align: center;
}
.top_tit>div a{
	display: block;
}
.topic{
	padding-top: 2px;
}

/* ================定位============= */
.gotorder{
  background-color: #ba323b;
  width: 5rem;
  border-radius: 2rem;
  color: #fff;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 1rem;
  position: fixed;
  bottom: 5.5rem;
  right: 0.5rem;
  border: 1.5px solid #fff;
  z-index: 999;
}
.gotorder a{
  color: #fff;
  margin: 0;
  line-height: 2.8rem;
  display: block;
}
.gotorder hr{
  border: none;
  border-bottom: 1px solid;
  margin:0;
  padding: 0;
}
</style>
