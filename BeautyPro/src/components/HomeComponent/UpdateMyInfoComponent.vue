<template>
  <div>
    <div class="UpdateMyInfoComponent">
      <div class="wrap">
        <div class="box clearfix">
          <div class="mt">
            <label>呢称</label>
          </div>
          <div class="mc">
            <input type="text" placeholder="请输入呢称"  :name="user.nickname" v-model="user.nickname">
          </div>
        </div>
        <div class="box clearfix">
          <div class="mt">
            <label>性别</label>
          </div>
          <div class="mc">
            <label class="sex-box"><input type="radio" :name="user.sex" v-model="user.sex" value="1">先生</label>
            <label class="sex-box"><input type="radio" :name="user.sex" v-model="user.sex" value="2">女士</label>
          </div>
        </div>
        <div class="box clearfix">
          <div class="mt">
            <label>手机号</label>
          </div>
          <div class="mc">
            <input type="text" placeholder="请输入手机号" :name="user.phonenum" v-model="user.phonenum">
          </div>
          <div class="updateUid">
            <input type="hidden" :name="user.id" v-model="user.id">
          </div>
        </div>
        <a class="confirmUpdateBtn" @click="updateUser()">确定修改</a>
      </div>
    </div>
  </div>
</template>

<script>
    /*import Axios from 'axios';*/
    export default {
        name: "UpdateMyInfoComponent",
        created(){
          /*if (typeof(this.$store.state.userGlobal) == 'string') {
            this.user=JSON.parse(this.$store.state.userGlobal);
          }else if(typeof(this.$store.state.userGlobal) == 'object'){
            this.user=this.$store.state.userGlobal;
          }*/
          //this.user=this.$store.state.userGlobal;
          console.log("update user");
          console.log(this.user);
        },
        data(){
          return {
            user: {}

          }
        },
        methods: {
          updateUser(){
            var data=this.$qs.stringify({
              nickname: this.user.nickname,
              sex: this.user.sex,
              phonenum: this.user.phonenum,
              updateUid: this.user.updateUid
            });
            this.$axios.post("/api/user/update",data).then((resp) => {
              if(resp.data>0){
                /*this.$store.state.userGlobal.nickname=this.user.nickname;
                this.$store.state.userGlobal.sex=this.user.sex;
                this.$store.state.userGlobal.phonenum=this.user.phonenum;*/
                router.push({path:'/home'});
              }else{
                alert("修改信息失败");
              }

            }).catch((resp) => {
              alert("修改信息失败");
            });
          }
        }
    }
</script>

<style scoped>
  .UpdateMyInfoComponent{
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
  .box .mc .sex-box{
    height: 36px;
    line-height: 36px;
    margin-right: 15px;
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
