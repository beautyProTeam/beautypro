<template>

  <div class="HeaderComponent">
    <v-top-header></v-top-header>
    <div class="search-wrap">
      <div class="search-content clearfix">
        <router-link to="/">
          <img class="search-info-content-logo floatL" src="/static/img/sep_top_Logo.png">
        </router-link>
        <div class="search-info-content-searchWrap floatL">
          <div class="search-info-content-inputBox">
            <div class="input-box">
              <input type="text" placeholder="商品"><button>搜索</button>
            </div>
          </div>
          <div class="search-info-content-hotWord">
            <router-link to="/">热门搜索</router-link>
            <router-link to="/">热门搜索</router-link>
            <router-link to="/">热门搜索</router-link>
            <router-link to="/">热门搜索</router-link>
          </div>
        </div>
        <div class="search-info-content-miniCart-wrap clearfix floatR"
             @mouseleave="hideShoppingCart" :class="{'hover':isToggleShoppingCartDisplay}">
          <div class="search-info-content-miniCart-main floatR" @mousemove="toggleShoppingCartDisplay">
            <em class="shopping-bag" @mousemove-stop=""></em>
            购物袋<span class="shopping-num">0</span>件
          </div>
          <div class="search-info-content-miniCart-list floatR">
            <ul class="search-info-content-miniCart-itemWrap">
              <li class="clearfix">
                <div class="product-img floatL"><img class=" " src="/static/img/pr1.jpg"/></div>
                <div class="search-info-content-miniCart-item-info floatL">
                  <div class="p-0"><router-link to="/">克丽丝汀迪奥后台彩妆高光腮红盘</router-link></div>
                  <div class="p-1">10g,001</div>
                </div>
                <div class="search-info-content-miniCart-item-info-r floatR">
                  <div class="a">￥<em>145.00</em>x<em>1</em></div>
                  <div class="b"><router-link to="/" class="search-info-content-miniCart-item-delete">删除</router-link></div>
                </div>
              </li>
              <li class="clearfix">
                <div class="product-img floatL"><img class=" " src="/static/img/pr1.jpg"/></div>
                <div class="search-info-content-miniCart-item-info floatL">
                  <div class="p-0"><router-link to="/">克丽丝汀迪奥后台彩妆高光腮红盘</router-link></div>
                  <div class="p-1">10g,001</div>
                </div>
                <div class="search-info-content-miniCart-item-info-r floatR">
                  <div class="a">￥<em>145.00</em>x<em>1</em></div>
                  <div class="b"><router-link to="/" class="search-info-content-miniCart-item-delete">删除</router-link></div>
                </div>
              </li>
              <li class="clearfix">
                <div class="product-img floatL"><img class=" " src="/static/img/pr1.jpg"/></div>
                <div class="search-info-content-miniCart-item-info floatL">
                  <div class="p-0"><router-link to="/">克丽丝汀迪奥后台彩妆高光腮红盘</router-link></div>
                  <div class="p-1">10g,001</div>
                </div>
                <div class="search-info-content-miniCart-item-info-r floatR">
                  <div class="a">￥<em>145.00</em>x<em>1</em></div>
                  <div class="b"><router-link to="/" class="search-info-content-miniCart-item-delete">删除</router-link></div>
                </div>
              </li>
              <li class="clearfix">
                <div class="product-img floatL"><img class=" " src="/static/img/pr1.jpg"/></div>
                <div class="search-info-content-miniCart-item-info floatL">
                  <div class="p-0"><router-link to="/">克丽丝汀迪奥后台彩妆高光腮红盘</router-link></div>
                  <div class="p-1">10g,001</div>
                </div>
                <div class="search-info-content-miniCart-item-info-r floatR">
                  <div class="a">￥<em>145.00</em>x<em>1</em></div>
                  <div class="b"><router-link to="/" class="search-info-content-miniCart-item-delete">删除</router-link></div>
                </div>
              </li>
              <li class="clearfix">
                <div class="product-img floatL"><img class=" " src="/static/img/pr1.jpg"/></div>
                <div class="search-info-content-miniCart-item-info floatL">
                  <div class="p-0"><router-link to="/">克丽丝汀迪奥后台彩妆高光腮红盘</router-link></div>
                  <div class="p-1">10g,001</div>
                </div>
                <div class="search-info-content-miniCart-item-info-r floatR">
                  <div class="a">￥<em>145.00</em>x<em>1</em></div>
                  <div class="b"><router-link to="/" class="search-info-content-miniCart-item-delete">删除</router-link></div>
                </div>
              </li>
              <li class="clearfix">
                <div class="product-img floatL"><img class=" " src="/static/img/pr1.jpg"/></div>
                <div class="search-info-content-miniCart-item-info floatL">
                  <div class="p-0"><router-link to="/">克丽丝汀迪奥后台彩妆高光腮红盘</router-link></div>
                  <div class="p-1">10g,001</div>
                </div>
                <div class="search-info-content-miniCart-item-info-r floatR">
                  <div class="a">￥<em>145.00</em>x<em>1</em></div>
                  <div class="b"><router-link to="/" class="search-info-content-miniCart-item-delete">删除</router-link></div>
                </div>
              </li>
            </ul>
            <div class="search-info-content-miniCart-total clearfix">
              <span class="search-info-content-miniCart-total-span-first">共<em>1</em>件商品</span>
              <span class="search-info-content-miniCart-total-span-second">共计<em>145.00</em></span>
              <router-link to="/" class="search-info-content-miniCart-toCart">购物车</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation-wrap" :class="{'box-shadow':navigationWrapBoxShadow}">
      <div class="navigation-content clearfix">
        <div class="inPage floatL"
             @mouseleave="hoverNavigationDisplay"
             @mouseenter="mouseenterNavigationContent($event)">
          <div>全部商品类目</div>
          <div class="navigation-info-content-menu-list" @mouseleave="hoverNavigationDisplay" v-show="isDisplayNavigationContentMenu">
            <!--<ul class="navigation-info-content-menu-Col" v-for="kind in getKindsCopy">
              <li @mouseenter="hoverNavigationCol($event)">
                <span class="title">热门</span>
                <ul>
                  <li><router-link to="/">魅惑美唇</router-link></li>
                  <li><router-link to="/">塑造立体轮廓</router-link></li>
                  <li><router-link to="/">热销气垫</router-link></li>
                </ul>
              </li>
              <li @mouseenter="hoverNavigationCol($event)">
                <span class="title">功效</span>
                <ul>
                  <li><router-link to="/">保湿补水</router-link></li>
                  <li><router-link to="/">底妆修容</router-link></li>
                  <li><router-link to="/">美白</router-link></li>
                </ul>
              </li>
              <li @mouseenter="hoverNavigationCol($event)">
                <span class="title">护肤</span>
                <ul>
                  <li><router-link to="/">面膜</router-link></li>
                  <li><router-link to="/">美容仪器</router-link></li>
                  <li><router-link to="/">紧致立体轮廓</router-link></li>
                </ul>
              </li>
              <li>
                <span class="title">彩妆</span>
                <ul>
                  <li><router-link to="/">迪奥后台系列彩妆</router-link></li>
                  <li><router-link to="/">猫头鹰圣诞限量</router-link></li>
                </ul>
              </li>
              <li>
                <span class="title">香水</span>
                <ul>
                  <li><router-link to="/">新品香氛上市</router-link></li>
                  <li><router-link to="/">迪奥真我圣诞礼盒</router-link></li>
                </ul>
              </li>
              <li>
                <span class="title">工具</span>
                <ul>
                  <li><router-link to="/">美妆蛋套装</router-link></li>
                  <li><router-link to="/">丝芙兰豪华刷具套装</router-link></li>
                </ul>
              </li>
              <li>
                <span class="title">男士护肤</span>
                <ul>
                  <li><router-link to="/">清爽护肤不油腻</router-link></li>
                  <li><router-link to="/">冬季保湿精选</router-link></li>
                </ul>
              </li>
              <li>
                <span class="title">洗浴护体</span>
                <ul>
                  <li><router-link to="/">洗浴润体</router-link></li>
                  <li><router-link to="/">冬季护手</router-link></li>
                  <li><router-link to="/">唇情蜜语</router-link></li>
                </ul>
              </li>
              <li class="last">
                <span class="title">美发护发</span>
                <ul>
                  <li><router-link to="/">摆脱受损秀发</router-link></li>
                  <li><router-link to="/">滋润发丝改善毛躁</router-link></li>
                </ul>
              </li>
            </ul>-->
            <ul class="navigation-info-content-menu-Col">
              <li @mouseenter="hoverNavigationCol($event)">
                <span class="title">热门</span>
                <ul>
                  <li><router-link to="/">魅惑美唇</router-link></li>
                  <li><router-link to="/">塑造立体轮廓</router-link></li>
                  <li><router-link to="/">热销气垫</router-link></li>
                </ul>
              </li>
              <li @mouseenter="hoverNavigationCol($event)">
                <span class="title">功效</span>
                <ul>
                  <li><router-link to="/">保湿补水</router-link></li>
                  <li><router-link to="/">底妆修容</router-link></li>
                  <li><router-link to="/">美白</router-link></li>
                </ul>
              </li>
            </ul>
            <ul class="navigation-info-content-menu-Col">
              <li v-for="kind in kindsCopy" v-bind:value="kind.id">
                <span class="title" v-bind:value="kind.id">{{kind.name}}</span>
                <ul>
                  <li  v-for="small in kind.smallkind" v-bind:value="small.id"><router-link to="/">{{small.name}}</router-link></li>
                </ul>
              </li>
            </ul>

            <div class="navigation-info-content-menu-list-content" v-show="isToggleMenuContentDisplay">
              <div>
                <div class="navigation-info-content-hover-info">
                  <div class="navigation-info-content-hover-info-title">热门</div>
                  <ul class="navigation-info-content-hover-info-category">
                    <li>
                      <ul>
                        <li>
                          <router-link to="/" class="navigation-info-content-hover-info-category-title">热门</router-link>
                          <div class="navigation-info-content-hover-info-category-group">
                            <router-link to="/">热门</router-link>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                  </ul>
                  <div class="navigation-info-content-hover-info-logoAdPosition">
                    <img class="">
                    <img class="">
                    <img class="">
                    <img class="">
                  </div>
                </div>
                <img class="navigation-info-content-hover-adPosition">
              </div>
            </div>
          </div>
        </div>

        <ul class="navigation-info-content-menu-Row floatL">
          <li><router-link to="/">畅销榜单</router-link></li>
          <li><router-link to="/">独家发售</router-link></li>
          <li><router-link to="/">礼物套装</router-link></li>
          <li><router-link to="/">全部品牌</router-link></li>
          <li><router-link to="/">预约中心</router-link></li>
          <li><router-link to="/">美力学院</router-link></li>
        </ul>
        <img class="search-info-content-shopping floatR" src="/static/img/navigation_shopping.png">
      </div>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
 import TopHeaderComponent from '../HeaderComponent/TopHeaderComponent';
