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
                <!--<li @mouseenter="showBrandMask" @mouseleave="hideBrandMask">
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
                </li>-->
                <li @mouseenter="showBrandMask" @mouseleave="hideBrandMask" v-for="b in brandslistCopy">
                  <img v-bind:src="b.imgUrl">
                  <div class="module_tabGroupList_hover">
                    <div class="module_tabGroupList_banner">{{b.name}}</div>
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
            <div class="category-body-content clearfix">
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
              <ul>
                <li>
                  <router-link to="/">
                    <img src="/static/img/lancome_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/sk-ii_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/esteelauder_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/sephoracollection_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/fresh_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/peterthomasroth_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/caudalie_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/guerlain_144X60.png">
                  </router-link>
                  <em></em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="category_makeUp">
        <div class="item-box">
          <div class="item-box-title clearfix">
            <div class="title-img"></div>
            <div class="title-content">
              <ul class="category-title-content-right">
                <li>
                  <router-link to="/">热销彩盘集锦</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">丝芙兰染唇膏</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">贝玲妃圣诞节日版</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">芭比布朗奢金唇膏</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">兰蔻'磨皮'粉底</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">热门眉部产品</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">全部</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-box-body clearfix">
            <div class="category-body-content clearfix">
              <div class="category-body-content-left floatL">
                <router-link to="/"><img src="/static/img/hp_mufloor_20181213.jpg"></router-link>
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
              <ul>
                <li>
                  <router-link to="/">
                    <img src="/static/img/dior_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/givenchy_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/makeupforever_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/lancome_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/guerlain_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/esteelauder_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/benefit_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/giorgioarmani_144X60.png">
                  </router-link>
                  <em></em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="category_fragrance">
        <div class="item-box">
          <div class="item-box-title clearfix">
            <div class="title-img"></div>
            <div class="title-content">
              <ul class="category-title-content-right">
                <li>
                  <router-link to="/">全新古驰花悦绿意</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">阿玛尼“SI”迷情挚爱</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">蔻依恋旅女士香氛</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">香水圣诞礼盒</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">小众'香水</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">新品女香大赏</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">迪奥悦之欢</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">全部</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-box-body clearfix">
            <div class="category-body-content clearfix">
              <div class="category-body-content-left floatL">
                <router-link to="/"><img src="/static/img/hp_frafloor_20181213.jpg"></router-link>
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
              <ul>
                <li>
                  <router-link to="/">
                    <img src="/static/img/loewe_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/miumiu_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/dior_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/marcjacobs_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/kenzo_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/acquadiparma_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/bvlgari_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/gucci_144X60.png">
                  </router-link>
                  <em></em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="category_tools">
        <div class="item-box">
          <div class="item-box-title clearfix">
            <div class="title-img"></div>
            <div class="title-content">
              <ul class="category-title-content-right">
                <li>
                  <router-link to="/">玫瑰金恋爱物语礼盒</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">独家网红刷</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">芭比波朗彩妆刷</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">眼影刷</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">化妆刷套组</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">55号粉底刷</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">芭比波朗工具</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">全部</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-box-body clearfix">
            <div class="category-body-content clearfix">
              <div class="category-body-content-left floatL">
                <router-link to="/"><img src="/static/img/hp_toolfloor_20181206.jpg"></router-link>
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
              <ul>
                <li>
                  <router-link to="/">
                    <img src="/static/img/beautyblender_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/sephoracollection_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/shuuemura_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/makeupforever_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/tangleteezer_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/tweezerman_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/mac_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/bobbibrown_144X60.png">
                  </router-link>
                  <em></em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="category_manSkinCare">
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
                  <router-link to="/">控油平衡</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">保湿水润</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">滋养紧致</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">剃须护理</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">眼部护理</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">全部</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-box-body clearfix">
            <div class="category-body-content clearfix">
              <div class="category-body-content-left floatL">
                <router-link to="/"><img src="/static/img/hp_manfloor_20181129.jpg"></router-link>
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
              <ul>
                <li>
                  <router-link to="/">
                    <img src="/static/img/labseries_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/biotherm_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/dtrt_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/shiseido_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/skii_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/dior_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/clarins_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/clinique_144X60.png">
                  </router-link>
                  <em></em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="category_bodyCare">
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
                  <router-link to="/">沐浴清洁</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">身体护理</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">手部护理</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">胸部护理</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">足部护理</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">全部</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-box-body clearfix">
            <div class="category-body-content clearfix">
              <div class="category-body-content-left floatL">
                <router-link to="/"><img src="/static/img/hp_bodyfloor_20181213.jpg"></router-link>
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
              <ul>
                <li>
                  <router-link to="/">
                    <img src="/static/img/sephoracollection_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/clarins_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/fresh_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/lancaster_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/kenzoki_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/yaman_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/foreo_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/nuxe_144X60.png">
                  </router-link>
                  <em></em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="category_hairCare">
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
                  <router-link to="/">美发工具</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">洗发产品</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">护发产品</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">头皮护理</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">美发产品</router-link>
                  <em>|</em>
                </li>
                <li>
                  <router-link to="/">全部</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-box-body clearfix">
            <div class="category-body-content clearfix">
              <div class="category-body-content-left floatL">
                <router-link to="/"><img src="/static/img/hp_hairfloor_20181213.jpg"></router-link>
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
              <ul>
                <li>
                  <router-link to="/">
                    <img src="/static/img/wella_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/sp_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/sebastian_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/percyandreed_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/labseries_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/phyto_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/sephoracollection_144X60.png">
                  </router-link>
                  <em></em>
                </li>
                <li>
                  <router-link to="/">
                    <img src="/static/img/philips_144X60.png">
                  </router-link>
                  <em></em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="GuessYouLike">
        <div class="item-box">
          <div class="item-box-title clearfix">
            <div class="title-img"></div>
          </div>
          <div class="item-box-body clearfix">
             <ul class="guessyoulike-info-content-list clearfix">
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
               <li>
                 <router-link to="/">
                   <img src="/static/img/1_n_06178_280x280.jpg">
                 </router-link>
                 <div class="guessyoulike-info-list-brand">CAUDALIE</div>
                 <router-link to="/" class="guessyoulike-info-list-content">
                   欧缇丽葡萄籽滋养护唇膏欧缇丽葡萄籽滋养护唇膏
                 </router-link>
                 <div class="guessyoulike-info-list-price">￥<span>145.00</span></div>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'IndexMainComponent',
    data(){
      return {
        user: {},
        brandsCopy: []
      }
    },
    created(){
      /*this.getRedis();*/
      this.user=this.$store.state.userGlobal;
      console.log("user shou ye");
      console.log(this.user);
      let _this= this;
      if ( window.brandsCopy == undefined || window.brandsCopy.length == 0) {
        this.$axios.get('http://localhost:8088/BeautyProServer/api/v1/brand').then((resp) => {
          window.brandlist = resp.data;
          var brandCopy = [];
          for (var i = 0; i < 16; i++) {
            brandCopy.push(resp.data[i]);
          }
          window.brandsCopy = brandCopy;
          _this.brandsCopy = brandCopy;
        }).catch((resp) => {
          alert("请求失败");
        });
      }  else {
        _this.brandsCopy= window.brandsCopy;
      }
    },
    methods:{
     showBrandMask(event){
       event.target.classList.add("hover");
       console.log(event);
     },
      hideBrandMask(event){
        event.target.classList.remove("hover");
        console.log(event);
      }
    },
    computed:{
      brands:function(){
        return window.brandlist;
      },
      brandslistCopy:function(){
        return window.brandsCopy;
      }
    }
};
</script>

