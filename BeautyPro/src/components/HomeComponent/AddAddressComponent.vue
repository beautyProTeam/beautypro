<template>
  <div>
    <div class="AddAddressComponent">
      <div class="box clearfix">
        <div class="m">
          <label>联系人</label>
        </div>
        <div class="c">
          <input type="text" placeholder="请输入联系人" :name="realname" v-model="realname">
        </div>
      </div>
      <div class="box clearfix">
        <div class="m">
          <label>联系号码</label>
        </div>
        <div class="c">
          <input type="text" placeholder="请输入联系号码" maxlength="12" :name="telphone" v-model="telphone">
        </div>
      </div>
      <div class="box clearfix">
        <div class="m">
          <label>所在地区</label>
        </div>
        <div class="c2">
          <select id="province" @change="changeSheng($event)" >
            <option>请选择</option>
            <option v-for="option in options" v-bind:value="option.name" v-model="sheng" :name="sheng">
              {{ option.name }}
            </option>
          </select>
          <select id="city" @change="changeShi($event)">
            <option>请选择</option>
            <option v-for="option in citys" v-bind:value="option.name" v-model="shi"  :name="shi">
              {{ option.name }}
            </option>
          </select>
          <select id="country" @change="changeSecondShi($event)">
            <option>请选择</option>
            <option v-for="option in countrys" v-bind:value="option.name" v-model="secondshi"  :name="secondshi">
              {{ option.name }}
            </option>
          </select>
          <select id="hometown" @change="changeZheng($event)">
            <option>请选择</option>
            <option v-for="option in hometowns" v-bind:value="option.name" v-model="zheng"  :name="zheng">
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
          <textarea placeholder="请输入详细地址" :name="detailaddress" v-model="detailaddress"></textarea>
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
      <!--<router-link to="/home/address" class="addAddressBtn" @click="addPlace">确认添加</router-link>-->
      <button class="addAddressBtn" @click="addPlace">确认添加</button>
    </div>
  </div>
</template>

<script>
  import router from "../../router/index.js";
    export default {
        name: "AddAddressComponent",
        created(){
          this.user=this.$store.state.userGlobal;
        },
        data(){
          return {
            user:{},
            realname: '',
            telphone: '',
            detailaddress: '',
            sheng: '',
            shi: '',
            secondshi: '',
            zheng: ''
          }
        },
        methods: {
          addPlace(){
            let address=this.sheng+' '+this.shi+' '+this.secondshi+' '+this.zheng+' '+this.detailaddress;
            let data=this.$qs.stringify({
              realname: this.realname,
              telphone: this.telphone,
              defaultAddress: 2,//不是默认地址
              uid: this.user.id,
              address: address
            });
            this.$axios.post("http://localhost:8088/BeautyProServer/api/v1/address",data).then((resp) => {
              if(resp.data>0){
                router.push({path:'/home/address'});
              }else{
                alert("地址添加失败");
              }
            }).catch((resp) => {
              alert("请求失败");
            });
          },
          changeSheng(event){
           // this.sheng = event.target.value; //获取ID，即option对应的ID值
            this.sheng = event.target.value;
          },
          changeShi(event){
            this.shi=event.target.value;
          },
          changeSecondShi(event){
            this.secondshi=event.target.value;
          },
          changeZheng(event){
            this.zheng=event.target.value;
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
