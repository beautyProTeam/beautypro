<template>
  <div class="UpdatePasswordComponent">
    <div class="">
      <div class="box clearfix">
         <div class="t"><label>原密码</label></div>
         <div class="c">
           <input type="password" placeholder="请输入原密码" :name="originPass" v-model="originPass">
         </div>
       </div>
      <div class="box clearfix">
        <div class="t"><label>新密码</label></div>
        <div class="c">
          <input type="password" placeholder="请输入新密码" :name="newPass" v-model="newPass">
        </div>
      </div>
      <div class="box clearfix">
        <div class="t"><label>确认密码</label></div>
        <div class="c">
          <input type="password" placeholder="请输入新密码" :name="confirmPass" v-model="confirmPass">
        </div>
      </div>
      <div class="box">
        <div class="updateButtonBox"><button @click="updatePass">确定修改</button></div>
      </div>
    </div>
  </div>
</template>

<script>
    import router from "../../router/index.js";
    export default {
        name: "UpdatePassword",
        created(){
          this.user=this.$store.state.userGlobal;
          console.log("update user");
          console.log(this.user);
        },
        data(){
          return {
            user: {},
            originPass: '',
            newPass: '',
            confirmPass: ''
          }
        },
        methods: {
          updatePass(){
            if(this.originPass!=this.$store.state.userGlobal.password){
              console.log("原密码");
              console.log(this.$store.state.userGlobal.password);
              alert("原密码输入错误");
            }
            else if(this.confirmPass!=this.newPass){
              alert("密码输入不一致");
            }else {
              var data=this.$qs.stringify({
                password: this.newPass,
                updateUid: this.$store.state.userGlobal.id
              });
              this.$axios.post("http://localhost:8088/BeautyProServer/api/v1/user/update",data).then((resp) => {
                if(resp.data>0){
                  this.$store.state.userGlobal.password=this.newPass;
                  this.$store.commit('setUserGlobal',this.$store.state.userGlobal);
                  router.push({path:'/home'});
                }else{
                  alert("修改密码失败");
                }
              }).catch((resp) => {
                alert("请求失败");
              });
            }

          }
        }

    }
</script>

<style scoped>
  .UpdatePasswordComponent{
    background: #fff;
    padding: 15px;
  }
  .box{
    width: 500px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .box .t,
  .box .c{
    float: left;
  }
  .box .t{
    width: 100px;
    height: 36px;
    line-height: 36px;
    text-align: right;

  }
  .box .t label{
    font-weight: normal!important;
  }
  .box .c{
    width: 300px;
    padding-left: 15px;
    position: relative;
  }
  .box input{
    width: 100%;
    height: 36px;
  }
  .updateButtonBox{
    width: 200px;
    margin: 0 auto;
  }
  .updateButtonBox button{
    width: 100%;
    height: 36px;
    border: none;
    background: black;
    color: white;
  }
  .updateButtonBox button:hover{
    opacity: 0.8;
  }
</style>
