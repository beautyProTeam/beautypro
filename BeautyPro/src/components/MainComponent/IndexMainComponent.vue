<template>
    <div class="indexmain">
      <div class="indexmainCon">
        <div class="bannerLeftWhite"></div>
        <!--bootstap轮播图开始-->
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="/static/img/banner/banner1.jpg" alt="banner1.jpg">
              <div class="carousel-caption">

              </div>
            </div>
            <div class="item">
              <img src="/static/img/banner/banner2.jpg" alt="banner2.jpg">
              <div class="carousel-caption">

              </div>
            </div>
            <div class="item">
              <img src="/static/img/banner/banner3.jpg" alt="banner3.jpg">
              <div class="carousel-caption">

              </div>
            </div>
            <div class="item">
              <img src="/static/img/banner/banner4.jpg" alt="banner4.jpg">
              <div class="carousel-caption">

              </div>
            </div>
          </div>

          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!--bootstap轮播图结束-->
        <div class="bannerRightWhite"></div>
      </div>
      <div class="bannerBottom">
        <div class="bannerBottomInfo">
          <div class="bannerBottomInfoContent">
            <div class="bannerBottom-content">
              <img src="/static/img/banner/bannerBottom1.jpg">
            </div>
            <div class="bannerBottom-content banner-bottom-img-margin">
              <img src="/static/img/banner/bannerBottom2.jpg">
            </div>
            <div class="bannerBottom-content banner-bottom-img-margin">
              <img src="/static/img/banner/bannerBottom3.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="indexBrand">
        <div class="indexBrand-title">
          <div class="indexBrand-title-content clearfix">
            <h2 class="left">
              全部品牌
              <span>ALL BRANDS</span>
            </h2>
            <ul class="indexbrand-words">
              <li class="indexbrand-words-li">热门品牌</li>
              <li class="indexbrand-words-li">独家品牌</li>
              <li class="indexbrand-words-li">全部品牌</li>
            </ul>
          </div>
        </div>
        <div class="indexBrand-body">
          <div class="indexBrand-body-info clearfix">
            <div class="indexBrand-body-info-left">
              <!--bootstrap设置brand轮播图开始-->
              <div id="brand-carousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                  <li data-target="#brand-carousel" data-slide-to="0" class="active"></li>
                  <li data-target="#brand-carousel" data-slide-to="1"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <img src="/static/img/brand/brand1.jpg" alt="brand1.jpg">
                    <div class="carousel-caption">

                    </div>
                  </div>
                  <div class="item">
                    <img src="/static/img/brand/brand2.jpg" alt="brand2.jpg">
                    <div class="carousel-caption">

                    </div>
                  </div>
                </div>

                <!-- Controls -->
                <a class="left carousel-control" href="#brand-carousel" role="button" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#brand-carousel" role="button" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <!--bootstrap设置brand轮播图结束-->
            </div>
            <div class="indexBrand-body-info-right">
              <ul class="rightUL">
                <li class="rightULLi">
                  <img src="/static/img/brand/brandName1.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName2.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName3.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName4.png">
                </li>
                <li class="rightULLi">
                  <img src="/static/img/brand/brandName5.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName6.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName7.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName8.png">
                </li>
                <li class="rightULLi">
                  <img src="/static/img/brand/brandName9.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName10.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName11.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName12.png">
                </li>
                <li class="rightULLi">
                  <img src="/static/img/brand/brandName13.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName14.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName15.png">
                </li><li class="rightULLi">
                  <img src="/static/img/brand/brandName16.png">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  import 'bootstrap/dist/js/bootstrap.js';
  import 'bootstrap/dist/css/bootstrap.css';
  export default {
  name: 'IndexMainComponent',

};
</script>

<style lang="stylus">
  .indexmain
    min-width: 1190px
    height: 400px
    /*background-color: #f03359*/
    margin-top: -565px
    position: relative
    z-index: 1
    .indexmainCon
      width: 1190px
      height: 100%
      margin: 0 auto
      .bannerLeftWhite
        width: 120px
      #carousel-example-generic
        width: 950px
        height: 100%
        margin-left: 240px
        .carousel-inner
          .item
            img
              height: 100%
      .bannerRightWhite
        width: 120px
    .bannerBottom
      min-width: 1190px
      margin-top: 10px
      overflow: hidden
      .bannerBottomInfo
        width: 1190px
        margin: 0 auto
        overflow: hidden
        .bannerBottomInfoContent
          margin-left: 250px
          height: 140px
          display: block
          .bannerBottom-content
            float: left
            &.banner-bottom-img-margin
              margin-left: 10px
    .indexBrand
      margin-top: 70px
      min-width: 1190px
      .indexBrand-title
        height: 36px
        margin: 10px 0
        margin-bottom: 3px
        .indexBrand-title-content
          width: 1190px
          margin: 0 auto
          height: 36px
          position: relative
          .left
            float: left
            width: 387px
            font-weight: bold
            font-size: 22px
            margin-top: 3px
            span
              display: inline-block
              color: #000
              font-size: 20px
              margin-left: 10px
          .indexbrand-words
            float: right
            height: 36px
            position: absolute
            right: 0
            bottom: -7px
            .indexbrand-words-li
              display: inline-block
              line-height: 36px
              cursor: pointer
              list-style: none
              vertical-align: bottom
              list-style-type: none
              font-size: 12px
              color: #000
      .indexBrand-body
        height: 317px
        margin-bottom: 80px
        .indexBrand-body-info
          height: 320px
          width: 1190px
          margin: 0 auto
          .indexBrand-body-info-left
            height: 320px
            width: 590px;
            float:left;
          .indexBrand-body-info-right
            width: 600px
            display: block
            height: 320px;
            float :left;
            .rightUL
              opacity: 1
              z-index: 10
              width: 600px
              height: 320px
              transition-duration: 1.2s
              display: block
              position: absolute
              .rightULLi
                width: 149px
                height: 79px
                border-right: 1px solid #f5f5f5
                border-bottom: 1px solid #f5f5f5
                display: inline-block
                overflow: hidden
                position: relative
                background-color: #fff
                vertical-align: bottom
                list-style: none
                list-style-type: none
                padding 0
                margin 0
                box-sizing unset;
</style>
