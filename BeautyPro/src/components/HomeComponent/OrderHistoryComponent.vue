<template>
  <div>
    <div class="OrderHistoryComponent">
      <ul class="order-list">
        <li>
          <div class="top clearfix">
            <div class="a">订单号：<b>123456789</b></div>
            <div class="b">下单时间：<b>2018-12-12 19:04:52</b></div>
          </div>
          <div class="hr"></div>
          <div class="main">
            <ul class="product-list">
              <li class="clearfix">
                <img class="product-img" src="/static/img/pr1.jpg">
                <div class="product-name">
                  <p>sdfasdfasdf</p>
                  <p>asdfsadfsdfsadfsdf</p>
                </div>
                <div class="product-number">123</div>
                <div class="product-paid">￥ <span>4564646</span></div>
              </li>
              <li class="clearfix">
                <img class="product-img" src="/static/img/pr1.jpg">
                <div class="product-name">
                  <p>sdfasdfasdf</p>
                  <p>asdfsadfsdfsadfsdf</p>
                </div>
                <div class="product-number">123</div>
                <div class="product-paid">￥ <span>4564646</span></div>
              </li>
            </ul>
          </div>
          <div class="bottom">
            <div class="address">
              地址地址地址地址地址
            </div>
            <div class="order-ms clearfix">
              <div class="paid-way">付款方式：<span>在线付款</span></div>
              <div class="paid-place">付款渠道：<span>支付宝</span></div>
              <div class="total">实付款：￥<span>123456</span></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderHistoryComponent"
    }
</script>

<style scoped>
  ul,li{
    padding: 0px;
    margin: 0px;
  }
  .OrderHistoryComponent{

  }
  .order-list{
    padding: 15px;
    background: white;
  }
  .order-list li{

  }
  .order-list .top{
    height: 40px;
    ;line-height: 40px;
    color: black;
  }
  .order-list .top>div{
    display: inline-block;
    float: left;
  }
  .order-list .top .a{
    margin-right: 15px;
  }
  .order-list li .hr{
    border-bottom: 1px solid #f0f3ef;
    margin: 10px 0;
  }
  .product-img,
  .product-name,
  .product-number,
  .product-paid{
    float: left;
    color: black;
  }
  .product-list .product-img{
    width: 120px;
    height: 120px;;
  }
  .product-name,
  .product-number,
  .product-paid{
    padding: 10px;
  }
  .product-name{
    width: 300px;
  }
  .product-number{
    width: 200px;
    text-align: center;
  }
  .product-paid{
    font-size: 12px;
    width: 200px;
    color: red;
  }
  .product-paid span{
    color: red;
  }
  .address{
    padding: 15px;
    color: black;
  }
  .order-ms{
    background: #f0f3ef;
  }
  .total{
    display: inline-block;
    padding:0 15px;
    float: right;
    background: black;
    height:36px;
  }
  .total,
  .total span{
    color: white;
    font-size: 14px;
    font-weight: bold;
    line-height: 36px;
  }
  .paid-way,
  .paid-place{
    padding:0 15px;
    display: inline-block;
    color: black;
    line-height: 36px;
  }
  .paid-way span,
  .paid-place span{
    color: black;
  }
</style>
