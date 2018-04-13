<template>
  <div class="list_page">
    <div class="topTitle"> 
    	<span id="topBack" class="topBack">
    		
    	</span>
    	<span class="curTitle">针织衫</span>
    </div>
    <div class="others-content">

      <ul class="list-tab clear">
        <li class="new" @click="shopprice(onclick1)" >
          <a :class="{'active':onclick1===bian}" href="javascript:;" >新品</a>
        </li>
        <li class="sale"  @click="number(onclick2)">
          <a :class="{'active':onclick2===bian}" href="javascript:;">销量</a>

        </li>
        <li class="comm" @click="evaluate(onclick3)">
          <a :class="{'active':onclick3===bian}" href="javascript:;">评价</a>

        </li>
        <li class="price"   @click="shoppr(onclick4)">
          <a :class="{'active':onclick4===bian}" href="javascript:;">价格&nbsp;</a>
            <img class="price-bg" src="../../static/imgs/up-down.jpg">
        </li>
      </ul>
      <dl v-for="item in list"  class="unit clear">
      <dt class="left">
        <a class="pic lh0" href="#">
          <img class="lazyLoad" :src="item.shop.img1">
        </a>
        <a class="text" href="#">{{item.shop.name1}}</a>
        <h3 class="sh-price">{{item.shop.price1}}</h3>
      </dt>
      <dt class="right">
        <a class="pic lh0" href="#">
          <img class="lazyLoad" :src="item.shop.img2">
        </a>
        <a class="text" href="#">{{item.shop.name2}}</a>
        <h3 class="sh-price">{{item.shop.price2}}</h3>
      </dt>
    </dl>
    <div class="huan">
    	<div class="huan_page">
    		<a class="prev" href="javascript:;">上一页
						<img src="../../static/imgs/uppage.png">
					</a>
					<a href="javascript:;" class="active">1</a>
					<a href="javascript:;">2</a>
					<a href="javascript:;">3</a>
					<a class="next" href="javascript:;" @click="nextpage()">下一页
						<img src="../../static/imgs/nextpage.png">
					</a>
    	</div>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'list_page',
    data () {
    return {
      message: '商品列表页',
      list: [],
      bian:"1",
      onclick1:"1",
      onclick2:"2",
      onclick3:"3",
      onclick4:"4"
    }
  },
  mounted() {
  		
	if(this.list.length > 0){
		return;
	}
		axios.get("http://localhost:3000/films")
		.then((res)=>{
			console.log(res);
			this.list = res.data.data.shop;
	})
},
methods:{
	shopprice:function(index){
		this.bian = index;
	
		axios.get("http://localhost:3000/films")
		.then((res)=>{
			console.log(res);
			this.list = res.data.data.shop;
	})
	},
	number:function(index){
		this.bian = index;
		axios.get("http://localhost:3000/films")
		.then((res)=>{
			console.log(res);
			this.list = res.data.data.number;
		
	})
	},
	evaluate:function(index){
		this.bian = index;
		
		axios.get("http://localhost:3000/films")
		.then((res)=>{
			console.log(res);
			this.list = res.data.data.evaluate;
	})
	},
	shoppr:function(index){
		this.bian = index;
		
		axios.get("http://localhost:3000/films")
		.then((res)=>{
			console.log(res);
			this.list = res.data.data.shoppr;
	})
	},
	nextpage:function(){
	
		axios.get("http://localhost:3000/films")
		.then((res)=>{
			console.log(res);
			this.list = res.data.data.number;
	})
	}
}
}
</script>
<style src="../../static//css/public.css"></style>
<style src="../../static/css/list_page.css"></style>
