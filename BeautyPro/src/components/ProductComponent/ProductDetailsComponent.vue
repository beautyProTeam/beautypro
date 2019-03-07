<template>
  <div>
    <v-header display="hover"></v-header>
    <div class="ProductDetailsComponent">
      <div class="box-content">
        <div class="crumbs">

        </div>
      </div>
      <div class="box-content">
        <div class="product-details-box clearfix">
          <div class="productImageChange">
            <!--<img src="/static/img/pr1.jpg">-->
            <img :src="gooddetail.imgUrl">
          </div>
          <div class="ProductMainMixture">
            <div class="title">
              <div class="testBox">
                <!--<h1>SK-II护肤精华露肌因光蕴环彩钻白精华礼盒</h1>-->
                <h1>{{gooddetail.name}}</h1>
                <!--<p>SK-II PITERA™ ESSENCE AND GENOPTICS AURA</p>-->
                <p>{{gooddetail.enName}}</p>
                <!--<p>价值：3160，优惠折扣：21%。修护力量 快速渗透 提亮润肤 提拉紧致</p>-->
                <p>{{gooddetail.subName}}</p>
              </div>
              <!--<img alt="SK-II" title="SK-II" class="logo" src="/static/img/skii_144X60.png">-->
              <img alt="SK-II" title="SK-II" class="logo" :src="brand.imgUrl">
            </div>
            <div class="price">
              <p class="one">价格</p>
              <p class="two">￥</p>
              <!--<p class="three">2490</p>-->
              <p>{{gooddetail.price}}</p>
              <span class="tig">新品</span>
            </div>
            <div class="capacityElse clearfix">
              <p class="title">规格</p>
              <ul class="boxList">
                <li class="current"><router-link to="/">套装</router-link></li>
              </ul>
            </div>
            <div class="fourButton clearfix">
              <div class="number">
                <div class="numberBox">
                  <input type="text" class="txt20" value="1" v-model="goodCount">
                </div>
                <div class="arrow">
                  <div class="topArrow curPoint" @click="addCount">
                    <div class="icon1"></div>
                  </div>
                  <div class="bottomArrow" @click="reduceCount">
                    <div class="icon2"></div>
                  </div>
                </div>
              </div>
              <div class="addCartButton yes" @click="addToCart">
                <p>加入购物车</p>
                <div class="icon"></div>
              </div>
              <div class="clearFix"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-content clearfix">
        <div class="guessYouLike">
          <div class="title"><p>猜你喜欢</p></div>
          <ul class="guessYouLike-product-list">
            <li>
              <router-link to="/">
                <img src="/static/img/pr1.jpg">
                <p class="header">SK-II</p>
                <div class="blackLine"></div>
                <div class="mainText">SK-II护肤精华露礼盒</div>
                <div class="price"><span>￥</span><span>1450</span></div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="/static/img/pr1.jpg">
                <p class="header">SK-II</p>
                <div class="blackLine"></div>
                <div class="mainText">SK-II护肤精华露礼盒</div>
                <div class="price"><span>￥</span><span>1450</span></div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="/static/img/pr1.jpg">
                <p class="header">SK-II</p>
                <div class="blackLine"></div>
                <div class="mainText">SK-II护肤精华露礼盒</div>
                <div class="price"><span>￥</span><span>1450</span></div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="/static/img/pr1.jpg">
                <p class="header">SK-II</p>
                <div class="blackLine"></div>
                <div class="mainText">SK-II护肤精华露礼盒</div>
                <div class="price"><span>￥</span><span>1450</span></div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="/static/img/pr1.jpg">
                <p class="header">SK-II</p>
                <div class="blackLine"></div>
                <div class="mainText">SK-II护肤精华露礼盒</div>
                <div class="price"><span>￥</span><span>1450</span></div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="MainModule">
          <ul class="rightMainNav clearfix">
            <li class="now">基本信息</li>
            <li><a href="#go-forth_comments" hidden>所有评论</a></li>
          </ul>
          <div class="leftLine">
            <div class="sku clearfix">
              <!--<span>规格: 套装</span>
              <span>货号: 458067</span>-->
              <span>规格: {{gooddetail.guige}}</span>
              <span>货号: {{gooddetail.huohao}}</span>
            </div>
            <div class="skuDetail">
              <ul>
                <li>
                  <div class="title"><div class="icon"></div>产品功效</div>
                  <!--<div class="text">
                    "1.护肤精华露230ml:让肌肤晶莹剔透。为肌肤打好基础，改善肌肤，让脸上的问题淡化，肌肤变细致 2.SK-II肌因光蕴环采钻白精华露30ml：提亮肤色淡化隐藏斑，保湿抗氧化，改善肤色问题。 3.SK-II护肤洁面霜20g: 把污垢包裹然后带走，去除老旧角质和不需要的油脂，性质温和，用后肌肤滋润光滑不紧绷。 4.微肌因赋活修护精华霜15g:从根源提升紧致度，细致肌肤，紧实毛孔，改善肌肤。 "
                  </div>-->
                  <div class="text">
                    {{gooddetail.effect}}
                  </div>
                </li>
                <li>
                  <div class="title"><div class="icon"></div>主要成分</div>
                  <!--<div class="text">
                    "1.护肤精华露230ml:“神仙水”每瓶含大量的天然酵母萃取物PITERA，同步提升5大美肌维度，肌肤晶莹剔透。 2.SK-II肌因光蕴环采钻白精华露30ml：西梅萃取精华，改善斑点暗黄泛红，令肌肤透亮白皙。 3.护肤洁面霜20g*2:蕴含SK-II Pitera、水解亚麻子提取物及保湿成分 4.微肌因赋活修护精华霜15g*2:富含Pitera，滋润修护肌肤。 "
                  </div>-->
                  <div class="text">
                    {{gooddetail.mainContain}}
                  </div>
                </li>
                <li>
                  <div class="title"><div class="icon"></div>产地</div>
                  <!--<div class="text">
                    火星
                  </div>-->
                  <div class="text">
                   {{gooddetail.productAddress}}
                  </div>
                </li>
              </ul>
            </div>
            <div class="forth_comments" hidden>
              <div class="ModuleCETitle">
                <a href="javascript:;" id="go-forth_comments"><p>商品评论</p></a>
                <p>COMMENTS</p>
                <div class="shortLine"></div>
              </div>
              <div class="titleTab_noComments">
                <div class="noComments">
                  <div class="write"></div>
                  <p>此商品暂时还没有评价哦~</p>
                </div>
              </div>
              <div class="forth_comments-content">

              </div>
            </div>
            <div class="price">
              <div class="ModuleCETitle">
                <a href="javascript:;" id="go-price"><p>价格声明</p></a>
                <p>PRICE STATEMENT</p>
                <div class="shortLine"></div>
              </div>
              <p>
                本店商品标注的促销价，为此商品的实际售价。本店标注的其他价格信息，如划线价、专柜价、建议零售价、价值等，
                为仅供消费者参考的市场价格信息，来源为有关商品实体店的柜台售价、品牌方建议零售价或者根据有关商品正装产品售价和容量推算的价值等，
                便于您了解市场行情和价格变动。但是，由于地区、时间和行情波动因素，这些价格的实际情况可能与本店标注的其他价格信息有所不同。
              </p>
            </div>
            <div class="desktopHtml" v-html="gooddetail.desktopHtml">
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import HeaderComponent from '../HeaderComponent/HeaderComponent';
  import FooterComponent from '../FooterComponent/FooterComponent';
  import $ from 'jquery';
  import router from "../../router/index.js";
    export default {
      name: "ProductDetailsComponent",
      components:{
        'v-header': HeaderComponent,
        'v-footer': FooterComponent
      },
      data(){
        return {
          goodId:0,//由其他组件传过来的参数
          gooddetail:{},
          brand:{},
          goodCount: 1,
          good:{}
        }

      },
      created(){
        if(this.$route.query.goodId){
          this.goodId=this.$route.query.goodId;
          var data={
            goodId: this.goodId
          };
          this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/brand",{params:data}).then((resp) => {
            if(resp.data.length>0){
             let brandlist= resp.data;
             this.brand=brandlist[0];
            }
          }).catch((resp) => {
            alert("请求失败");
          });

          this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/goodinfo",{params:data}).then((resp) => {
            let goodinfolist=resp.data;
            if(goodinfolist.length>0){
              this.gooddetail=goodinfolist[0];
            }

          }).catch((resp) => {
             alert("获取商品详情失败");
          });


          this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/good/condition",{params:{id:this.goodId}}).then((resp) => {
            let goodlist=resp.data;
            if(goodlist.length>0){
              var g=goodlist[0];
              this.good=g;
            }

          }).catch((resp) => {
            alert("获取商品失败");
          });

        }


      },
      methods:{
        addToCart(){
          /*this.goodId*/
          if(this.gooddetail){
            let gooddetailcopy=this.gooddetail;
            gooddetailcopy["goodCount"]=this.goodCount;
            let gooddetailcp11=this.good;
            let goodnew={};
            goodnew["good"]=gooddetailcp11;
            goodnew["cartCount"]=this.goodCount;
            var data={
              key: window.loginUser.id,
              goodCart: goodnew
            };
            this.$axios.post("http://localhost:8088/BeautyProServer/api/v1/redis/goodsInCart",this.$qs.stringify(data)).then((resp) => {
                let saveResult=resp.data;
                if(saveResult==1){
                  router.push({path:"/addtocart",query:{onegood:gooddetailcopy,good:this.good}});
                }else{
                  alert("您暂未登录");
                  router.push({path:"/login"});
                }
            }).catch((resp)=> {
              alert("请求失败");
            });

          }
        },
        addCount(){
          this.goodCount++
        },
        reduceCount(){
          if (this.goodCount>1){
            this.goodCount--;
          }
        }
      },
      mounted() {

      }
    }
