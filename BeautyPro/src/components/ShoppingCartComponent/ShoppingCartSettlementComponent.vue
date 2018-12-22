<template>
  <div>
    <v-top-header></v-top-header>
    <div class="ShoppingCartSettlementComponent">
      <div class="box-content">
        <div class="header-wrap">
          <div class="header-text">确认订单信息</div>
          <div class="header-order-number">订单号:123456</div>
        </div>
        <div class="goods-list">
          <div class="title">购买清单</div>
          <div class="thead clearfix">
            <div class="good-name floatL">商品</div>
            <div class="good-props floatL"></div>
            <div class="good-price floatL">单价</div>
            <div class="good-quantity floatL">数量</div>
            <div class="good-sum floatL">小计</div>
          </div>
          <ul class="goods-list-main">
            <li class="clearfix">
              <router-link to="/">
                <img class="good-img" src="/static/img/pr1.jpg">
              </router-link>
              <div class="good-name floatL">
                <div class="good-tag clearfix">
                  <span>新品</span>
                </div>
                <router-link to="/">SK-II护肤精华露肌因光蕴环彩钻白精华礼盒</router-link>
              </div>
              <div class="good-props floatL">
                套装
              </div>
              <div class="good-price floatL">￥2490.00</div>
              <div class="good-quantity floatL">1</div>
              <div class="good-sum floatL">￥2490.00</div>
            </li>
            <li class="clearfix">
              <router-link to="/">
                <img class="good-img" src="/static/img/pr1.jpg">
              </router-link>
              <div class="good-name floatL">
                <div class="good-tag clearfix">
                  <span>新品</span>
                </div>
                <router-link to="/">SK-II护肤精华露肌因光蕴环彩钻白精华礼盒</router-link>
              </div>
              <div class="good-props floatL">
                套装
              </div>
              <div class="good-price floatL">￥2490.00</div>
              <div class="good-quantity floatL">1</div>
              <div class="good-sum floatL">￥2490.00</div>
            </li>
          </ul>
        </div>
        <div class="address-wrap">
          <div class="title">确认地址</div>
          <div class="address-main">
            <div class="address-default clearfix">
              <div class="address-text floatL">
                阿乐山大佛经理萨达积分拉世纪东方卢卡斯动静分离卡手动阀撒爱上了发动机束带结发卢卡斯发
              </div>
              <div class="address-option floatR">
                <span>选择其他地址</span>
                <span>修改此地址</span>
              </div>
            </div>
            <div class="other-address">
              <select>
                <option>萨达发萨达发萨达发</option>
                <option>萨达发萨达发萨达发</option>
                <option>萨达发萨达发萨达发</option>
                <option>萨达发萨达发萨达发</option>
              </select>
            </div>
          </div>
        </div>
        <div class="confirm-order-wrap clearfix">
          <div class="confirm-main">
            <div class="p">共3件商品</div>
            <div class="p">合计：<span>￥2490.00</span></div>
            <div class="p">付款类型：在线支付</div>
            <div class="p">付款方式：余额付款</div>
            <div class="confirm-order-btn">确认下单</div>
          </div>
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
        name: "ShoppingCartSettlementComponent",
      components:{
        'v-top-header': TopHeaderComponent,
        'v-footer': FooterComponent
      }
    }
</script>

<style scoped>
  .ShoppingCartSettlementComponent{
  }
  .box-content{
    width: 900px;
    margin: 0 auto;
  }
  .header-wrap{
    padding-top: 40px;
  }
  .header-text,
  .header-order-number{
    width: 150px;
    margin: 0 auto;
    text-align: center;
  }
  .header-text{
    line-height: 50px;
    text-align: center;
    font-weight: 700;
    font-size:20px;
  }
  .header-order-number{
    width: 150px;
    height: 50px;
    border-bottom: 1px solid #000;
  }
  .goods-list{

  }
  .title{
    height: 32px;
    line-height: 32px;
    font-size: 13px;
    color: #000;
    font-weight: bold;
    border-bottom: 1px solid #000;
  }
  .thead{
    height: 32px;
    line-height: 32px;
    background: #f3f3f3;
    border: 1px solid #e9e9e9;
    margin-top: 5px;
    padding-left: 90px;
  }
  .good-name{
    width: 300px;
    margin-right: 15px;
  }
  .good-props{
    width: 140px;
  }
  .thead .good-props{
    height: 30px;
  }

  .good-price{
    width: 120px;
    text-align: right;
    margin-right: 20px;
  }
  .good-quantity{
    width: 80px;
    text-align: center;
  }
  .good-sum{
    width: 100px;
    text-align: right;
  }
  .good-img{
    width: 80px;
    height: 80px;
    border: 1px solid #eee;
    float: left;
    margin-right: 10px;
  }
  .goods-list-main li{
    border-top: 1px solid #f1f1f1;
    padding: 20px 0px;
  }

  .good-tag{
    min-height: 20px;
  }
  .good-tag span{
    display: inline-block;
    float: left;
    padding: 2px 5px;
    background: #e00;
    color: #fff;
    font-size: 12px;
  }
  .goods-list-main .good-name{
    height: 60px;
    overflow: hidden;

  }
  .goods-list-main .good-name a{
    font-size: 12px;
    line-height: 20px;
    color: #000;
    text-decoration: none;
  }
  .goods-list-main .good-name a:hover{
    color: #E2231A;
  }
  .goods-list-main .good-sum,
  .goods-list-main .good-quantity,
  .goods-list-main .good-props{
    font-size: 12px;
    color: #666;
    padding-top: 20px;
    line-height: 20px;
  }
  .goods-list-main .good-price{
    font-size: 12px;
    padding-top: 20px;
    line-height: 20px;
    color: #333;
  }
  .confirm-order-wrap{
    margin-top: 40px;
    border: 1px solid #f1f1f1;
    background: #f1f1f1;
    margin-bottom: 70px;
  }
  .confirm-main{
    width: 200px;
    float: right;
    padding-top: 10px;
  }
  .confirm-main .p{
    text-align: right;
    padding-right: 10px;
    font-size: 13px;
    color: #000;
    height: 30px;
  }
  .confirm-order-btn{
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    background: #000;
    cursor: pointer;
    transition: background .15s ease-in-out;
    -webkit-transition: background .15s ease-in-out;
    -moz-transition: background .15s ease-in-out;
    -ms-transition: background .15s ease-in-out;
  }
  .confirm-order-btn:hover{
    background:#E2231A;
  }
  .confirm-main span{
    color:#E2231A;
    font-weight: bold;
    font-size: 18px;
  }
  .address-main{
    padding: 5px;
  }
  .address-default .address-text{
    width: 700px;
  }
  .address-default .address-option span{
    color:#333;
    cursor: pointer;
    margin-right: 15px;
    font-size: 12px;
  }
  .address-default .address-option span:hover{
    color:#E2231A;
  }
  .other-address select{
    display: none;
    margin-top: 15px;
    height: 30px;
    line-height: 30px;
  }
</style>
