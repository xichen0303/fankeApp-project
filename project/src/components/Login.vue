<!--王迎港-----------登录页面-->
<template>
  <div class="login">
    <Header></Header>
    <div class="main">
      <!--登录切换-->
      <div class="tab">
        <button @click="show = 'common'">
          普通登录
          <i class="border-i" v-if="show == 'common'"></i>
        </button>
        <button @click="show = 'speediness'">
          快速登录
          <i class="border-i" v-if="show == 'speediness'"></i>
        </button>
      </div>
      <!--普通登录-->
      <div class="common" v-if="show == 'common'">
        <input type="text" placeholder="点击输入手机号/Email" class="input">
        <input type="text" placeholder="请输入密码" class="input">
        <p v-show="verify" class="verify">用户名或密码错误</p>
      </div>
      <!--快速登录-->
      <div class="speediness" v-else>
        <div>
          <input type="text" placeholder="请输入图片验证码" class="input short">
          <img src="./../../static/images/PhoneLoginVerityCode.jpg" alt="验证码" class="code">
        </div>
        <div>
          <input type="text" placeholder="请输入你的手机号" class="input short">
          <router-link to="#" class="dynamic">获取动态密码</router-link>
        </div>
        <input type="text" placeholder="请输入手机登录密码" class="input">
      </div>
      <!--其他功能-->
      <div class="footer">
        <div @click="getDb" class="affirm">登录</div>
        <div class="other">
          <router-link to="/registered" class="left">免费注册 > </router-link>
          <router-link to="/find" class="right">手机账号取回密码> </router-link>
        </div>
        <div class="other-login">
          <p>使用其他账号登录</p>
          <ul>
            <li><a href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Dd84e6bde58071432be70df9e72f4f456" title="支付宝"></a></li>
            <li><a href="https://api.weibo.com/oauth2/authorize?client_id=479454896&redirect_uri=https://m.vancl.com/ThirdLoginCallBack/Sina&display=mobile&response_type=code&state=VANCLCSRF" title="新浪"></a></li>
            <li><a href="https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Faccount.xiaomi.com%2Fsts%2Foauth%3Fsign%3Dn6SLaQfWOWaDYy2i0jzijvVXZA4%253D%26followup%3Dhttps%253A%252F%252Faccount.xiaomi.com%252Foauth2%252Fauthorize%253Fclient_id%253D2882303761517429826%2526response_type%253Dcode%2526redirect_uri%253Dhttps%25253A%25252F%25252Fm.vancl.com%25252FThirdLoginCallBack%25252FXiaoMi%2526state%253DVANCLCSRF%26sid%3Doauth2.0&sid=oauth2.0&lsrp_appName=%E4%BD%BF%E7%94%A8%E5%B0%8F%E7%B1%B3%E5%B8%90%E5%8F%B7%E7%99%BB%E5%BD%95%24%7B%E5%87%A1%E5%AE%A2%E8%AF%9A%E5%93%81%7D%24&_customDisplay=20&_ssign=2%26V1_oauth2.0%26g11%2FU9AF315NVZkUrTaBUQPjjo4%3D" title="小米"></a></li>
            <li><a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=101281791&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&client_id=101281791&response_type=code&redirect_uri=https://m.vancl.com/ThirdLoginCallBack/QQ&state=VANCLCSRF&scope=get_info" title="QQ"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  import axios from 'axios'
  export default{
    name: 'Login',
    components: {
      Header
    },
    data(){
      return {
        title: '登录',
        show: "common",
        verify: true,
        img: "loginlogs.png",
        username: "",
        pwd: ""
      }
    },
    created() {
      this.$store.dispatch("pageNameA",this.title);
      console.log(this.$store.state.pageName);
    },
    mounted() {
      // console.log(this.$store.state.pageName);
    },
    methods: {
      getDb: function () {
        alert();
        axios.post('http://localhost:3000/api/login', {
          params: {
            username: this.username,
            psw: this.psw
          }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>
  /*主题*/
  .login {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .main {
    flex: 1;
  }
  /*切换登录方式*/
  .tab {
    text-align: center;
    border-bottom: 2px solid #f2f2f2;
    position: relative;
    line-height: 3em;
    font-size: 1.2em;
    color: #666;
    background-color: transparent;
  }
  .border-i {
    position: absolute;
    left: 50%;
    bottom: 0;
    display: block;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: -webkit-transform 300ms ease-in-out;
    -ms-transition: -ms-transform 300ms ease-in-out;
    transition: transform 300ms ease-in-out;
    width: 8.6em;
    height: 3px;
    background-color: #B81B22;
  }
  /*普通登录*/
  .input {
    display: inline-block;
    box-sizing: border-box;
    margin: 2em 0 1em;
    padding: .8em;
    zoom: 1;
    width: 100%;
    border: 0;
    font-size: 1.2em;
    background: #f5f5f5;
    color: #b5b5b5;
  }
  .verify {
    display: block;
    line-height: 1em;
    text-align: center;
    font-size: 1.2em;
    color: #e8270c;
  }
  .speediness, .common {
    overflow: hidden;
    padding: .5em 2em 0 2em;
    background: #ffffff;
  }
  /*快速登录*/
  .short {
    width: 14em;
  }



















  /*尾部*/
  .footer {
    padding: 0 2em 0 2em;
  }
  /*注册密码找回*/
  .other {
    overflow: hidden;
    margin-top: .9em;
  }
  /*其他登录方式*/
  .other-login {
    margin-top: 3em;
  }
  .other-login ul {
    overflow: hidden;
  }
  .other-login ul li {
    float: left;
    height: 100%;
    margin-right: 1.5em;
  }
  .other-login ul li a {
    display: block;
    position: relative;
    width: 2em;
    height: 1.75em;
    background: url("../../static/images/loginlogs.png") no-repeat 0 0;
    background-size: 11.6em 1.75em;
  }
  .other-login ul li:nth-child(2) a {
    background-position: -3.1em 0;
  }
  .other-login ul li:nth-child(3) a {
    background-position: -6.5em 0;
  }
  .other-login ul li:nth-child(4) a {
    background-position: -10.15em 0;
  }
</style>
