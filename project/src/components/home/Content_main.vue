<template>
  <div class="con">
	  	<h3>
	  		<i class="iocn_img"></i>
	  		<span>{{title}}</span>
	  	</h3>
	  	<div class="main_img">
	  		<a href="">
	  			<img :src=tit_img_src alt="">
	  		</a>
	  	</div>
	  	<div class="main_con">
	  		<div class="main_co">
	  			<div v-for="item in list" class="swiper_slide">
	  				<a href="">
	  					<img :src="item.src" alt="">
	  					<p class="img_tit">{{item.imgTitle}}</p>
	  					<div class="product_price">
	  						<p>
	  							定金:￥<span style="margin-right: 1rem;">{{item.earnest}}</span>尾款:￥<span>{{item.final}}</span>
	  						</p>
	  						<p style="margin: 0.5rem 0;color: #4c4d4d;font-weight: bold;">
	  							充值相当于：
	  							<i class="vancl">￥{{item.price}}</i>
	  						</p>
	  						<del style="display: block;">
	  							原价:￥{{item.originCost}}
	  						</del>
	  					</div>
	  				</a>
	  			</div>

	  			<div class="swiper_slide show_more">
	  				<a href="">
	  					<span class="more_text">查看更多</span>
	  					<span>View More</span>
	  					<span class="more_arrow">></span>
	  				</a>
	  			</div>
	  		</div>
	  	</div>
  </div>
</template>

<script>

export default {
  name: 'Content_main',
  props:{
  		"list":{
  			type: Array,
  			required: true
  		},
  		"tit_img_src":{
  			type: String,
  			required: true
  		}
  },
  data () {
    return {
    	title:"预售频道"
    	
    }
  }
}

</script>
<style scoped>
body,div,a,span{margin: 0;padding: 0;}
img{border: 0;width: 100%;}
a{text-decoration: none;}
html{font-size: 20px;}

h3{
	margin: 0;
	padding: 1rem;
	line-height: 1;
	font-size: 1.3rem;
	text-align: left;
}
.iocn_img{
	display: inline-block;
	width: 1.2rem;
	height: 1.3rem;
	margin-right: 5px;
	vertical-align: middle;
	background: url(http://i8.m.vancl.com/oms/2018_1_10_14_37_44_8077_26x26.jpg) #fff no-repeat top center;
	background-size: 1.25rem;
}
.main_con{
	padding: 1rem;
	overflow-x: auto;
}
.main_con::-webkit-scrollbar { display: none }
.main_co{
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	transform-style: preserve-3d;
	transition-property: transform;
	box-sizing: content-box;
}
.swiper_slide{
	height: 100%;
	position: relative;
	text-align: center;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 131.308px;
	margin-right: 6px;
	flex-shrink: 0;
}
.swiper_slide a{
	overflow: hidden;
	color: #ccc;
	box-sizing: border-box;
	border-radius: 4px;
	background-size: #fff;
}
.img_tit{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	text-align: left;
	margin: 0.5rem 0;
	font-size: 1.2rem;
	color: #565656;
}
.product_price{
	display: table;
	margin: 0.5rem 0;
	width: 100%;
	line-height: 1;
	text-align: left;
}
.vancl{
	font-style: normal;
	color: #b81c22;
	font-weight: bold;
}
.product_price del{
	display: block;
	vertical-align: middle;
}

.show_more{
	border: 1px solid #cdba8d;
	border-radius: 4px;
	box-sizing: border-box;
	width: 131.308px;
	margin-right: 6px;
	height: 257px;
	visibility: visible;
}
.show_more>a{
	color: #cdba8d;
}
.show_more>a>span{
	display: block;
	line-height: 1.5;
}
.show_more>a>.more_text{
	font-size: 1.2rem;
	font-weight: bold;
}
.show_more>a>.more_arrow{
	width: 1.2rem;
	background-color: #cdba8d;
	color: #fff;
	border-radius: 50%;
	vertical-align: middle;
	line-height: 1.2rem;
	margin: auto;
}


</style>
