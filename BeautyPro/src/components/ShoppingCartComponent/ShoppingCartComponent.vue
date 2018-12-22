<template>
  <div>
    <v-top-header></v-top-header>
    <v-top-search></v-top-search>
    <div class="ShoppingCartComponent">
      <div class="box-content">
        <div class="cart-filter-bar">
          <div class="active">我的购物车</div>
        </div>
        <div class="jd-cart">
          <div class="cart-thead">
            <div class="column t-goods">商品</div>
            <div class="column t-props"></div>
            <div class="column t-price">单价</div>
            <div class="column t-quantity">数量</div>
            <div class="column t-sum">小计</div>
            <div class="column t-action">操作</div>
          </div>
          <div class="cart-item-list">
            <div class="cart-tbody">
              <ul class="item-list">
                <li class="clearfix">
                  <div class="item-form clearfix">
                    <router-link to="/"><img class="p-img" src="/static/img/pr1.jpg"></router-link>
                    <div class="p-name">
                      <div class="market clearfix">
                        <span>新品</span>
                      </div>
                      <router-link to="/">SK-II护肤精华露肌因光蕴环彩钻白精华礼盒</router-link>
                    </div>
                    <div class="p-props">
                      套装
                    </div>
                    <div class="p-price">￥2490.00</div>
                    <div class="p-quantity">
                      <div class="quantity-box">
                        <div class="decrement floatL">-</div>
                        <input type="text" autocomplete="off" class="itxt floatL" value="1">
                        <div class="increment floatL">+</div>
                      </div>
                    </div>
                    <div class="p-sum">
                      <strong>￥2490.00</strong>
                    </div>
                    <div class="p-action">
                      <span title="删除此商品？">删除</span>
                    </div>
                  </div>
                </li>
                <li class="clearfix">
                  <div class="item-form clearfix">
                    <router-link to="/"><img class="p-img" src="/static/img/pr1.jpg"></router-link>
                    <div class="p-name">
                      <div class="market clearfix">
                        <span>新品</span>
                      </div>
                      <router-link to="/">SK-II护肤精华露肌因光蕴环彩钻白精华礼盒</router-link>
                    </div>
                    <div class="p-props">
                      套装
                    </div>
                    <div class="p-price">￥2490.00</div>
                    <div class="p-quantity">
                      <div class="quantity-box">
                        <div class="decrement floatL">-</div>
                        <input type="text" autocomplete="off" class="itxt floatL" value="1">
                        <div class="increment floatL">+</div>
                      </div>
                    </div>
                    <div class="p-sum">
                      <strong>￥2490.00</strong>
                    </div>
                    <div class="p-action">
                      <span title="删除此商品？">删除</span>
                    </div>
                  </div>
                </li>
                <li class="clearfix">
                  <div class="item-form clearfix">
                    <router-link to="/"><img class="p-img" src="/static/img/pr1.jpg"></router-link>
                    <div class="p-name">
                      <div class="market clearfix">
                        <span>新品</span>
                      </div>
                      <router-link to="/">SK-II护肤精华露肌因光蕴环彩钻白精华礼盒</router-link>
                    </div>
                    <div class="p-props">
                      套装
                    </div>
                    <div class="p-price">￥2490.00</div>
                    <div class="p-quantity">
                      <div class="quantity-box">
                        <div class="decrement floatL">-</div>
                        <input type="text" autocomplete="off" class="itxt floatL" value="1">
                        <div class="increment floatL">+</div>
                      </div>
                    </div>
                    <div class="p-sum">
                      <strong>￥2490.00</strong>
                    </div>
                    <div class="p-action">
                      <span title="删除此商品？">删除</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cart-floatbar">
          <div class="options-box">
            <div class="operation floatL">
              <span class="cleaner-opt">清空购物车</span>
            </div>
            <div class="comm-right floatR">
              <router-link to="/" class="btn-area floatR">去结算</router-link>
              <div class="price-sum floatR">
                总价：<strong>￥2490.00</strong>
              </div>
            </div>
          </div>
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
        name: "ShoppingCartComponent",
      components:{
        'v-top-header': TopHeaderComponent,
        'v-top-search': HeaderSearchComponent,
        'v-footer': FooterComponent
      }
    }
</script>