const categoryInfo = {
  "0":{},
};
export default {
  name: 'HeaderComponent',
  props:["display"],
  components:{
   "v-top-header":TopHeaderComponent,
  },
  created(){
    let _this= this;
    if ( window.kindcopy == undefined || window.kindcopy.length == 0) {
      this.$axios.get('http://localhost:8088/BeautyProServer/api/v1/kindToSmall').then((resp) => {
        /*window.kindmap=resp.data;
        var kinds=window.kindmap;*/
        var kinds=resp.data;
        for(var k in kinds){
          var cata=Object.keys(kinds[k]);
          if(!JSON.parse(cata[0])["smallkind"]){
            var kcopy=JSON.parse(cata[0]);
            kcopy["smallkind"]=kinds[k][cata[0]];
            kinds[k]=kcopy;
          }else{
            kinds[k]=JSON.parse(cata[0]);
          }

        }
        window.kindmap=kinds;
        var kindscopy=kinds;
        for(var i=0;i<kindscopy.length;i++){
          var sk=kindscopy[i].smallkind;
          var skcopy=[];
          for(var j=0;j<3;j++){
            skcopy.push(sk[j]);
          }
          kindscopy[i].smallkind=skcopy;
        }
        window.kindcopy=kindscopy;
        _this.kindsCopy = kindscopy
        console.log(window.kindmap);
      }).catch((resp) => {
        alert("请求失败");
      });
    } else {
      _this.kindsCopy = window.kindcopy;
    }

    var _that=this;
    if ( window.kinddetails == undefined || window.kinddetails.length == 0) {
      this.$axios.get('http://localhost:8088/BeautyProServer/api/v1/kindToSmallToDetail').then((resp) => {
        var kinddetails=resp.data;
        for(var k in kinddetails){
          var cata=Object.keys(kinddetails[k]);
          if(!JSON.parse(cata[0])["smallkind"]){
            var kcopy=JSON.parse(cata[0]);
            kcopy["smallkind"]=kinddetails[k][cata[0]];
            var kcopysmallKind=kcopy["smallkind"];
            for(var smk in kcopysmallKind){
              var smkcata=Object.keys(kcopysmallKind[smk]);
              if(!JSON.parse(smkcata[0])["kinddetail"]){
                var smkcopy=JSON.parse(smkcata[0]);
                smkcopy["kinddetail"]=kcopysmallKind[smk][smkcata[0]];
                kcopysmallKind[smk]=smkcopy;
              }else{
                kcopysmallKind[smk]=JSON.parse(smkcata[0])
              }
            }
            kinddetails[k]=kcopysmallKind;
          }else{
            kinddetails[k]=JSON.parse(cata[0]);
          }
        }
        window.kinddetails=kinddetails;
        _that.kinddetails=kinddetails;
      }).catch((resp) => {
        alert("请求失败");
      });
    }else{
      _that.kinddetails=kinddetails;
    }



  },
  data(){
    return {
      isToggleShoppingCartDisplay:false,
      isDisplayNavigationContentMenu:false,
      navigationWrapBoxShadow:false,
      isToggleMenuContentDisplay:false,
      kindsCopy:[],
      kinddetails:[]
    }
  },
  beforeMount:function(){
    console.log();
    if(this.display == "show"){
      this.isDisplayNavigationContentMenu = true;
    }else{
      this.navigationWrapBoxShadow = true;
    }
  },
  methods: {
    hideShoppingCart(){
      this.isToggleShoppingCartDisplay = false;
    },
    toggleShoppingCartDisplay(event){
      if(!this.isToggleShoppingCartDisplay){
        this.isToggleShoppingCartDisplay = !this.isToggleShoppingCartDisplay;
      }
    },
    hoverNavigationCol(event){
      console.log(event.target.nodeName);
      this.isToggleMenuContentDisplay = true;
    },
    mouseenterNavigationContent(event){
      if(this.display == "hover" && this.isDisplayNavigationContentMenu == false){
        this.isDisplayNavigationContentMenu = !this.isDisplayNavigationContentMenu;
        console.log(event.target.nodeName);
      }
    },
    hoverNavigationDisplay(event){
      if(this.display == "hover" && this.isDisplayNavigationContentMenu == true){
        this.isDisplayNavigationContentMenu = !this.isDisplayNavigationContentMenu;
        console.log(event.target.nodeName);
      }
      this.isToggleMenuContentDisplay = false;

    }
  },
  computed:{
    getKinds: function(){
      return window.kindmap;
    },
    getKindsCopy: function(){
      /*return this.kindcopy;*/
      return window.kindcopy;
    },
    getKindDetails: function(){
      return window.kinddetails;
    }
  }
};
</script>

