<template>
  <div class="UpdatePasswordComponent">
    <div class="">
      <div class="box clearfix">
         <div class="t"><label>原密码</label></div>
         <div class="c">
           <input type="password" placeholder="请输入原密码">
         </div>
       </div>
      <div class="box clearfix">
        <div class="t"><label>新密码</label></div>
        <div class="c">
          <input type="password" placeholder="请输入新密码">
        </div>
      </div>
      <div class="box clearfix">
        <div class="t"><label>确认密码</label></div>
        <div class="c">
          <input type="password" placeholder="请输入新密码">
        </div>
      </div>
      <div class="box">
        <div class="updateButtonBox"><button>确定修改</button></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UpdatePassword"
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
