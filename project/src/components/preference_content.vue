<template>
  <div class="preference_content">
    <div class="topTitle">
    	<span id="toBack" class="topBack">
    	</span> 
    	<span class="to">暖春季特惠</span>
    </div>
 <div class="smal_top">
    <div class="preference-top-img">
      <a href="javascript:;"><img src="http://i7.m.vancl.com/q80/wap/2018_3_12_17_0_48_5866.jpg"></a>
    </div>
        </div>
        <div v-for="item in list">
        <div class='sml-img'>
      <img :src="item.cover.top">
        </div>

        <div  class="topiclist-2 clearfix">
          <div class="topic">
            <a href="" class="track">
              <img  :src="item.cover.origin1">
            </a>
          </div>
          <div class="topic">
            <a href="" class="track">
              <img :src="item.cover.origin2">
            </a>
          </div>
          <div class="topic">
            <a href="" class="track">
              <img  :src="item.cover.origin3">
            </a>
          </div>
          <div class="topic">
            <a href="" class="track">
              <img :src="item.cover.origin4">
            </a>
          </div>
          <div class="topic">
            <a href="" class="track">
              <img  :src="item.cover.origin5">
            </a>
          </div>
          <div class="topic">
            <a href="" class="track">
              <img :src="item.cover.origin6">
            </a>
          </div>
          <div class="topic">
            <a href="" class="track">
              <img  :src="item.cover.origin7">
            </a>
          </div>
          <div class="topic">
            <a href="" class="track">
              <img :src="item.cover.origin8">
            </a>
          </div>
          </div>
        </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'preference_content',
  data () {
    return {
      message: '头部组件添加处',
      list: []
    }
  },
  mounted() {
		axios.get("http://localhost:3000/films")
		.then((res)=>{
			console.log(res);
			this.list = res.data.data.films;
	})
}
 }
</script>
<style src="../../static//css/public.css"></style>
<style src="../../static/css/preference.css"></style>
