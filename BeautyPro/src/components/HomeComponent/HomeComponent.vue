<template>
  <div>
    <v-header></v-header>
    <div class="home-component">
      <div class="home-wrap clearfix">
        <div class="menu">
          <p class="dt">个人中心</p>
          <p class="top"><router-link to="/home">首页</router-link></p>
          <hr>
          <p class="dt">订单中心</p>
          <p class="top"><router-link to="/home/orderhistory">我的订单</router-link></p>
          <hr>
          <p class="dt">信息修改</p>
          <p class="top"><router-link to="/home/updateemail">邮箱修改</router-link></p>
          <p class="top"><router-link to="/home/updatepassword">密码修改</router-link></p>
          <p class="top"><router-link to="/home/address">地址管理</router-link></p>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import HeaderComponent from '../HeaderComponent/HeaderComponent';
  import FooterComponent from '../FooterComponent/FooterComponent';
    export default {
      name: "HomeComponent",
      methods:{

      },
      components:{
        'v-header': HeaderComponent,
        'v-footer': FooterComponent
      }
    }
</script>

<style scoped>
  .home-component{
    min-height:1000px;
    background: #f0f3ef;
  }
  .home-wrap{
    width: 1190px;

    margin: 0 auto;
  }
  .home-wrap .menu{
    float: left;
    width: 200px;
    min-height: 300px;
    padding: 15px 0px;
    background: #ffffff;
    color: #333;
  }
  .home-wrap .menu a{
    color: #333;
  }
  .home-wrap .menu a:hover{
    color: red;
  }
  .home-wrap .content{
    float: left;
    width: 990px;
    padding: 15px;
  }
  .menu p{
    min-height: 30px;
    height: 30px;
    padding: 0px 15px;
  }
  .home-wrap .menu .dt{
    font-size: 16px;
    font-weight: 700;
    line-height: 32px;
  }
</style>
