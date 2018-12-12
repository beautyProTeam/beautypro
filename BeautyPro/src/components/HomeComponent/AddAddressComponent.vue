<template>
  <div>
    <div class="AddAddressComponent">
      <div class="box clearfix">
        <div class="m">
          <label>联系人</label>
        </div>
        <div class="c">
          <input type="text" placeholder="请输入联系人">
        </div>
      </div>
      <div class="box clearfix">
        <div class="m">
          <label>联系号码</label>
        </div>
        <div class="c">
          <input type="text" placeholder="请输入联系号码" maxlength="12">
        </div>
      </div>
      <div class="box clearfix">
        <div class="m">
          <label>所在地区</label>
        </div>
        <div class="c2">
          <select>
            <option>请选择</option>
          </select>
          <select>
            <option>请选择</option>
          </select>
          <select>
            <option>请选择</option>
          </select>
          <select>
            <option>请选择</option>
          </select>
        </div>
      </div>
      <div class="box clearfix">
        <div class="m">
          <label>详细地址</label>
        </div>
        <div class="c2">
          <textarea placeholder="请输入详细地址"></textarea>
        </div>
      </div>
      <div class="box clearfix">
        <div class="m">
          <label></label>
        </div>
        <div class="c">
          <label><input type="checkbox">设为默认地址</label>
        </div>
      </div>
      <router-link to="/home/address" class="addAddressBtn">确认添加</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AddAddressComponent"
    }
</script>

<style scoped>
  .AddAddressComponent{
    padding: 15px;
    background: white;
  }
  .box {
    width: 500px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .box .m{
    width: 100px;
    float: left;
    height: 36px;
    line-height: 36px;
  }
  .box .c{
    width: 200px;
    float: left;
  }

  .box .c input[type=text],
  .box .c input[type=password]{
    height: 36px;
    width: 100%;
  }
  .box .c input[type=text],
  .box .c input[type=password],
  .box .c2 textarea{
    width: 100%;
    text-indent: 20px;
  }
  .box .c2{
    float: left;
    width: 350px;
  }
  .box .c2 select{
    height: 36px;
  }
  .box .c2 textarea{
    height: 80px;
    resize: none;
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
