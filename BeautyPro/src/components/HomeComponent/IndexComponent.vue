<template>
<div>

  <div>
    <div class="item-wrap">
      <div class="mt">
        我的账号
        <div class="my-me-opt">
          <router-link to="/home/updatemyinfo">修改信息</router-link>
        </div>
      </div>
      <div class="mc clearfix">
        <div class="c">
          <label>呢称</label>
          <!--<p>123456789@qq.com</p>-->
          <p>{{user.nickname}}</p>
        </div>
        <div class="c">
          <label>性别</label>
          <!--<p>女士</p>-->
          <p v-if="user.sex == 1">男</p>
          <p v-else>女</p>
        </div>
        <div class="c">
          <label>手机号</label>
          <!--<p>123456789@qq.com</p>-->
          <p>{{user.phonenum}}</p>
        </div>
        <div class="c">
          <label>邮箱</label>
         <!-- <p>123456789@qq.com</p>-->
          <p>{{user.email}}</p>
        </div>

        <div class="c">
          <label>订单总数</label>
          <p>123</p>
        </div>
      </div>
    </div>
    <div class="item-wrap">
      <div class="mt">待收货</div>
      <div class="mc">
        <ul class="wait-order-list">
          <li>
            <div class="order-top-ms">
              <div class="order-number">订单号：<span>12345689</span></div>
              <div class="order-time">下单时间：<span>2018-12-12 17:00:53</span></div>
              <div class="order-opt">
                <router-link to="/home" class="cancel-order-a">取消订单</router-link>
              </div>
            </div>
            <div class="hr"></div>
            <ul class="order-main-header clearfix">
              <li class="product-ms">商品</li>
              <li class="product-unit-price">单价</li>
              <li class="product-number">数量</li>
              <li class="product-paid">实付金额</li>
            </ul>
            <ul class="order-main">
              <li class="clearfix">
                <div class="product-img">
                  <img src="/static/img/pr1.jpg">
                </div>
                <div class="product-name">
                  <p>测试测试测试测试测试测试测试测试测试测试</p>
                  <p>规格：2*s</p>
                </div>
                <div class="product-unit-price">123</div>
                <div class="product-number">12</div>
                <div class="product-paid">12</div>
              </li>
              <li class="clearfix">
                <div class="product-img">
                  <img src="/static/img/pr1.jpg">
                </div>
                <div class="product-name">
                  <p>测试测试测试测试测试测试测试测试测试测试</p>
                  <p>规格：2*s</p>
                </div>
                <div class="product-unit-price">123</div>
                <div class="product-number">12</div>
                <div class="product-paid">12</div>
              </li>
            </ul>
          </li>
          <li>
            <div class="order-top-ms">
              <div class="order-number">订单号：<span>12345689</span></div>
              <div class="order-time">下单时间：<span>2018-12-12 17:00:53</span></div>
              <div class="order-opt">
                <router-link to="/home" class="cancel-order-a">取消订单</router-link>
              </div>
            </div>
            <div class="hr"></div>
            <ul class="order-main-header clearfix">
              <li class="product-ms">商品</li>
              <li class="product-unit-price">单价</li>
              <li class="product-number">数量</li>
              <li class="product-paid">实付金额</li>
            </ul>
            <ul class="order-main">
              <li class="clearfix">
                <div class="product-img">
                  <img src="/static/img/pr1.jpg">
                </div>
                <div class="product-name">
                  <p>测试测试测试测试测试测试测试测试测试测试</p>
                  <p>规格：2*s</p>
                </div>
                <div class="product-unit-price">123</div>
                <div class="product-number">12</div>
                <div class="product-paid">12</div>
              </li>
              <li class="clearfix">
                <div class="product-img">
                  <img src="/static/img/pr1.jpg">
                </div>
                <div class="product-name">
                  <p>测试测试测试测试测试测试测试测试测试测试</p>
                  <p>规格：2*s</p>
                </div>
                <div class="product-unit-price">123</div>
                <div class="product-number">12</div>
                <div class="product-paid">12</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<script>

    export default {
      name: "index-component",
      data(){
        return {
          user: {}
        }
      },
      created(){
        this.user=this.$store.state.userGlobal;
        console.log("this userGlobal");
        console.log(this.$store.state.userGlobal);
        console.log("end");
      },
      components:{
      }

    }
</script>

<style scoped>
  .item-wrap{
    margin-bottom: 20px;
    background-color: #fff
  }
  .item-wrap .mt{
    padding: 0 20px;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #f0f3ef;
    overflow: visible;
  }
  .item-wrap .mt .my-me-opt{
    float: right;

  }
  .item-wrap .mc{
    padding:20px;
  }
  .item-wrap .mc .c{
    width: 20%;
    float: left;
  }
  .wait-order-list{

  }
  .wait-order-list .order-top-ms{
    height: 30px;
    color: black;
  }
  .order-top-ms .order-opt{
    float: right;
  }
  .cancel-order-a{
    color: red;
  }

  .wait-order-list .order-top-ms .order-number,
  .wait-order-list .order-top-ms .order-time{
    display: inline-block;
    float: left;
    margin-right: 20px;
  }
  .wait-order-list .order-top-ms span{
    color: black;
    font-weight: bold;
  }
  .order-main-header li{
    display: inline-block;
    float: left;
    color: black;
    text-align: center;
    margin-top: 10px;
  }
  .order-main-header .product-ms{
    width: 520px;
  }
  .order-main-header .product-number{
    width: 100px;
  }
  .order-main-header .product-paid{
    width: 200px;
  }
  .order-main-header .product-unit-price{
    width: 100px;
  }
  .wait-order-list .product-unit-price,
  .wait-order-list .product-img,
  .wait-order-list .product-name,
  .wait-order-list .product-paid,
  .wait-order-list .product-number{
    float: left;
  }
  .order-main li{
    height: 120px;
    margin-bottom: 20px;
  }
  .wait-order-list .product-img img{
    width: 120px;
    height: 120px;
  }
  .order-main .product-unit-price,
  .order-main .product-paid,
  .order-main .product-name,
  .order-main .product-number{
    padding: 15px;
  }
  .wait-order-list .product-name,
  .wait-order-list .product-specification{
    width: 400px;
    color: black;
    height: 100%;
    padding: 15px;
  }
  .wait-order-list .product-number{
    width: 100px;
    text-align: center;
    color: black;

  }
  .wait-order-list .product-unit-price{
    width: 100px;
    text-align: center;
    color: black;
  }
  .wait-order-list .product-paid{
    width: 200px;
    text-align: center;
    color: black;
  }
  .wait-order-list li>.hr{
    border-bottom: 1px solid #f0f3ef;
  }
</style>
