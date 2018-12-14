<template>
    <div class="IndexMainComponent">
      <div class="Hero">
        <div id="HeroCarousel" data-ride="carousel" class="carousel slide">
          <!-- 轮播（Carousel）指标 -->
          <ol class="carousel-indicators">
            <li data-target="#HeroCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#HeroCarousel" data-slide-to="1"></li>
            <li data-target="#HeroCarousel" data-slide-to="2"></li>
            <li data-target="#HeroCarousel" data-slide-to="3"></li>
          </ol>
          <!-- 轮播（Carousel）项目 -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="/static/img/banner/banner1.jpg" alt="First slide">
            </div>
            <div class="item">
              <img src="/static/img/banner/banner2.jpg" alt="Second slide">
            </div>
            <div class="item">
              <img src="/static/img/banner/banner3.jpg" alt="Third slide">
            </div>
            <div class="item">
              <img src="/static/img/banner/banner4.jpg" alt="Third slide">
            </div>
          </div>
        </div>
      </div>
      <div class="WeeklySpecial">
        <div class="weeklySpecial-info">
          <div class="weeklySpecial-info-content">
            <router-link to="/">
              <img src="/static/img/banner/bannerBottom1.jpg">
            </router-link>
            <router-link to="/">
              <img class="mr" src="/static/img/banner/bannerBottom2.jpg">
            </router-link>
            <router-link to="/" >
              <img class="mr" src="/static/img/banner/bannerBottom3.jpg">
            </router-link>
          </div>
        </div>
      </div>
      <div class="Brand">
        <div class="item-box">
          <div class="item-box-title clearfix">
            <div class="title-img"></div>
            <div class="title-content">
              <span><b>热门品牌</b></span>
              <span>独家品牌</span>
              <span>全部品牌</span>
            </div>
          </div>
          <div class="item-box-body clearfix">
            <div id="BrandCarousel" data-ride="carousel" class="carousel slide floatL">
              <!-- 轮播（Carousel）指标 -->
              <ol class="carousel-indicators">
                <li data-target="#BrandCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#BrandCarousel" data-slide-to="1"></li>
              </ol>
              <!-- 轮播（Carousel）项目 -->
              <div class="carousel-inner">
                <div class="item active">
                  <img src="/static/img/brand/brand1.jpg" alt="First slide">
                  <div class="carousel-caption"></div>
                </div>
                <div class="item">
                  <img src="/static/img/brand/brand2.jpg" alt="Second slide">
                  <div class="carousel-caption"></div>
                </div>
              </div>
              <!-- 轮播（Carousel）导航 -->
              <a class="left carousel-control" href="#BrandCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#BrandCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div class="brand-body-content-right floatL">
              <ul>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName1.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">丝芙兰</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName2.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">兰蔻</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName3.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">兰蔻</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName4.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">兰蔻</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName5.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">雅诗兰黛</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName6.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">SK-II</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName7.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">古驰</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName8.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">黎珐</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName9.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">娇兰</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName10.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">馥蕾诗</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName11.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">彼得罗夫</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName12.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">彼得罗夫</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName13.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">迪奥</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName14.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">蔚蓝之美</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName15.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">缪缪</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
                  <img src="/static/img/brand/brandName16.png">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">娇韵诗</div>
                    <a href="javascript:;">点击查看</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="Picks">
        <div class="item-box">
          <div class="item-box-title clearfix">
            <div class="title-img"></div>
          </div>
          <div class="item-box-body clearfix">
            <ul class="picks-info-content">
              <li class="mr">
                <router-link to="/">
                  <img src="/static/img/hp_basicskincare_20181213.jpg">
                </router-link>
                <ul class="picks-info-list-product">
                  <li>
                    <router-link to="/">
                      <div class="picks-info-product-brand">Fresh</div>
                      <div class="picks-info-product-content">馥蕾诗大豆精萃卸妆洁颜凝露</div>
                      <div class="picks-info-product-price">￥140.00~￥380.00</div>
                      <img src="/static/img/pr1.jpg">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <div class="picks-info-product-brand">Fresh</div>
                      <div class="picks-info-product-content">馥蕾诗大豆精萃卸妆洁颜凝露</div>
                      <div class="picks-info-product-price">￥140.00~￥380.00</div>
                      <img src="/static/img/pr1.jpg">
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/">
                  <img src="/static/img/hp_foundation_20181213.jpg">
                </router-link>
                <ul class="picks-info-list-product">
                  <li>
                    <router-link to="/">
                      <div class="picks-info-product-brand">Fresh</div>
                      <div class="picks-info-product-content">馥蕾诗大豆精萃卸妆洁颜凝露</div>
                      <div class="picks-info-product-price">￥140.00~￥380.00</div>
                      <img src="/static/img/pr1.jpg">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <div class="picks-info-product-brand">Fresh</div>
                      <div class="picks-info-product-content">馥蕾诗大豆精萃卸妆洁颜凝露</div>
                      <div class="picks-info-product-price">￥140.00~￥380.00</div>
                      <img src="/static/img/pr1.jpg">
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="mr">
                <router-link to="/">
                  <img src="/static/img/hp_lip_20181213.jpg">
                </router-link>
                <ul class="picks-info-list-product">
                  <li>
                    <router-link to="/">
                      <div class="picks-info-product-brand">Fresh</div>
                      <div class="picks-info-product-content">馥蕾诗大豆精萃卸妆洁颜凝露</div>
                      <div class="picks-info-product-price">￥140.00~￥380.00</div>
                      <img src="/static/img/pr1.jpg">
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <div class="picks-info-product-brand">Fresh</div>
                      <div class="picks-info-product-content">馥蕾诗大豆精萃卸妆洁颜凝露</div>
                      <div class="picks-info-product-price">￥140.00~￥380.00</div>
                      <img src="/static/img/pr1.jpg">
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/">
                  <img src="/static/img/hp_beautymaster_20181213.gif">
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="category_skinCare">
        <div class="item-box">
          <div class="item-box-title clearfix">
            <div class="title-img"></div>
            <div class="title-content">
              <ul class="category-title-content-right">
                <li>
                  <router-link to="/">惠选套装</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">面部精华</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">美容仪</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">面膜</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">眼部护理</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">清洁</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">卸妆</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">唇部</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">全部</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-box-body clearfix">
            <div class="category-body-content">
              <div class="category-body-content-left floatL">
                <router-link to="/"><img src="/static/img/hp_skinfloor_20181213.jpg"></router-link>
              </div>
              <ul class="category-body-content-right floatR">
                <li>
                  <router-link to="/">
                    <div class="a">SK-II</div>
                    <div class="b">SK-II护肤精华露面膜II护肤精华露面膜</div>
                    <div class="c">￥2190.00</div>
                    <img src="/static/img/pr1.jpg">
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <div class="a">SK-II</div>
                    <div class="b">SK-II护肤精华露面膜II护肤精华露面膜</div>
                    <div class="c">￥2190.00</div>
                    <img src="/static/img/pr1.jpg">
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <div class="a">SK-II</div>
                    <div class="b">SK-II护肤精华露面膜II护肤精华露面膜</div>
                    <div class="c">￥2190.00</div>
                    <img src="/static/img/pr1.jpg">
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <div class="a">SK-II</div>
                    <div class="b">SK-II护肤精华露面膜II护肤精华露面膜</div>
                    <div class="c">￥2190.00</div>
                    <img src="/static/img/pr1.jpg">
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <div class="a">SK-II</div>
                    <div class="b">SK-II护肤精华露面膜II护肤精华露面膜</div>
                    <div class="c">￥2190.00</div>
                    <img src="/static/img/pr1.jpg">
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <div class="a">SK-II</div>
                    <div class="b">SK-II护肤精华露面膜II护肤精华露面膜</div>
                    <div class="c">￥2190.00</div>
                    <img src="/static/img/pr1.jpg">
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <div class="a">SK-II</div>
                    <div class="b">SK-II护肤精华露面膜II护肤精华露面膜</div>
                    <div class="c">￥2190.00</div>
                    <img src="/static/img/pr1.jpg">
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <div class="a">SK-II</div>
                    <div class="b">SK-II护肤精华露面膜II护肤精华露面膜</div>
                    <div class="c">￥2190.00</div>
                    <img src="/static/img/pr1.jpg">
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="category-footer">

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  name: 'IndexMainComponent',
    methods:{
     showBrandMask(event){
       event.target.classList.add("hover");
       console.log(event);
     },
      hideBrandMask(event){
        event.target.classList.remove("hover");
        console.log(event);
      }
    }
};
</script>

