<!--王迎港-----------注册页面-->
<template>
  <div class="Registered">
    <Header></Header>
    <div class="main">
      <div class="input-wrap">
        <input type="text" placeholder="请输入图片验证码" class="input left " style="width: 14em">
        <img src="./../../static/images/PhoneLoginVerityCode.jpg" alt="" class="right">
      </div>
      <div class="input-wrap">
        <input type="text" placeholder="请输入您的手机号" class="input left" style="width: 14em">
        <router-link to="#" class="dynamic" style="margin: 0;">获取验证码</router-link>
      </div>
      <div class="input-wrap">
        <input type="text" placeholder="请输入手机验证码" class="input">
      </div>
      <div class="input-wrap">
        <input type="text" placeholder="密码:6-16位字母，数字，特殊字符" class="input">
        <span></span>
      </div>
      <p>
        注册账号即表示同意遵守
        <router-link to="http://m.vancl.com/channel/index/441">《VANCL凡客服务条款》</router-link>
      </p>
      <div class="affirm">点击注册</div>
    </div>

  </div>
</template>

<script>
  import Header from "./Header"
  export default {
    name: 'Registered',
    components: {
      Header
    },
    data () {
      return {
        title: "注册"
      }
    },
    created() {
      this.$store.dispatch("pageNameA",this.title);
      console.log(this.$store.state.pageName);
    },
  }
</script>


<style scoped>
  .Registered {
    display: flex;
    flex-direction: column;
  }
  .main {
    padding: 2.5em 2em;
    overflow: hidden;
    background: #fff;
  }
  .input-wrap {
    padding-bottom: 1em;
    overflow: hidden;
    zoom: 1;
  }
  .input {
    border: 0;
    font-size: 1.2em;
    display: inline-block;
    background: #f5f5f5;
    color: #b5b5b5;
    padding: .8em;
    width: 100%;
    box-sizing: border-box;
  }
  p {
    color: #b3b3b3;
    text-align: center;
    margin-top: 3em;
    margin-bottom: 1.5em;
  }
  p a {
    color: #4c4c4c;
  }
</style>
