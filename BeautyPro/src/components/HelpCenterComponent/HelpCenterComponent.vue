<template>
  <div>
    <v-top-header></v-top-header>
    <div class="AboutUsComponent">
      <div class="box-content">
        <div class="header-text">帮助中心</div>
        <hr>
        <div class="main">
          您好像不需要什么帮助吧，世界？
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import TopHeaderComponent from '../HeaderComponent/TopHeaderComponent';
  import FooterComponent from '../FooterComponent/FooterComponent';
    export default {
        name: "HelpCenterComponent",
      components:{
        'v-top-header': TopHeaderComponent,
        'v-footer': FooterComponent
      }
    }
</script>

<style scoped>
  .HelpCenterComponent{

  }
  .box-content{
    width: 900px;
    margin: 0 auto;
  }
  .header-text{
    padding-top: 70px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .main{
    padding: 20px;
    min-height: 800px;
  }
</style>
