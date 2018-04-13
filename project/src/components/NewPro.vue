<!--王迎港-----------新品专区页面-->
<template>
  <div class="newPro">
    <Header></Header>
    <div class="main">
        <div class="main-top">
          <img src="./../../static/images/2018_1_15_15_31_15_7761.jpg" alt="">
        </div>
        <div class="main-bootom">
          <img src="./../../static/images/2018_1_15_15_31_37_2415.jpg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
  import Header from "./Header"
  export default {
    name: 'NewProduct',
    components: {
      Header
    },
    data () {
      return {
        title: "新品专区"
      }
    },
    created() {
      this.$store.dispatch("pageNameA",this.title);
      console.log(this.$store.state.pageName);
    },
  }
</script>


<style scoped>
  .newPro {
    display: flex;
    flex-direction: column;
  }
  .main {
    flex: 1;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
</style>
