<template>
    <div class="main">
      <div class="HeaderBg">
        <div class="HeaderMiddle">
          <router-link to="/" tag="a"><div class="HeaderLogo"></div></router-link>
          <span>欢迎注册</span>
          <div class="goSephoraLogin"><p>已有账号？</p><ul>
            <router-link to="/login" tag="li">立即登录</router-link>
            <li></li>
          </ul>
          </div>
        </div>
      </div>
      <div class="BodyBg">
        <div class="BodyMiddle">
          <div class="SephoraRegisterBodyMainForm mt64 ml80">
            <div class="PhoneStepFirst">
              <p>邮箱</p>
              <div class="SepBaseInput-chen" style="width: 300px;">
                <input type="text" placeholder="请输入邮箱" value="" style="width: 298px;" :email="email">
              </div>
              <div class="errorTip"></div>
              <p>验证码</p>
              <div class="SepBaseInput-chen" style="width: 300px;">
                <input type="text" placeholder="请输入验证码" value="" style="width: 298px;">
              </div>
              <div class="errorTip"></div>
              <p>输入密码</p>
              <div class="SepBaseInput-chen" style="width: 300px;">
                <input type="password" placeholder="6~16位大小写英文字母、数字或符号的组合" value="" style="width: 298px;" :password="password">
              </div>
              <div class="errorTip"></div>
              <p>确认密码</p>
              <div class="SepBaseInput-chen" style="width: 300px;">
                <input type="password" placeholder="请再次输入密码" value="" style="width: 298px;">
              </div>
              <div class="errorTip"></div>
              <div class="confirmButton2" @click="regist">注册</div>

            </div>
            <div class="clearFix"></div>
          </div>
          <div class="clearFix"></div>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
</template>

<script>
  import  FooterComponent from '../FooterComponent/FooterComponent';
  import  Axios from 'axios';

    export default {
      name: "RegisterComponent",
      components:{
        "v-footer":FooterComponent,
      },
      data(){
        email: '';
        password: ''
      },
      methods: {
        regist(){
          Axios.post('locahost:8080/api/vi/regist',{email:this.email,password: this.password}).then((response) => {
            if(response>0){
              alert("注册成功");
            }else{
              alert("注册失败");
            }
          }).catch((response) => {
            alert("注册失败");
          });
        }
      }
    }
</script>

<style scoped>

  .HeaderBg{
    width: 100%;
    height: 89px;
    background-color: #fff;
  }
  .HeaderMiddle{
    margin: auto;
    width: 1190px;
    height: 89px;
    background-color: #fff;
  }
  .HeaderLogo{
    width: 250px;
    height: 33px;
    margin: 28px 0 0;
    float: left;
    cursor: pointer;
    background-image: url(/static/img/search_logo.png);
  }
  .HeaderBg .HeaderMiddle span{
    float: left;
    display: block;
    font-size: 16px;
    letter-spacing: 1px;
    color: #333;
    margin: 45px 0 0 30px;
  }
  .HeaderBg .HeaderMiddle .goSephoraLogin {
    font-size: 12px;
    float: right;
    margin-top: 30px;
  }
  .HeaderBg .HeaderMiddle .goSephoraLogin p{
    float: left;
    color: #9d9d9d;
  }
  .HeaderBg .HeaderMiddle .goSephoraLogin ul{
    cursor: pointer;
    float: left;
  }
  .HeaderBg .HeaderMiddle .goSephoraLogin ul li{
    list-style: none;
    vertical-align: bottom;
    list-style-type: none;
    float: left;
  }
  .HeaderBg .HeaderMiddle .goSephoraLogin ul li:first-of-type{
    color: #000;

  }
  .HeaderBg .HeaderMiddle .goSephoraLogin ul li:nth-of-type(2){
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-left: 5px solid #000;
    border-bottom: 4px solid transparent;
    float: left;
    margin-top: 5px;
    margin-left: 2px;
  }
  .HeaderBg .HeaderMiddle .goSephoraLogin ul:hover li:first-of-type {
    color: red;
    text-decoration: underline
  }

  .HeaderBg .HeaderMiddle .goSephoraLogin ul:hover li:nth-of-type(2) {
    border-left: 5px solid red
  }
  .BodyBg {
    width: 100%;
    min-width: 1190px;
    height: 804px;
    background: transparent url(/static/img/loginsSearchPassword_Bg.jpg) no-repeat scroll 50% 0;
  }
  .BodyBg .BodyMiddle {
    margin: auto;
    width: 1190px;
    height: 804px;
  }
  .SephoraRegisterBodyMainForm.ml80 {
    margin-left: 80px;
  }
  .SephoraRegisterBodyMainForm {
    width: 730px;
    float: left;
  }
  .SepBaseInput-chen {
    float: left;
    width: 300px;
    height: 32px;
    background-color: #fff;
  }
  .PhoneStepFirst p{
    margin: 0px;
    padding: 0px;
  }
  .SephoraRegisterBodyMainForm .PhoneStepFirst>p {
    font-size: 14px;
    float: left;
    width: 100px;
    height: 32px;
    line-height: 32px;
    margin-right: 10px;
    text-align: center;
  }
  .SepBaseInput-chen input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #ccc;
    text-indent: 20px;
    width: 298px;
    height: 30px;
  }
  .SephoraRegisterBodyMainForm .EmailStepFirst .errorTip, .SephoraRegisterBodyMainForm .PhoneStepFirst .errorTip {
    float: left;
    width: 620px;
    margin-left: 110px;
    height: 34px;
    line-height: 24px;
  }
  .SephoraRegisterBodyMainForm .EmailStepFirst .confirmButton2, .SephoraRegisterBodyMainForm .PhoneStepFirst .confirmButton2 {
    margin-left: 110px;
    width: 300px;
    height: 30px;
    line-height: 30px;
    background-color: #999;
    color: #fff;
    float: left;
    font-size: 14px;
    letter-spacing: 2px;
    text-align: center;
  }
  .mt64 {
    margin-top: 64px;
  }
  .SepBaseInput-chen input:hover {
    border-bottom: 1px solid #000;
  }
</style>