<style scoped>
  .ShoppingCartComponent{
    margin-bottom: 70px;
  }
  .box-content{
    width: 1030px;
    margin: 0 auto;
  }
  .cart-filter-bar{
    height: 39px;
  }
  .cart-filter-bar div{
    display: inline-block;
    float: left;
    height: 39px;
    line-height: 39px;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid transparent;

  }
  .cart-filter-bar div.active{
    border-color: #000;
  }
  .jd-cart{

  }
  .cart-thead{
    height: 32px;
    line-height: 32px;
    margin: 0 0 10px;
    padding: 5px 0 5px 130px;
    background: #f3f3f3;
    border: 1px solid #e9e9e9;
    border-top: 0;
    position: relative;
    box-sizing: unset;
    font-size: 12px;
    color: #666;
  }
  .cart-thead .column{
    float: left;
  }
  .cart-thead .t-goods{
    width: 300px;
  }
  .cart-thead .t-props{
    width: 140px;
    height: 32px;
  }
  .cart-thead .t-price{
    width: 120px;
    margin-right: 40px;
    text-align: right;
  }
  .cart-thead .t-quantity{
    width: 80px;
    text-align: center;
  }
  .cart-thead .t-sum{
    width: 100px;
    margin-right: 40px;
    text-align: right;
  }
  .cart-thead .t-action{
    width: 75px;
  }
  .item-list{
    border-style: solid;
    border-width: 2px 1px 1px;
    _border-width: 1px;
    border-color: #aaa #f1f1f1 #f1f1f1;
    background: #fff;
  }
  .item-list li{
    padding: 20px 0px 20px 40px;
    border-top: 1px solid #f1f1f1;
  }
  .item-list .item-form .p-img{
    width: 80px;
    height: 80px;
    float: left;
    border: 1px solid #eee;
    margin-right: 10px;
    box-sizing: unset;
  }
  .item-form .p-name{
    float: left;
    width: 300px;
    height: 60px;
    overflow: hidden;
  }
  .item-list .item-form .market{
    min-height: 20px;
  }
  .item-list .item-form .market span{
    display: inline-block;
    float: left;
    padding: 2px 5px;
    background: #e00;
    color: #fff;
    font-size: 12px;
  }
  .item-form .p-name a{
    font-size: 12px;
    line-height: 20px;
    color: #000;
    text-decoration: none;
  }
  .item-form .p-name a:hover{
    color: #E2231A;
  }
  .item-form .p-props{
    width: 140px;
    float: left;
    font-size: 12px;
    color: #666;
    padding-top: 20px;
    line-height: 20px;
  }
  .item-form .p-price{
    width: 120px;
    margin-right: 40px;
    color: #333;
    font-weight: 400;
    text-align: right;
    float: left;
    font-size: 12px;
    padding-top: 20px;
    line-height: 20px;
  }
  .item-form .p-quantity{
    padding-top: 20px;
    width: 80px;
    float: left;
  }
  .item-form .p-sum{
    width: 100px;
    margin-right: 40px;
    text-align: right;
    font-family: verdana;
    float: left;
    color: #666;
    font-size: 12px;
    padding-top: 20px;
    line-height: 20px;
  }
  .item-form .p-action{
    padding-top: 20px;
    width: 75px;
    float: left;
  }
  .item-form .p-action span{
    color: #666;
    display: block;
    font-size: 12px;
    cursor: pointer;
  }
  .item-form .p-action span:hover{
    color: #E2231A;
  }
  .quantity-box{
    height: 22px;
  }
  .quantity-box .decrement,
  .quantity-box .increment{
    width: 17px;
    height: 20px;
    text-align: center;
    color: #666;
    cursor: pointer;
    border: 1px solid #cacbcb;
    line-height: 18px;
  }
  .quantity-box .itxt{
    width: 46px;
    height: 20px;
    border: none;
    border-top: 1px solid #cacbcb;
    border-bottom: 1px solid #cacbcb;
    text-align: center;
    color: #000;
  }
  .options-box{
    padding-left: 40px;
    height: 52px;
    border: 1px solid #f0f0f0;
    background: #fff;
  }
  .operation .cleaner-opt{
    color: #666;
    font-size: 12px;
    font-weight: 700;
    line-height: 50px;
    cursor: pointer;
  }
  .operation span:hover{
    color: #E2231A;
  }
  .options-box .comm-right{
    width: 650px;
  }
  .comm-right .btn-area{
    display: inline-block;
    width: 94px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    background: #000;
    text-decoration: none;
  }
  .comm-right .price-sum{
    text-align: right;
    color: #999;
    font-size: 12px;
    line-height: 50px;
    margin-right: 50px;
  }
  .comm-right .price-sum strong{
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }
</style>
