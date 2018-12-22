<template>
  <div class="HeaderSearchComponent">
    <div class="wrap clearfix">
      <router-link to="/" class="search-info-content-logo">
        <img src="/static/img/sep_top_Logo.png">
      </router-link>
      <div class="search-wrap">
        <input type="text" placeholder="商品搜索"><button>搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HeaderSearchComponent"
    }
</script>

<style scoped>
  .HeaderSearchComponent{
  }
  .HeaderSearchComponent .wrap{
    width: 1190px;
    padding: 24px 0 10px 0;
    margin: 0 auto;
  }
  .wrap .search-info-content-logo img{
    margin-right: 80px;
    float: left;
  }
  .HeaderSearchComponent .search-wrap{
  }
  .search-wrap input{
    width: 540px;
    height: 36px;
    padding: 0px;
    margin: 0px;
    padding-left: 20px;
    border: 1px solid #000;
  }
  .search-wrap button{
    border: none;
    background: #000;
    color: white;
    width: 90px;
    height: 36px;
    padding: 0px;
    margin: 0px;
    vertical-align: top;
  }
</style>