<style lang="stylus" scoped>
  .IndexMainComponent{
    padding-bottom :80px;
    background :#f5f5f5;
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
    height:400px;
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
  .category_makeUp,
  .category_fragrance,
  .category_tools,
  .category_manSkinCare,
  .category_bodyCare,
  .category_hairCare,
  .category_skinCare{
    margin-top: 70px;
  }
  .GuessYouLike{

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
     position :relative;
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
    right: 0px;
    bottom: 0px;
    position: absolute;
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
  .category_makeUp .title-img{
    background-position: -20px -113px;
  }
  .category_fragrance .title-img{
    background-position: -20px -146px;
  }
  .category_tools .title-img{
    background-position: -20px -247px;
  }
  .category_manSkinCare .title-img{
    background-position: -20px -279px;
  }
  .category_bodyCare .title-img{
    background-position: -20px -179px;
  }
  .category_hairCare .title-img{
    background-position: -20px -212px;
  }
  .GuessYouLike .title-img{
    background-position: -20px -313px;
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
  .category-body-content-right li:hover img{
    right :0px;
  }
  .category-body-content-right img{
    position:absolute;
    bottom :0px;
    right :-5px;
    width :180px;
    height :180px;
    transition-duration: .3s;
    transition-timing-function: ease-out;
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
  .category-footer{
    height :60px;
    background:#fff;
  }
  .category-footer em{
    float: right;
    height: 16px;
    width: 2px;
    background-color: #b1b1b1;
    margin-top: 22px;
    font-weight: 400;
    font-style: normal;
  }
  .category-footer li{
    float :left;
    display: inline-block;
    width: 149px;
    height: 56px;
    overflow: hidden;
  }
  .category-footer li:last-child{
    width: 147px;
  }
  .GuessYouLike{

    margin :0 auto;
    margin-top :80px;
    width: 1190px;
    min-height: 300px;
    border-top: 1px solid #f7f7f7;
    border-left: 1px solid #f7f7f7;
  }
  .guessyoulike-info-content-list img{
    width :180px;
    height :180px;
  }
  .guessyoulike-info-content-list li{
    width: 237px;
    height: 259px;
    border-right: 1px solid #f7f7f7;
    border-bottom: 1px solid #f7f7f7;
    display: inline-block;
    background-color: #fff;
    float :left;
  }
  .guessyoulike-info-content-list li * {
    color :#333;
  }
  .guessyoulike-info-list-brand,
  .guessyoulike-info-list-content,
  .guessyoulike-info-list-price {
    width: 196px;
    margin: 0 20px;
    font-size: 14px;
    line-height: 20px;
  }
  .guessyoulike-info-list-brand{
    font-weight: bolder;
    font-size: 12px;
  }
  .guessyoulike-info-list-content{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    text-decoration :none!important;
  }
  .guessyoulike-info-list-content:hover{
    color :#dc002f;
  }
</style>
