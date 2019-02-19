<template>
  <div>
    <div class="AddAddressComponent">
      <div class="box clearfix">
        <div class="m">
          <label>联系人</label>
        </div>
        <div class="c">
          <input type="text" placeholder="请输入联系人" :name="nickname" v-model="nickname">
        </div>
      </div>
      <div class="box clearfix">
        <div class="m">
          <label>联系号码</label>
        </div>
        <div class="c">
          <input type="text" placeholder="请输入联系号码" maxlength="12" :name="phonenum" v-model="phonenum">
        </div>
      </div>
      <div class="box clearfix">
        <div class="m">
          <label>所在地区</label>
        </div>
        <div class="c2">
          <select id="province">
            <option>请选择</option>
            <option v-for="option in options" v-bind:value="option.id">
              {{ option.name }}
            </option>
          </select>
          <select id="city">
            <option>请选择</option>
            <option v-for="option in citys" v-bind:value="option.id">
              {{ option.name }}
            </option>
          </select>
          <select id="country">
            <option>请选择</option>
            <option v-for="option in countrys" v-bind:value="option.id">
              {{ option.name }}
            </option>
          </select>
          <select id="hometown">
            <option>请选择</option>
            <option v-for="option in hometowns" v-bind:value="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="box clearfix">
        <div class="m">
          <label>详细地址</label>
        </div>
        <div class="c2">
          <textarea placeholder="请输入详细地址" :name="address" v-model="address"></textarea>
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
      <router-link to="/home/address" class="addAddressBtn" @click="addPlace">确认添加</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AddAddressComponent",
        created(){
          console.log("省");
          console.log(window.Area.province);
          console.log("市");
          console.log(window.Area.city);
         /* var provinces=this.$province;
          for (var i=0;i<provinces.length;i++){

          }*/
          /*var data=this.$qs.stringify({
            pid: 0
          });
          this.$axios.post("http://localhost:8088/BeautyProServer/api/v1/area",data).then((resp) => {
            console.log(resp.data);
            var rows=resp.data;
            if(rows.length>0){
              for(var i=0;i<rows.length;i++){

              }
            }
          }).catch((resp) => {

          });*/
        },
        data(){
          return {
            nickname: '',
            phonenum: '',
            address: ''
          }
        },
        methods: {
          addPlace(){

          }
        },
        computed:{
          options:function(){
            var provinces=window.Area.province;
            return provinces;
          },
          citys:function(){
            var citys=window.Area.city;
            return citys;
          },
          countrys:function(){
            var countrys=window.Area.country;
            return countrys;
          },
          hometowns:function(){
            var hometowns=window.Area.hometown;
            return hometowns;
          }
        }
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
