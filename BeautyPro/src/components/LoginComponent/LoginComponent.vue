<template>
  <div class="main">
    <div class="top-bg">
      <div class="bg-m">
        <router-link to="/"><div class="logo-bg"></div></router-link>
      </div>
    </div>
    <div class="logo-wrap">
      <div class="bg-2"></div>
      <div class="BodyMiddle">
        <div class="logo-main">
          <div class="d1">登录丝芙兰官网</div>
          <div class="d2"></div>
          <div class="d3">
            <input type="text" placeholder="请输入邮箱" :name="email" v-model="email">
          </div>
          <div class="d3" style="margin-top: 20px;">
            <input type="password" placeholder="请输入密码" :name="password" v-model="password">
          </div>
          <div class="d4"><router-link to="/">忘记密码？</router-link></div>
          <div class="d5">
            <input type="submit" value="登录" @click="login">
          </div>
          <div class="d6">
            还没有账号？<router-link to="/register">免费注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import  FooterComponent from '../FooterComponent/FooterComponent';
  import router from "../../router/index.js";
  export default {
    name: "login-component",
    components:{
      "v-footer":FooterComponent,
    },
    data(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login(){
        /*普通传参
        var params = new URLSearchParams();
        params.append("email",this.email);
        params.append("password",this.password);
        Axios.post('/api/login',params,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((response) => {

        }).catch((response) => {

        });*/
        this.$axios.post('/api/login',this.$qs.stringify({email: this.email,password: this.password}),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((response) => {
          let respVal = response.data;
        if(respVal!=""){
          alert("登录成功");
          router.push({path: '/'});
        }else{
          alert("用户或密码不存在");
        }
        console.log(response);
      }).catch((response) => {
          console.log(response);
        alert("用户或密码不存在");
      });
      }
    }
  }
</script>

<style scoped>
  .top-bg{
    height: 89px;
  }
  .bg-m{
    margin: auto;
    width: 1190px;
    height: 89px;
    background-color: #fff;
  }
  .logo-bg{
    width: 250px;
    height: 33px;
    margin: 28px 0 0;
    float: left;
    background-image: url(/static/img/search_logo.png);
    cursor: pointer;
  }
  .logo-wrap{
    width: 100%;
    min-width: 1190px;
    height: 610px;
  }
  .bg-2{

    background: transparent no-repeat scroll 50% 0;
    background-image: url(/static/img/hp_loginlage_20181115.jpg) !important;
    min-width: 1190px;
    width: 100%;
    height: 610px;
    position: absolute;
    z-index: 1;
  }
  .BodyMiddle{
    position: relative;
    margin: auto;
    width: 1190px;
    height: 610px;
  }
  .logo-main{
    width: 360px;
    height: 380px;
    background-color: #fff;
    margin: 115px 0 0 800px;
    position: absolute;
    z-index: 2;
    padding:20px 30px;
  }
  .d1{
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 26px 0 0;
    color: #000;
  }
  .d2{
    height: 30px;
  }
  .d3{
    position: relative;
    margin-top: 8px;
  }
  .d3 input{
    width: 100%;
    text-indent: 32px;
    border: 1px solid #ccc;
    height: 30px;
  }
  .d3 input:focus{
    border-bottom-color: black;
  }
  .d4{
    height: 50px;
    line-height: 50px;

    font-size: 12px;
  }
  .d4 a:hover{
    color: #e00;
  }
  .d4 a{
    color: #919191;
    text-decoration: none;
  }
  .d5 input{
    width: 100%;
    height: 40px;
    background: #999;
    border: none;
    color:white;
  }
  .d6{
    font-size: 12px;
    height: 50px;
    line-height: 50px;
    text-align: right;
  }
  .d6 a{
    color: #e00;
  }
</style>
