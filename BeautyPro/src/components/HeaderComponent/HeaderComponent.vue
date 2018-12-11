<template>
    <div class="header">
      <div class="header-top">
        <div class="header-top-content">
          <span class="left">
            <a class="welcome">欢迎来到琦色美妆</a>

            <router-link tag="a" to="/login">请登录</router-link>
            <i></i>
            <router-link to="register" tag="a">免费注册</router-link>
            <a style="display: none">手机验证码登录</a>
          </span>
          <div class="promiss-question">
            <!--<div class="content">
              <div class="content-detail">-->
                <ul>
                  <li>琦色美妆正品承诺</li>
                  <li>常见问题</li>
                </ul>
              <!--</div>
            </div>-->
          </div>
          <span class="right">
            <span>我的琦色美妆</span>
            <span>会员俱乐部</span>
            <span>手机琦色美妆</span>
            <span>美丽事业</span>
            <span>帮助中心</span>
          </span>
        </div>
      </div>
      <div class="header-search ">
        <div class="header-search-content clearfix">
          <div class="left">
           <a>
              <img src="/static/img/logo.png" title="琦色美妆" alt="">
            </a>
          </div>
          <div class="center">
            <div class="input">
              <input type="text" class="form-control" placeholder="">
              <div class="icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </div>
            </div>
            <div class="words">
              <ul>
                <li><a>热销秋冬好物</a></li>
                <li><a>冬季保湿清单</a></li>
                <li><a>速成通勤妆</a></li>
                <li><a>年度精选套装</a></li>
                <li><a>2018圣诞星选</a></li>
                <li><a>年度香氛盛典</a></li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="cart">
              <a class="cart-href">
                <em></em>
                购物袋
                <span>0</span>件
              </a>
            </div>
          </div>
          <a class="logo-promiss"><img src="/static/img/navigation_shopping.png"></a>
        </div>
      </div>
      <div class="header-bottom">
        <div class="header-bottom-info">
          <div class="header-bottom-info-content clearfix">
            <div class="left clearfix" onmouseover="mouseOver()" onmouseout="mouseOut()">
              <a class="menu-href">全部商品类目</a>
              <div v-show="isShow">
                <div class="menu-list">
                  <em class="icon-love-left"></em>
                  <ul class="leftUl">
                    <li class="leftUlLi">
                      <span></span>
                      <a class="bigKind up">热门</a>
                      <ul class="smallUl">
                        <li><a>魅惑美唇</a></li>
                      </ul>
                    </li>
                    <li class="leftUlLi">
                      <span></span>
                      <a class="bigKind up">热门</a>
                      <ul class="smallUl">
                        <li><a>魅惑美唇</a></li>
                      </ul>
                    </li>
                    <li class="leftUlLi">
                      <span></span>
                      <a class="bigKind up">热门</a>
                      <ul class="smallUl">
                        <li><a>魅惑美唇</a></li>
                      </ul>
                    </li>
                    <li class="leftUlLi">
                      <span></span>
                      <a class="bigKind up">热门</a>
                      <ul class="smallUl">
                        <li><a>魅惑美唇</a></li>
                      </ul>
                    </li>
                    <li class="leftUlLi">
                      <span></span>
                      <a class="bigKind up">热门</a>
                      <ul class="smallUl">
                        <li><a>魅惑美唇</a></li>
                      </ul>
                    </li>
                    <li class="leftUlLi">
                      <span></span>
                      <a class="bigKind up">热门</a>
                      <ul class="smallUl">
                        <li><a>魅惑美唇</a></li>
                      </ul>
                    </li>
                    <li class="leftUlLi">
                      <span></span>
                      <a class="bigKind up">热门</a>
                      <ul class="smallUl">
                        <li><a>魅惑美唇</a></li>
                      </ul>
                    </li>
                    <li class="leftUlLi">
                      <span></span>
                      <a class="bigKind up">热门</a>
                      <ul class="smallUl">
                        <li><a>魅惑美唇</a></li>
                      </ul>
                    </li>
                    <li class="leftUlLi">
                      <span></span>
                      <a class="bigKind up">热门</a>
                      <ul class="smallUl">
                        <li><a>魅惑美唇</a></li>
                      </ul>
                    </li>
                  </ul>
                  <em class="icon-love-right"></em>
                </div>
                <div class="menu-list-content"></div>
              </div>
            </div>
            <div class="right">
              <ul>
                <li><a>畅销榜单</a></li>
                <li><a>独家发售</a></li>
                <li><a>礼物套装</a></li>
                <li><a>畅销榜单</a></li>
                <li><a>畅销榜单</a></li>
                <li><a>畅销榜单</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script type="text/ecmascript-6">
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
export default {
  /*name: 'HeaderComponent'*/
  data(){
    let currentPathname=window.location.pathname=='/'?true:false;
    return {
      isShow: currentPathname
    }
  },
  methods: {
    mouseOver(){
      let currentPathname=window.location.pathname=='/'?true:false;
      if(currentPathname!='/'){
        isShow=true;
      }
    },
    mouseOut(){
      let currentPathname=window.location.pathname=='/'?true:false;
      if(currentPathname!='/'){
        isShow=false;
      }
    }
  }
};
</script>

