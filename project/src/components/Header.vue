<!--王迎港-----------头部组件-->
<template>
  <div class="header">
    <span class="retreat" @click="back()"></span>
    <span class="title">{{$store.state.pageName}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        title: '头部'
      }
    },
    created() {
    //   this.$store.dispatch("pageNameA",this.title);
    //   console.log(this.$store.state.pageName);
    },
    methods: {
      back() {
        history.back();
      }
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    max-width: 640px;
    width: 100%;
    height: 4rem;
    overflow: hidden;
    background: #b81c22;
    text-align: center;
    line-height: 4rem;
    font-size: 1.5rem;
    color: #fff;
  }
  .title {
    display: inline-block;
    margin: 0 auto;
    font-size: 1.5rem;
    color: #fff;
  }
  .retreat {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%) rotate(45deg);
    -webkit-transform: translateY(-50%) rotate(45deg);
    width: 1.4rem;
    height: 1.4rem;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    cursor: pointer;
  }
</style>
