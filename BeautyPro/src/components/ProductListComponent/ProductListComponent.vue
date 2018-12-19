<template>
  <div>
    <v-header display="hover"></v-header>
    <div class="ProductListComponent">
      <div class="one-layot">
        <div class="box-content clearfix">
          <span class="floatL">查询结果</span>
          <span class="floatR">共11件商品</span>
        </div>
      </div>
      <div class="two-layot">
        <div class="box-content clearfix">
          <ul class="filter_item_cont">
            <li class="clearfix">
              <div class="filter_title">品牌</div>
              <div class="filter_if">
                <ul class="brand-list clearfix">
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <img src="/static/img/sephoracollection_144X60.png">
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="brand_btn">
                <span class="show_more">更多</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="three-layot">
        <div class="box-content clearfix">
          <ul class="filter_item_cont">
            <li class="clearfix">
              <div class="filter_title">分类</div>
              <div class="filter_if">
                <ul class="classification-list">
                  <li><router-link to="/">护肤</router-link></li>
                  <li><router-link to="/">彩妆</router-link></li>
                  <li><router-link to="/">香水</router-link></li>
                  <li><router-link to="/">工具</router-link></li>
                  <li><router-link to="/">男士护肤</router-link></li>
                  <li><router-link to="/">洗浴护体</router-link></li>
                  <li><router-link to="/">美发护发</router-link></li>
                </ul>
              </div>
              <div class="brand_btn">
                <span class="show_more">更多</span>
              </div>
            </li>
            <li class="clearfix">
              <div class="filter_title">功效</div>
              <div class="filter_if">
                <ul class="efficacy-list">
                  <li><router-link to="/">保湿补水</router-link></li>
                  <li><router-link to="/">提亮肤色</router-link></li>
                  <li><router-link to="/">提亮肤色</router-link></li>
                  <li><router-link to="/">提亮肤色</router-link></li>
                  <li><router-link to="/">提亮肤色</router-link></li>
                  <li><router-link to="/">提亮肤色</router-link></li>
                  <li><router-link to="/">提亮肤色</router-link></li>
                </ul>
              </div>
              <div class="brand_btn">
                <span class="show_more">更多</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import HeaderComponent from '../HeaderComponent/HeaderComponent';
  import FooterComponent from '../FooterComponent/FooterComponent';
    export default {
        name: "ProductListComponent",
      components:{
        'v-header': HeaderComponent,
        'v-footer': FooterComponent
      }
    }
</script>

<style scoped>
  span{
    color: #000;
  }
  .hr{
    border-bottom: 1px solid #aaa;
    margin-bottom: 40px;
  }
  .hr2{
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
  }
  .ProductListComponent{

  }
  .box-content{
    width: 1190px;
    margin: 0 auto;
    padding: 30px 0 20px;
    font-size: 12px;
  }
  .filter_item_cont>li{
    border-bottom: 1px solid #eee;
    padding-top: 15px;
  }
  .one-layot .box-content{

  }
  .one-layot .box-content span{
    font-weight: 400;
  }
  .two-layot .filter_if ul{
    padding-bottom: 14px;
  }
  .filter_title,.filter_if,.brand_btn{
    float: left;
    color: #000;
  }
  .filter_title{
    font-weight: 600;
    padding-left: 15px;
    width: 105px;
    font-size: 14px;
    vertical-align: top;
  }
  .filter_if{
    width: 969px;
  }
  .three-layot .filter_if a:hover,
  .four-layot .filter_if a:hover{
    color: #e00;
  }
  .three-layot .filter_if li,
  .four-layot .filter_if li{
    float: left;
    width: 138px;
    margin-bottom: 15px;
    height: 16px;
  }

  .three-layot .filter_if a,
  .four-layot .filter_if a{
    color: #000;
    text-decoration: none;
  }
  .brand_btn{
    vertical-align: top;
    font-size: 12px;
  }
  .brand_btn span{
    display: inline-block;
    float: left;
    margin-right: 10px;
    color: #666;
    cursor: pointer;
  }
  .brand_btn span:hover{
    color: #e00;
  }
  .brand_btn .show_more:after{
    margin-left: 5px;
    display: inline-block;
    width: 9px;
    height: 6px;
    background-position: 0 -33px;
    transition: background-position .15s ease-in-out;
    -webkit-transition: background-position .15s ease-in-out;
    -moz-transition: background-position .15s ease-in-out;
    -ms-transition: background-position .15s ease-in-out;
    background-image: url(/static/img/category_icon.png);
    content: "";
  }
  .brand_btn .show_more:hover:after{
    background-position: 0 -42px;
  }
  .brand-list li{
    float: left;
    width: 132px;
    height: 55px;
    border: 1px solid #ddd;
    position: relative;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    margin-left: -1px;
    margin-top: -1px;
  }
</style>
