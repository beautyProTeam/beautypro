<template>
  <div>
    <div class="UpdateEmailComponent">
      <div class="wrap">
        <div class="box clearfix">
          <div class="mt">
            <label>原邮箱</label>
          </div>
          <div class="mc">
            <input type="text" disabled :name="originEmail" v-model="originEmail">
          </div>
          <button class="sendEmailBtn" @click="sendValidateCodeByEmail">发送验证码</button>
        </div>
        <div class="box clearfix">
          <div class="mt">
            <label>邮箱验证码</label>
          </div>
          <div class="mc">
            <input type="text" placeholder="请输入验证码">
          </div>
        </div>
        <div class="box clearfix">
          <div class="mt">
            <label>新邮箱</label>
          </div>
          <div class="mc">
            <input type="text" placeholder="请输入邮箱" :name="newEmail" v-model="newEmail">
          </div>
        </div>
        <!--<router-link to="/home" class="confirmUpdateBtn" @click="updateEmailAccount">确定修改</router-link>-->
        <button class="confirmUpdateBtn" @click="updateEmailAccount">确定修改</button>
      </div>
    </div>
  </div>
</template>

<script>
  import router from "../../router/index.js";
    export default {
        name: "UpdateEmailComponent",
        created(){
          this.user=this.$store.state.userGlobal;
        },
        data(){
          return {
            user:{},
            originEmail:this.$store.state.userGlobal.email,
            newEmail:''
          }
        },
        methods: {
          sendValidateCodeByEmail(){
            var data=this.$qs.stringify({
              username: this.originEmail
            });
            this.$axios.post("http://localhost:8088/BeautyProServer/api/v1/validate/email",data).then((resp) => {
              console.log("邮箱验证码");
              console.log(resp.data);
              alert(resp.data);
            }).catch((resp) => {
              alert("验证码发送失败");
            });
          },
          updateEmailAccount(){
            var data=this.$qs.stringify({
              email: this.newEmail
            });
            this.$axios.post("http://localhost:8088/BeautyProServer/api/v1/user/select",data).then((resp) => {
              console.log(resp.data);
              if(resp.data==1){
                this.user=this.$store.state.userGlobal.email;
                this.user.email=this.newEmail;
                this.$store.commit('setUserGlobal',this.user);
                router.push({path: '/home'});
              }else if (resp.data!=0){
                alert(resp.data);
              }
            }).catch((resp) => {
              alert("请求失败");
            });
          }
        }
    }
</script>

<style scoped>
  .UpdateEmailComponent{
    background: white;
    padding: 15px;
  }
  .wrap{
    width: 500px;
    margin: 0 auto;
  }
  .box{
    margin-bottom: 15px;
  }
  .box .mt,
  .box .mc{
    float: left;
  }
  .box .mt{
    width: 100px;
    height: 36px;
    line-height: 36px;
  }
  .box .mc{
    width: 200px;
  }
  .box .mc input[type=text]{
    width: 100%;
    height: 36px;
    padding-left: 15px;
  }
  .sendEmailBtn{
    display: inline-block;
    width: 100px;
    height: 36px;
    margin-left: 15px;
    float: left;
    border: none;
    background: black;
    color: white!important;
  }
  .sendEmailBtn:hover{
    opacity: 0.8;
  }
  .confirmUpdateBtn{
    display: block;
    width: 200px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: black;
    color: white;
    margin: 0 auto;
    text-decoration: none!important;
  }
  .confirmUpdateBtn:hover{
    opacity: 0.8;
  }
</style>
