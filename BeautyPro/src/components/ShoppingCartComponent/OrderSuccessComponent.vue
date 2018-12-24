<template>
  <div>
    <v-top-header></v-top-header>
    <v-top-search></v-top-search>
    <div class="OrderSuccessComponent">
      <div class="header-wrap">
        <div class="box-content">
          <div class="a">
            <h3>下单成功</h3>
            <div class="b"></div>
          </div>
        </div>
      </div>
      <div class="main-wrap">
        <div class="box-content">
          <router-link to="/" class="look">查看订单</router-link>
          <router-link to="/" class="continue">继续购物</router-link>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import TopHeaderComponent from '../HeaderComponent/TopHeaderComponent';
  import HeaderSearchComponent from '../HeaderComponent/HeaderSearchComponent';
  import FooterComponent from '../FooterComponent/FooterComponent';
    export default {
        name: "OrderSuccessComponent",
      components:{
        'v-top-header': TopHeaderComponent,
        'v-top-search': HeaderSearchComponent,
        'v-footer': FooterComponent
      }
    }
</script>

<style scoped>
  .OrderSuccessComponent{

  }
  .box-content{
    width: 1190px;
    margin: 0 auto;
  }
  .header-wrap .a{
    text-align: center;
  }
  .header-wrap .b{
    width: 150px;
    margin: 0 auto;
    height: 10px;
    border-top: 2px solid #000;
    border-bottom: 1px solid #000;
  }
  .main-wrap{
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .main-wrap .box-content{
    text-align: center;
  }
  .main-wrap a{
    display: inline-block;
    padding:10px 50px;
    text-decoration: none;
    border: 1px solid #000;
  }
  .main-wrap a.continue{
    background: #000;
    color: #fff;
  }
  .main-wrap a.look{
    color: #000;
    margin-right: 100px;
  }

</style>