<style lang="stylus">
  body{
    background :#f5f5f5;
  }
  .IndexMainComponent{

  }
  .Hero{
    position :relative;
    background :#fff;
  }
  .Hero #HeroCarousel,
  .weeklySpecial-info{
    width :1190px;
    margin :0 auto;
    position :relative;
  }
  #HeroCarousel{
    height 400px;
  }

  .weeklySpecial-info{
    margin-top: 10px;
  }
  .weeklySpecial-info-content{
    margin-left: 250px;
    height: 140px;
  }
  .weeklySpecial-info-content img{
    float:left;
  }
  .weeklySpecial-info-content .mr{
    margin-left: 10px;
  }
  .Brand,
  .Picks,
  .category_skinCare{
    margin-top: 70px;
  }
  .item-box{
    width :1190px;
    margin :0 auto;
  }
   .item-box .item-box-title{
     margin: 10px 0;
     margin-bottom: 3px;
     height :36px;
     line-height :36px;
   }
  .item-box  .title-img{
    float :left;
    width: 387px;
    height: 36px;
    background-repeat: no-repeat;
    background-position: -20px -13px;
    background-size: 100%;
    background-image :url("/static/img/sprite_title.png");
  }
  .item-box .item-box-title .title-content{
    float :right ;
    display :inline-block;
  }
  .Brand .item-box-title .title-content span{
    font-size: 14px;
    color: #474747;
    margin-right :12px;
  }
  #BrandCarousel{
    width: 590px;
    height: 320px;
  }
  .Brand  .brand-body-content-right{
    width: 600px;
    height: 320px
  }
  .Brand .brand-body-content-right li{
    width: 150px;
    height: 80px;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    display: inline-block;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    float :left;
  }
   .Brand .brand-body-content-right li.hover .module_tabGroupList_hover{
     display:block;
   }
  .Brand .module_tabGroupList_hover{
    display :none;
    position:absolute;
    width :100%;
    height :100%;
    top:0px;
    left:0px;
    background-color: rgba(0,0,0,.8);
    font-size :12px;
  }
  .module_tabGroupList_hover .module_tabGroupList_banner{
    color: #fff;
    text-align: center;
    height: 28px;
    line-height: 28px;
    margin-top :12px;
  }
  .module_tabGroupList_hover a{
    display :block;
    width: 84px;
    height: 20px;
    text-align: center;
    color: #fff;
    background-color: #e00;
    line-height: 18px;
    border-radius: 12px;
    margin: 5px auto;
    text-decoration :none;
  }
  .Picks{

  }
  .Picks .title-img{
    background-position: -20px -47px;
  }
  .Picks .picks-info-content>li{
    float :left;
    position :relative;
    margin-bottom: 10px;
  }
  .Picks .picks-info-content>li.mr{
    margin-right :10px;
  }
  .Picks .picks-info-list-product{
    position: absolute;
    width: 200px;
    top: 20px;
    right: 10px;
  }
  .Picks .picks-info-list-product li{
    height: 130px;
    margin-bottom: 1px;
    position: relative;
    background-color: #fff;
    padding: 10px 0 0 10px;
  }
  .picks-info-list-product a{
    color:#000;
    text-decoration :none;
  }
  .picks-info-list-product div{
    position:relative;
    z-index :1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height :20px;
  }
  .picks-info-list-product a:hover img{
    right :10px;
  }
  .picks-info-list-product a img{
    position: absolute;
    width: 90px;
    height: 90px;
    bottom: 0;
    right: 5px;
    transition-duration: .3s;
    transition-timing-function: ease-out;
  }
  .category_skinCare .title-img{
    background-position: -20px -78px;
  }
   .category-title-content-right li{
     float :left;
   }
  .category-title-content-right a{
    text-decoration :none;
    font-size: 14px;
    color: #474747;

  }
  .category-title-content-right a:hover{
    font-weight :700;
  }
  .category-title-content-right em{
    margin: 0 12px;
    color: #dadada;
    font-weight: 400;
    font-style: normal;
  }
  .category-body-content-left{
    width :390px;
    height 500px;
  }
  .category-body-content-right{
    width: 800px;
    height: 500px;
    float: right;
    border-left: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    background-color: #fff;
  }
  .category-body-content-right li{
    padding: 15px 10px;
    padding-right: 0;
    width: 200px;
    height: 250px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    border-right: 1px solid #f5f5f5;
    border-top: 1px solid #f5f5f5;
    box-sizing: border-box;
    float :left;
  }
  .category-body-content-right li:first-child,
  .category-body-content-right li:nth-child(5){
    width :199px;
  }
   .category-body-content-right a{
     text-decoration :none;
   }
  .category-body-content-right img{
    width :180px;
    height :180px;
  }
  .category-body-content-right div{
    display: block;
    font-size: 14px;
    color: #000;
    position: relative;
    z-index: 10;
    line-height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .category-body-content-right .a{
    font-weight :bolder ;
  }
</style>
