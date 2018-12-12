<template>
  <div class="AddressComponent">
    <div class="box">
      <div class="h clearfix">
        <p class="name"><b>测试姓名</b></p>
        <p class="number"><b>123*****6789</b></p>
        <p class="ms">默认地址</p>
        <p class="opt">
          <router-link to="/home/address">删除</router-link>
          <router-link to="/home/address/update">修改</router-link>
        </p>
      </div>
      <div class="c">详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址</div>
    </div>
    <div class="box">
      <div class="h clearfix">
        <p class="name"><b>测试姓名</b></p>
        <p class="number"><b>123*****6789</b></p>
        <p class="opt">
          <router-link to="/home/address">设为默认</router-link>
          <router-link to="/home/address">删除</router-link>
          <router-link to="/home/address/update">修改</router-link>
        </p>
      </div>
      <div class="c">详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址</div>
    </div>
    <div class="box">
      <div class="h clearfix">
        <p class="name"><b>测试姓名</b></p>
        <p class="number"><b>123*****6789</b></p>
        <p class="opt">
          <router-link to="/home/address">设为默认</router-link>
          <router-link to="/home/address">删除</router-link>
          <router-link to="/home/address/update">修改</router-link>
        </p>
      </div>
      <div class="c">详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址</div>
    </div>
    <router-link to="/home/address/add" class="addAddressBtn">新增地址</router-link>
  </div>
</template>

<script>
    export default {
        name: "AddressComponent"
    }
</script>

<style scoped>
  .AddressComponent{


  }
  .box {
    padding: 15px;
    background: white;
    margin-bottom: 15px;
  }
  .box .h .name{
    width: 120px;
    float: left;
  }
  .box .h .opt{
    float: right;
    display: inline-block;
  }
  .box .h .opt a{
    margin-right: 15px;
  }
  .box .h .opt a:hover{
    color: red;
  }
  .box .h .number{
    width: 150px;
    float: left;
  }
  .box .h .ms{
    color: red;
    float: left;
    width: 100px;
    text-align: center;
  }
  .box .c{
    font-size: 12px;
  }
  .addAddressBtn{
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
  .addAddressBtn:hover{
    opacity: 0.8;

  }
</style>
