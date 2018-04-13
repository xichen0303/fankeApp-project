<!--王迎港-----------找回密码页面-->
<template>
  <div class="findPwd">
    <Header></Header>
    <div class="main">
      <div>
        <input type="text" class="input left" placeholder="请输入验证码" style="width: 50%">
        <img src="./../../static/images/PhoneLoginVerityCode.jpg" alt="" class="right" >
        <p class="hint">提示</p>
      </div>
      <div>
        <input type="text" class="input left" placeholder="请输入您的手机号" style="width: 50%">
        <router-link to="#" class="dynamic" style="margin: 0;">获取动态密码</router-link>
        <p class="hint">提示</p>
      </div>
      <div>
        <input type="text" class="input" placeholder="请输入短信验证码">
        <p class="hint">提示</p>
      </div>
      <div>
        <input type="text" class="input" placeholder="新密码：6-12位字母，数字，特殊字符">
        <p class="hint">提示</p>
      </div>
      <div>
        <input type="text" class="input" placeholder="再次输入新密码">
        <p class="hint">提示</p>
      </div>
      <div class="affirm">提交</div>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  export default {
    name: 'Findpwd',
    components: {
      Header
    },
    data () {
      return {
        title: "找回登录密码"
      }
    },
    created() {
      this.$store.dispatch("pageNameA",this.title);
      console.log(this.$store.state.pageName);
    },
  }
</script>


<style scoped>
  .main {
    padding: 1.5em;
  }
  .main>div {
    overflow: hidden;
  }
  .input {
    display: inline-block;
    margin-top: 1.5em;
    font-size: 1.2em;
    width: 100%;
    height: 1.5em;
    color: #9e9e9e;
    border-bottom: 1px solid #9e9e9e;
  }
  .hint {
    float: left;
    width: 100%;
    font-size: 1em;
    height: 1.2em;
    margin-top: 0.5em;
    color: #b81b22;
    font-weight: 700;
  }
</style>