<style lang="stylus" scoped>
  .HeaderComponent{
    background :#fff;
  }
  .search-wrap{
    margin-bottom :5px;
  }
  .search-wrap .search-content{
    width:1190px;
    margin:0 auto;
    padding-top:24px;
  }
  .search-wrap .search-content .search-info-content-logo{
    margin-right :80px;
  }
  .search-info-content-inputBox{

  }
  .search-info-content-inputBox input[type=text]{
    width: 540px;
    height: 36px;
    line-height: 34px;
    padding-left: 20px;
    font-size: 12px;
    border:1px solid #c8c8c8;
    border-right:none;
  }
  .search-info-content-inputBox button{
    width :90px;
    height :36px;
    border :none;
    background :#000;
    color :#fff;
    vertical-align: top;
  }
  .search-info-content-hotWord a{
    display: inline-block;
    padding: 0 4px;
    font-size: 12px;
    color: #acacac;
    text-decoration none;
  }
  .search-info-content-hotWord a:hover{
    color :red;
  }
  .search-info-content-miniCart-wrap{
    width: 209px;
    height: 36px;
    cursor: pointer;
    position: relative;
  }
  .search-info-content-miniCart-main{
    width: 188px;
    height: 35px;
    border: 1px solid #ddd;
    background-color: #fff;
    line-height: 35px;
    font-size: 16px;
    color: #000;
    text-align: center;
    box-sizing:unset;
  }
  .shopping-bag{
    width: 18px;
    height: 26px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 10px;
    background-image: url(/static/img/shopping_bag.png);
    content: "";
  }
  .shopping-num{
    color: #d1152a;
    padding-left: 5px;
    padding-right: 5px;
  }
  .search-info-content-miniCart-wrap.hover .search-info-content-miniCart-list{
    display :block;
  }
  .search-info-content-miniCart-wrap.hover .search-info-content-miniCart-main{
    border-bottom-color :#fff;
  }
  .search-info-content-miniCart-list{
    display :none;
    width :412px;
    //border: 1px solid #ddd;
    border-right :1px solid #ddd;
    background-image :url(/static/img/search_minicart_hover_border_top.png);
    background-color: #fff;
    background-repeat: no-repeat;
    z-index :10;
    position :relative;
  }
  .search-info-content-miniCart-total{
    background-color: #f7f7f7;
    padding: 8px 0;
    border-left: 1px solid #c8c8c8;
    border-bottom: 1px solid #c8c8c8;
  }
  .search-info-content-miniCart-total span{
    font-size: 14px;
    margin-left: 20px;
    color:#000;
    line-height: 28px;
  }
  .search-info-content-miniCart-total em{
    margin: 0 2px;
    color: #000;
    font-weight: 400;
    font-style: normal;
  }
  .search-info-content-miniCart-toCart{
    width: 65px;
    text-align: center;
    background-color: #000;
    color: #fff;
    height: 28px;
    line-height: 28px;
    float: right;
    margin-right: 16px;
    text-decoration:none;
  }
  .search-info-content-miniCart-itemWrap{
    background-color: #fff;
    border-left: 1px solid #c8c8c8;
    min-height: 20px;
    max-height: 363px;
    overflow-y: scroll;
    margin:1px 0 0 0;
    padding :15px;
  }
  .search-info-content-miniCart-itemWrap li{
    background-color: #fff;
    margin-bottom: 21px;
    padding :15px;
  }
   .search-info-content-miniCart-itemWrap .product-img{
     height:100%;
   }
  .search-info-content-miniCart-itemWrap .product-img img{
    width :50px;
    height :50px;
    vertical-align :middle;
  }
  .search-info-content-miniCart-item-info {
    width :180px;
    height :50px;
    font-size:12px;
  }
  .search-info-content-miniCart-item-info .p-0{
    height :34px;
    overflow:hidden;
  }
  .search-info-content-miniCart-item-info .p-0 a{
    color :#000;
    font-weight 400;
    text-decoration :none;
  }
  .search-info-content-miniCart-item-info .p-1{
    height :16px;
    line-height 16px;
    color :#000;
    font-size:12px;
    overflow:hidden;
  }
  .search-info-content-miniCart-item-info-r{
    height: 50px;
    text-align: right;
    margin-right: 10px;
    color :#000;
    font-weight :400;
    font-size :12px;
  }
  .search-info-content-miniCart-item-info-r em{
    color :#000;
    font-style :normal;
  }
  .search-info-content-miniCart-item-delete{
    display :inline-block;
    color:#000;
    text-decoration :none;
    margin-top :19px;
  }
  .search-info-content-miniCart-item-delete:hover{
    color :red;
  }
  .search-info-content-miniCart-item-info-r a{

  }
  .navigation-wrap{

  }
  .navigation-wrap.box-shadow{
    box-shadow: 0px 2px 2px 0 rgba(0,0,0,.15);
  }
  .navigation-content {
    width :1190px;
    margin :0 auto;
    height: 36px;
    line-height :36px;
    position :relative;
    z-index :9;
  }
  .navigation-content .inPage{
    width: 240px;
    height: 36px;
    line-height: 36px;
    background-image :url("/static/img/classified.png");
    background-size: 100% 100%;
    color :#fff;
    font-weight :400;
    padding-left: 15px;
    font-size: 16px;
    cursor :pointer;
  }
  .navigation-info-content-menu-Row{
    display :block;
    padding-left :40px;
    min-width: 760px;
    margin-bottom :0px;
  }
  .navigation-info-content-menu-Row li{
    display:inline-block;
    margin-right :40px;

  }
  .navigation-info-content-menu-Row li a{
    color :#000;
    font-size :16px;
    text-decoration :none;
  }
  .navigation-info-content-menu-Row li a:hover{
    color :red;
  }
  .search-info-content-shopping{
    position :absolute;
    width: 153px;
    height: 40px;
    cursor :pointer;
    right :0px;
    top:-6px;
  }
  .navigation-info-content-menu-list{
    position :absolute;
    top:36px;
    left:0px;
    width: 240px;
    background: #fff;
    min-height: 550px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
  }
   .navigation-info-content-menu-Col{
     margin-bottom:0px;
   }
  .navigation-info-content-menu-Col>li{
    padding: 8px 0 8px 15px;
    display: block;
    background-color: #fff;
    line-height: 20px;
    border-bottom: 1px solid #f5f5f5;
    position: relative;
  }
  .navigation-info-content-menu-Col>li.last{
    border-bottom-color :#fff;
  }
   .navigation-info-content-menu-Col a{
     text-decoration :none;
     font-size: 12px;
     color: #8a8a8a;
   }
  .navigation-info-content-menu-Col a:hover{
    color :#dc002f;
  }
  .navigation-info-content-menu-Col>li>span{
    color: #000;
    line-height: 22px;
    font-size: 14px;
    margin-right: 10px;
    display: block;
  }
  .navigation-info-content-menu-Col .title{
    font-weight: 700;
  }
  .navigation-info-content-menu-Col li li{
    display :inline-block;
    margin-right :10px;
  }

  .navigation-info-content-menu-list-content{
    position :absolute;
   /* display :none;*/
    width: 950px;
    background: #fff;
    top: 0px;
    left: 240px;
    height: 550px;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    padding: 32px 40px 40px 30px;
    box-sizing: border-box;
  }
  .navigation-info-content-hover-info{
    float: left;
    width: 600px;
  }
  .navigation-info-content-hover-adPosition{
    float: right;
    width: 270px;
    height: 470px;
  }
  .navigation-info-content-hover-info-title{
    margin-bottom: 20px;
    height: 39px;
    padding-bottom: 17px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    font-size: 18px;
    line-height: 39px;
    font-weight: 400;
    box-sizing: unset;
  }
  .navigation-info-content-hover-info-category{
    height: 350px;
    width: 600px;
    float: left;
    overflow: hidden;
  }
  .navigation-info-content-hover-info-category>li{
    width: 160px;
    margin-right: 40px;
    min-height: 200px;
    display: block;
    float: left;
  }
  .navigation-info-content-hover-info-logoAdPosition{
    padding: 0 0 50px;
    float: left;
  }
  .navigation-info-content-hover-info-logoAdPosition img{
    display: inline-block;
    width: 135px;
    height: 60px;
    margin-right: 9px;
  }
  .navigation-info-content-hover-info-category-title{
    color: #000;
    font-size: 14px;
    line-height: 18px;
    width: 140px;
    float: left;
    text-decoration :none;
  }
  .navigation-info-content-hover-info-category-group a{
    margin-right: 12px;
    color: #8b8b8b;
    line-height: 22px;
    float: left;
    text-decoration :none;
  }
  .navigation-info-content-hover-info-category-group a:hover{
    color: #e00;
  }
</style>
