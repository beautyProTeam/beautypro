<template>
  <div class="TopHeaderComponent">
    <div class="top-content">
      <div class="a">
        <router-link to="/" class="sephora-logo">欢迎来到丝芙兰</router-link>
        <span v-if="user == '' || user == null">
          <router-link to="/login">登录</router-link>
          <span class="vertical-span"></span>
          <router-link to="/register">免费注册</router-link>
        </span>
        <span v-else>
          <router-link to="/home">{{user.nickname}}</router-link>
          <span class="vertical-span"></span>
          <a @click="logout">注销</a>
        </span>
      </div>
      <div class="b"></div>
      <div class="c">
        <div class="d">
          <div class="my-sephora"></div>
          <router-link to="/home" class="homo-a">我的丝芙兰</router-link>
        </div>
        <div class="e">
          <router-link to="/shoppingcart">我的购物车</router-link>
        </div>
        <div class="e">
          <router-link to="/helpcenter">帮助中心</router-link>
        </div>
        <div class="e">
          <router-link to="/aboutus">关于我们</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import router from "../../router/index.js";
    export default {
        name: "TopHeaderComponent",
        data(){
          return {
            user:{}
          }
        },
        created(){
          this.user=this.$store.state.userGlobal;
          if (typeof(this.user) == 'string'){
            this.$store.state.userGlobal=JSON.parse(this.$store.state.userGlobal);
            this.user=JSON.parse(this.user);
          }
        },
        methods: {
          logout(){
            this.$axios.get('http://localhost:8088/BeautyProServer/api/v1/logout').then((resp) =>{
              var flag=resp.data;
              if(flag==0){
                alert("您还没有登录");
                router.push({path:'/login'});
              }else if(flag==1){
                window.loginUser=null;
                this.$store.commit('setUserGlobal',null);
                /*alert("您当前尚未登录,请先登录");
                router.push({path:'/login'});*/
                location.reload();
              }
            })
          }

        }

    }
</script>

<style scoped>
  .TopHeaderComponent{
    overflow:hidden;
    background :#000;
  }
  .TopHeaderComponent .top-content{
    width:1190px;
    height:30px;
    margin:0 auto;
  }
  .TopHeaderComponent .top-content .a,
  .TopHeaderComponent .top-content .b{
    font-size:12px;
    float: left;
    line-height:30px;
  }
  .TopHeaderComponent .a{
    width: 420px;
  }
  .TopHeaderComponent .a a{
    color:#fff;
    text-decoration:none;
    margin :0 15px;
  }
  .TopHeaderComponent .a a:hover,
  .TopHeaderComponent .homo-a:hover{
    color:red;
  }
  .TopHeaderComponent .a .vertical-span{
    display:inline-block;
    border-left :1px solid #fff;
    vertical-align:middle;
    height:15px;
    line-height :30px;
  }
  .TopHeaderComponent .b{
    width:230px;
    height:100%;
  }
  .TopHeaderComponent .c{
    display:inline-block;
    float: right;
    font-size:12px;
    line-height:30px;
  }
  .TopHeaderComponent .sephora-logo{
    padding:0 15px;
  }
  .TopHeaderComponent .c .d,
  .TopHeaderComponent .c .e{
    float:left;
    line-height:30px;
    font-size:12px;
    margin :0 15px;
  }
  .TopHeaderComponent .c .d a,
  .TopHeaderComponent .c .e a,
  .TopHeaderComponent .homo-a{
    color:#fff;
    text-decoration:none;
  }
  .TopHeaderComponent .c .d a:hover,
  .TopHeaderComponent .c .e a:hover{
    color: red;
  }
  .TopHeaderComponent .my-sephora{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 6px;
    background: url(/static/img/my-sephora.png);
    background-size: 100% 100%;
    vertical-align: middle;
    margin-top: -2px;
  }
</style>