</script>

<style scoped>
  .ProductDetailsComponent{

  }
  .ProductDetailsComponent .box-content{
    width: 1190px;
    margin: 0 auto;
  }
  .crumbs{
  }
  .product-details-box{
    margin-top: 26px;
  }
  .productImageChange{
    float: left;
    width: 320px;
    height: 400px;
  }
  .productImageChange img{
    width: 320px;
    height: 320px;
  }
  .ProductMainMixture{
    float: left;
    width: 830px;
    margin-left: 40px;
  }
  .ProductMainMixture>.title{
    float: left;
    width: 100%;
    border-bottom: 1px solid #ddd;
  }
  .testBox{
    float: left;
    width: 650px;
  }
  .testBox h1{
    font-weight: 500;
    width: 100%;
    float: left;
    letter-spacing: 1px;
    font-size: 20px;
    color: #000;
    margin: 0px;
    padding: 0px;
  }
  .testBox p{
    width: 100%;
    float: left;
    margin: 0px;
    padding: 0px;
  }
  .testBox p:nth-of-type(1){
    margin-top: 8px;
    font-size: 14px;
    color: #000;
  }
  .testBox p:nth-of-type(2){
    margin-top: 12px;
    font-size: 12px;
    color: #666;
  }
  .ProductMainMixture .title .logo{
    float: right;
    cursor: pointer;
  }
  .ProductMainMixture .price{
    float: left;
    width: 100%;
    height: 24px;
    margin-top: 19px;
  }
  .ProductMainMixture .price p{
    float: left;
    margin: 0px;
    padding: 0px;
  }
  .ProductMainMixture .price .one{
    margin-top: 3px;
    color: #666;
    font-size: 12px;
  }
  .ProductMainMixture .price .two{
    margin-left: 40px;
    margin-top: 3px;
    color: #000;
    font-size: 14px;
  }
  .ProductMainMixture .price .three{
    color: #000;
    font-size: 24px;
    margin-right: 10px;
    line-height: 19px;
  }
  .ProductMainMixture .price .tig{
    display: inline-block;
    float: left;
    background-color: red;
    color: #fff;
    margin-left: 10px;
    width: 36px;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
  .fourButton{
    float: left;
    width: 100%;
    margin-top: 20px;
  }
  .fourButton .number{
    float: left;
    width: 70px;
    height: 39px;
    margin: 0 10px 0 64px;
    border: 1px solid #ddd;
  }
  .fourButton .number .numberBox{
    float: left;
    height: 37px;
    line-height: 39px;
    width: 49px;
    border-right: 1px solid #ddd;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
  .fourButton .number .numberBox input{
    height: 37px;
    line-height: 39px;
    width: 48px;
    margin: 0;
    border: 0;
    font-weight: inherit;
    vertical-align: text-bottom;
    outline: 0;
    text-indent: 20px;
  }
  .fourButton .number  .arrow{
    float: left;
    width: 19px;
    height: 37px;
    cursor: pointer;
  }
  .fourButton .number  .arrow>div{
    float: left;
    width: 19px;
    height: 19px;
  }
  .fourButton .number .arrow .topArrow{
    border-bottom: 1px solid #ddd;
  }
  .fourButton .number .arrow .bottomArrow{

  }
  .fourButton .number .arrow>div>div{
    background-image: url(/static/img/PDP-ICON.png);
    content: "";
  }
  .fourButton .number .arrow .icon1{
    margin: 7px 0 0 4px;
    float: left;
    width: 10px;
    height: 6px;
    background-position: -50px -18px;
  }
  .fourButton .number .arrow .icon2{
    margin: 7px 0 0 4px;
    float: left;
    width: 10px;
    height: 6px;
    background-position: -40px -42px;
  }
  .addCartButton{
    float: left;
    margin-right: 10px;
    width: 175px;
    height: 40px;

    background-color: #e00;
    cursor: pointer;
  }
  .addCartButton p{
    margin: 0px;
    padding: 0px;
    float: left;
    margin-left: 35px;
    font-size: 16px;
    color: #fff;
    margin-top: 12px;
    line-height: 16px;
  }
  .addCartButton .icon{
    width: 16px;
    height: 21px;
    background-position: -24px -16px;
    float: left;
    margin: 10px 0 0 9px;
    background-image: url(/static/img//PDP-ICON.png);
    content: "";
  }
  .addCartButton:hover{
    background-color: #000;
  }
  .capacityElse{
    width: 100%;
    float: left;
    margin-top: 20px;
  }
  .capacityElse .title{
    margin: 0px;
    padding: 0px;
    float: left;
    font-size: 12px;
    color: #666;
    margin-top: 4px;
  }
  .capacityElse .boxList{
    float: left;
    margin-left: 40px;
    width: 650px;
  }
  .capacityElse li{
    display: inline-block;
    float: left;
    margin: 0 10px 10px 0;
    padding: 2px;
    cursor: pointer;
    border: 2px solid transparent;
  }
  .capacityElse .current{
    border-color: #000;
  }
  .capacityElse .boxList a{
    color: #000;
    text-decoration: none;
  }
  .guessYouLike .title{
    float: left;
    height: 26px;
    width: 180px;
    border-bottom: 1px solid #000;
    font-size: 16px;
  }
  .guessYouLike .guessYouLike-product-list li{
    margin-top: 40px;
  }
  .guessYouLike .guessYouLike-product-list{
    margin-top: 30px;
    width: 179px;
    border-right: 1px solid #ccc;
  }
  .guessYouLike-product-list li a{
    text-decoration: none;
    color: #000;
    display: block;
    width: 160px;
    margin: 0 auto;
  }
  .guessYouLike-product-list li img{
    width: 160px;
    height: 160px;
    vertical-align: middle;
  }
  .guessYouLike-product-list li .header{
    width: 160px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    margin-top: 6px;
  }
  .guessYouLike-product-list li .blackLine{
    width: 12px;
    height: 1px;
    background-color: #000;
    margin: 5px 0 0 74px;
  }
  .guessYouLike-product-list li .mainText{
    margin-top: 5px;
    width: 132px;
    margin-left: 14px;
    float: left;
    text-align: center;
    font-size: 12px;
  }
  .guessYouLike-product-list li .price{
    text-align: center;
    width: 160px;
    margin-top: 10px;
  }
  .guessYouLike-product-list li .price span{
    color: #000;
  }
  .MainModule{
    margin-left: 20px;
    margin-top: 40px;
    float: left;
    width: 990px;
  }
  .rightMainNav{
    width: 100%;
    border-bottom: 1px solid #000;
  }
  .rightMainNav li{
    float: left;
    display: inline-block;
    height: 26px;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    margin-right: 10px;
    color: #000;
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }
  .rightMainNav .now{
    border-color: #000;
  }
  .rightMainNav a{
    text-decoration: none;
    color: #000;
  }
  .guessYouLike{
    float: left;
    margin-top: 40px;
    width: 180px;
  }
  .MainModule .leftLine{
    margin-top: 30px;
    padding-left: 20px;
  }
  .sku span{
    float: left;
    width: 230px;
    color: #000;
    font-size: 12px;
  }
  .skuDetail{
    margin-top: 20px;
  }
  .skuDetail ul li{
    width: 100%;
    margin-bottom: 20px;
  }
  .skuDetail ul,
  .skuDetail li{
    padding: 0px;
    margin: 0px;
  }
  .skuDetail li .title{
    width: 100%;
    font-size: 15px;
    color: #000;
    text-indent: 10px;
  }
  .skuDetail li .title .icon{
    width: 8px;
    height: 11px;
    background-position: 0 -74px;
    float: left;
    margin-top: 5px;
    background-image: url(/static/img/PDP-ICON.png);
    content: "";
  }
  .skuDetail li .text{
    font-size: 12px;
    color: #333;
    margin-top: 25px;
  }
  .forth_comments-content{
    margin-top: 50px;
  }
  .ModuleCETitle>P{
    text-align: center;
  }
  .ModuleCETitle a{
    text-align: center;
    color: #333;
    text-decoration: none;
    font-size: 24px;
    margin-top: 50px;
    letter-spacing: 1px;
  }

  .ModuleCETitle>P:nth-of-type(1) {
    font-size: 17px;
    margin-top: 13px;
    color: #333;
  }
  .ModuleCETitle>.shortLine {
    width: 30px;
    height: 1px;
    margin-top: 15px;
    margin-left: 465px;
    background-color: #000;
    float: left;
  }
  .titleTab_noComments{
    height: 40px;
    margin: 40px 0 30px;
  }
  .titleTab_noComments>.noComments>.write{
    width: 41px;
    height: 40px;
    float: left;
    background-position: -40px -105px;
    background-image: url(/static/img/PDP-ICON2.png);
    content: "";
  }
  .titleTab_noComments>.noComments>p {
    margin-left: 30px;
    color: #999;
    letter-spacing: 1px;
    font-size: 21px;
    height: 40px;
    line-height: 40px;
    float: left;
  }
  .titleTab_noComments>.noComments {
    margin-left: 320px;
  }
  .leftLine .price>p{
    width: 100%;
    margin-top: 40px;
    color: #333;
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 50px;
  }
</style>