<style lang="stylus">
  .header
    .header-top
      width: 100%
      height: 30px
      background: #000
      .header-top-content
        position: relative
        width: 1190px
        height: 30px
        margin: 0 auto
        .left
          display: inline-block
          float: left
          width: 420px
          height: 100%
          margin: 0 12px
          &>a
            font-size: 12px
            line-height: 30px
            font-weight: 400
            margin: 0 12px
            color: #fff
          &>i
            display: inline-block
            height: 16px
            border-left: 1px solid #ccc
            vertical-align: sub
        .promiss-question
          float: left
          height: 30px
          width: 230px
          overflow: hidden
          ul
            li
              font-size: 12px
              line-height: 30px
        .right
          float: right
          position: relative
          height: 30px
          line-height: 30px
          font-size: 12px
          span
            font-size: 12px
  .header-search
    clear: both
    min-width:1190px
    z-index: 100
    position: fixed
    height: 84px
    width: 100%
    .header-search-content
      position: relative
      width: 1190px
      padding: 24px 0 0
      margin: 0 auto
      .left
        float: left
        width: 320px
        height: 36px
      .center
        float: left
        height: 60px
        z-index: 1
        .input
          float: left
          width: 650px
          height: 36px
          input
            display: inline-block
            float: left
            width: 540px
            min-height: 34px
          .icon
            position: relative
            float: left
            width: 90px
            height: 34px
            background: #000
            .fa-search
              postion: absolute
              color: #fff
              line-height: 34px
              padding: 0 38px
        .words
          ul
            li
              display: inline-block
              padding: 0 4px
              cursor: pointer
              a
                font-size: 12px
                color: #acacac
      .right
        float: right
        width: 209px
        height: 36px
        cursor: pointer
        .cart
          width: 188px
          height: 34px
          border: 1px solid #ddd
          float: right
          background-color: #fff
          line-height: 34px
          font-size: 16px
          color: #666
          text-align: center
          a.cart-href
            font-size: 16px
            color: #000
            em
              display: inline-block
              vertical-align: middle
              width: 18px
              height: 26px
              margin-right: 10px
              margin-left: 10px
              background-image: url(/static/img/shopping_bag.png)
              content: ""
            span
              font-size: 16px
              color: #d1152a
              padding:0 5px
      .logo-promiss
        position: absolute
        right: 0
        top: 78px
  .header-bottom
    min-width: 1190px
    position: relative
    margin-top: 84px

    .header-bottom-info
      width: 100%
      background-color: #fff
      .header-bottom-info-content
        width: 1190px
        margin: 0 auto
        position: relative

        .left
          float: left
          width: 240px
          /*height: 240px*/
          line-height: 36px
          background: url(/static/img/classified.png)
          background-size: 100% 100%
          .menu-href
            margin-left: 15px
            font-size: 16px
            color: #fff
          .menu-list
            width: 240px
            height: auto
            margin: 0 auto
            float: left
            position: relative
            background: rgb(255, 255, 255)
            .icon-love-left
              top: 30px
              left: -37px
              background-size: 100%
              background-position: 0px 5px
              width: 55px
              height: 55px
              /*z-index: -1*/
              background-repeat: no-repeat
              position: absolute
              background-image: url(/static/img/navigation_sprite_wrap.png)
              content: ""
            .leftUl
              min-height: 320px
              height: 550px
              box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px
              display: block
              margin-top: -3px
              list-style-type: disc
              margin-block-start: 1px
              margin-block-end: 1em
              margin-inline-start: 0px
              margin-inline-end: 0px
              .leftUlLi
                display: block
                background-color: rgb(255, 255, 255)
                line-height: 20px
                position: relative
                padding: 8px 0px 8px 15px
                border-bottom: 1px solid rgb(245, 245, 245)
                vertical-align: bottom
                list-style: none
                .up
                  font-weight: 700
                  color: rgb(0, 0, 0)
                  line-height: 22px
                  font-size: 14px
                  margin-right: 10px
                  display: block
                .smallUl
                  li
                    display: inline-block
                    margin-right: 10px
                    position: relative
                    vertical-align: bottom
                    a
                      font-size: 12px
                      color: rgb(138, 138, 138)
                      margin-right: 0px
                      line-height: 22px
                      display: block
            .icon-love-right
              top: 315px
              left: 197px
              z-index: 1000
              background-size: 200%
              background-position: -29px -100px
              width: 55px
              height: 55px
              background-repeat: no-repeat
              position: absolute
              background-image: url(/static/img/navigation_sprite_wrap.png)
              content: ""
          .menu-list-content
            width: 950px
            margin-left: 240px
            height: 550px
            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px
            box-sizing: border-box
            display: none
            position: relative
            background: rgb(255, 255, 255)
            padding: 32px 40px 40px 30px
        .right
          min-width: 760px
          float: left
          height: 36px
          line-height: 42px
          ul
            padding-left: 40px
            display: block
            list-style-type: disc
            // margin-block-start: 1em
            margin-block-end: 1em
            margin-inline-start: 0px
            margin-inline-end: 0px
            padding-inline-start: 40px
            li
              margin-right: 40px
              display: inline-block
              position: relative
              vertical-align: bottom
              list-style: none
              text-align: -webkit-match-parent
              a
                font-size: 16px
                color: #000
</style>
