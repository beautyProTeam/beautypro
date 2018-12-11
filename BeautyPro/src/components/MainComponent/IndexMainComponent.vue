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
</style>
