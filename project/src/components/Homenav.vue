<template>
  <div class="nav">
    <router-link to="/">
    	<span class="nav-home" @click="changePage(cell1)" :class="{'nav-home-active':cell1 === selected}"></span>
    </router-link>
    <router-link to="/product">
    	<span class="nav-product" @click="changePage(cell2)" :class="{'nav-product-active':cell2 === selected}"></span>
    </router-link>
    <router-link to="/Customization">
    	<span class="nav-Customization" @click="changePage(cell3)" :class="{'nav-Customization-active':cell3 === selected}"></span>
    </router-link>
    <router-link to="/">
    	<span class="nav-goodscart" @click="changePage(cell4)" :class="{'nav-goodscart-active':cell4 === selected}"></span>
    	<i class="goods-num">0</i>
    </router-link>
    <router-link to="/">
    	<span class="nav-user" @click="changePage(cell5)" :class="{'nav-user-active':cell5 === selected}"></span>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Homenav',
  data () {
    return {
      selected: '1',
      cell1: '1',
      cell2: '2',
      cell3: '3',
      cell4: '4',
      cell5: '5'
    }
  },
  mounted() {

  },
  methods: {
  		changePage: function(index) {
  			this.selected = index
  		}
  }
}

</script>
<style scoped>
body,div,a,span{margin: 0;padding: 0;}
img{border: 0;}
html{font-size: 26.67vw;}

.nav{
	position: fixed;
	bottom: 0;
	max-width: 640px;
	width: 100%;
	height: 4.25rem;
	border-top: 1px solid #999;
	overflow: hidden;
	background: #fff;
	z-index: 999;
}
.nav a{
	position: relative;
	width: 20%;
	height: 100%;
	float: left;
	color: #999;
	text-align: center;
	display: inline-block;
	line-height: 0;
}
.nav a span{
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%,-50%);
	width: 3rem;
	height: 4rem;
	background-image: url(../../static/img/navBgimgNew.png);
	background-repeat: no-repeat;
	background-size: 3rem 40rem;
	overflow: hidden;
}
.goods-num{
	font-size: 0.8rem;
	position: absolute;
	top: 0.1rem;
	right: 1.6rem;
	padding: 0 0.2rem;
	height: 1rem;
	display: inline-block;
	line-height: 1.1rem;
	color: #fff;
	border-radius: 1.1rem;
	background: none;
	background-color: #b81c22;
	cursor: default;
	text-align: center;

	font-style: normal;
}
.nav-home{
	background-position: 0rem 0rem;
}
.nav-home-active{
	background-position: 0rem -20rem;
}
.nav-product{
	background-position: 0rem -4rem;
}
.nav-product-active{
	background-position: 0rem -24rem;
}
.nav-Customization{
	background-position: 0rem -8rem;
}
.nav-Customization-active{
	background-position: 0rem -28rem;
}
.nav-goodscart{
	background-position: 0rem -12rem;
}
.nav-goodscart-active{
	background-position: 0rem -32rem;
}
.nav-user{
	background-position: 0rem -16rem;
}
.nav-user-active{
	background-position: 0rem -36rem;
}
</style>
