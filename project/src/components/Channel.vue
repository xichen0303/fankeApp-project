<template>
	<div class="wrap">
		<div class="topic" v-for="item in list">
			<a href="">
				<img :src="item.src" alt="">
			</a>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Channel',

  data () {
    return {
      list: []
    }
  },
  mounted() {
      axios.get("http://localhost:3000/channel_img")
      .then((res)=>{
        this.list = res.data;
      })
  }
}
</script>

<style scoped="scoped">
a{text-decoration: none;display: block;}
img{width: 100%;height:auto;}
.wrap{
  width: 100%;
  overflow: hidden;
  font-size: 1.5em;
  margin-bottom: 60px;
}
.wrap:before,.wrap:after{
  content: "";
  display: table;
  clear: both;
}
.topic{
  padding-top: 2px;
  text-align: center;
}
</style>