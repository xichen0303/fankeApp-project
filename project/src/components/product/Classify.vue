<template>
  <div class="page_wrap">
    <div class="main_con">
    	<div class="left_list">
    		<ul>
    			<li @click="getMsg($event,cell1)" class="product_li" goryid="10366" :class="{'product_li_active':cell1 === selected}">推荐</li>
    			<li @click="getMsg($event,cell2)" class="product_li" goryid="10146" :class="{'product_li_active':cell2 === selected}">男装</li>
    			<li @click="getMsg($event,cell3)" class="product_li" goryid="10145" :class="{'product_li_active':cell3 === selected}">女装</li>
    			<li @click="getMsg($event,cell4)" class="product_li" goryid="10421" :class="{'product_li_active':cell4 === selected}">男鞋</li>
    			<li @click="getMsg($event,cell5)" class="product_li" goryid="10426" :class="{'product_li_active':cell5 === selected}">女鞋</li>
    			<li @click="getMsg($event,cell6)" class="product_li" goryid="10151" :class="{'product_li_active':cell6 === selected}">袜品</li>
    			<li @click="getMsg($event,cell7)" class="product_li" goryid="10154" :class="{'product_li_active':cell7 === selected}">家居</li>
    			<li @click="getMsg($event,cell8)" class="product_li" goryid="10378" :class="{'product_li_active':cell8 === selected}">童装</li>
    			<li @click="getMsg($event,cell9)" class="product_li" goryid="10149" :class="{'product_li_active':cell9 === selected}">内衣</li>
    		</ul>
    	</div>
    	<div class="right_list">
    		<ul>
    			<li v-for="item in list">
    				<img :src="item.Logo" alt="">
    				<span class="">{{item.KeyWord}}</span>
    			</li>
    			
    		</ul>
    	</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Classify',
  data () {
    return {
      selected: "1",
      cell1: "1",
      cell2: "2",
      cell3: "3",
      cell4: "4",
      cell5: "5",
      cell6: "6",
      cell7: "7",
      cell8: "8",
      cell9: "9",
      list: []
    }
  },
  mounted() {
  		axios.get("/Product/AjaxSonCateList?cateId=&np=10366&cateref=")
		.then((res)=>{
  			this.list = res.data
			
  		})
  },
  methods: {
  		getMsg: function(a,index) {

        this.selected = index

  			var num = a.target.getAttribute("goryid");
  			// 点击按钮重新获取ajax
  			axios.get("/Product/AjaxSonCateList?cateId=&np="+ num +"&cateref=")
			.then((res)=>{
		  			this.list = res.data
		  	})
  		}
  }
}

</script>
<style scoped>
body,div,a,span,ul,li,h1,h2,h3,h4,h5,h6{margin: 0;padding: 0;}
img{border: 0;width: 100%;display: block;}
html{font-size: 20px;}
ul,li,ol{list-style: none;}
/*========================================*/
.page_wrap{
	position: relative;
	top: 0;
	margin-bottom: 4.25rem;
	max-width: 640px;
	width: 100%;
	height: 100%;
	background-color: #fff;
	line-height: 1.5;
}
.main_con{
	background-color: #e5e5e5;
}
.main_con:before,.main_con:after{
	content: '';
	display: table;
	clear: both;
}
.left_list{
	float: left;
	width: 25%;
	height: 100%;
}
.left_list>ul{
	width: 100%;
	height: 100%;
	text-align: center;
}
.left_list>ul .product_li{
	display: block;
	height: 3rem;
	line-height: 3rem;
	border-bottom: 1px solid #fff;
	cursor: pointer;
}
.product_li_active{
	background-color: #fff;
	color: #cc0000;
}
/* ======================================= */
.right_list{
	min-height: 600px;
	display: block;
	width: 75%;
	float: right;
	background: #fff;
}
.right_list>ul>li{
	display: inline-block;
	width: 33%;
	float: left;
	text-align: center;
	overflow: hidden;
	cursor: pointer;
}
.right_list>ul>li img{
	margin: 0.5rem auto;
	width: 75%;
}
.right_list>ul>li span{
	display: block;
	color: #999;
}

</style>
