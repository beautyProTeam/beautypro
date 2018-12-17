<template>
  <div class="FooterComponent">
    <div class="footer-info">
      <div class="box-content clearfix">
        <div class="footer-info-ico">
          <em class="footer-info-ico-d"></em>
          <span class="footer-info-content-cn">快递直达</span>
        </div>
        <span class="footer-ico-split"></span>
        <div class="footer-info-ico">
          <em class="footer-info-ico-a"></em>
          <span class="footer-info-content-cn">丰富礼赠</span>
        </div>
        <span class="footer-ico-split"></span>
        <div class="footer-info-ico">
          <em class="footer-info-ico-c"></em>
          <span class="footer-info-content-cn">100%官方正品</span>
        </div>
        <span class="footer-ico-split"></span>
        <div class="footer-info-ico">
          <em class="footer-info-ico-b"></em>
          <span class="footer-info-content-cn">无障碍退款</span>
        </div>
        <span class="footer-ico-split"></span>
        <div class="footer-info-ico">
          <em class="footer-info-ico-e"></em>
          <span class="footer-info-content-cn">安全支付</span>
        </div>
      </div>
    </div>
    <div class="footer-map">
      <div class="box-content">
        <ul class="footer-map-content">
          <li>
            <p><b>购物流程</b></p>
            <p>大宗采购/团购</p>
            <p>丝芙兰预付卡章程</p>
          </li>
          <li>
            <p><b>支付/配送</b></p>
            <p>货到付款</p>
            <p>在线支付</p>
            <p>配送时间</p>
          </li>
          <li>
            <p><b>售后服务</b></p>
            <p>退换货规定</p>
            <p>退换及退款说明</p>
          </li>
          <li>
            <p><b>关于丝芙兰</b></p>
            <p>公司介绍</p>
            <p>联系我们</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-declaration">
      <div class="box-content">
        <div class="footer-declaration-content">
          <p>个人作品-毕业设计，本项目不做商业用途，仅供个人开发学习使用</p>
          <p>由于数据来自于互联网收集，如有版权以及其他问题，请联系9999进行修改</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FooterComponent'
};
</script>

<style lang="stylus">
  .footer-info{
    background :#fff;
  }
  .box-content{
    width :1190px;
    margin :0 auto;
    padding: 30px 0;
    position:relative;
  }
  .footer-info .footer-info-ico{
    width: 236px;
    height: 96px;
    display: inline-block;
    float :left;
  }
  .footer-info .footer-info-ico em{
    background-image: url(/static/img/footer_ico_sprite.png);
    content: "";
    width: 49px;
    height: 49px;
    display: block;
    margin: 0 auto;
    background-repeat: no-repeat;
  }
  .footer-info .footer-info-content-cn{
    text-align: center;
    display: block;
    font-weight: 700;
    height: 18px;
    line-height: 18px;
    margin-top: 14px;
    color: #000;
    font-size: 12px;

  }
  .footer-info .footer-ico-split{
    height: 24px;
    width: 1px;
    background-color: #9d9d9d;
    margin-top: 17px;
    display: inline-block;
    float :left;
  }
  .footer-info .footer-info-ico-a{
    background-position: -90px 0;
  }
  .footer-info .footer-info-ico-c{
    background-position: 0 0;
  }
  .footer-info .footer-info-ico-b{
    background-position: -180px 0;
  }
  .footer-info em.footer-info-ico-e{
    width: 45px;
    background-position: -47px 0;
  }
  .footer-map{
    background :#fff;
  }
  .footer-map .footer-map-content{
    min-height: 150px;
    padding: 30px 0 50px;
    background-repeat: no-repeat;
    background-position: right 40px;
    border-top: 2px solid #000;
    background-image: url(/static/img/footer_line.png);
    content: "";
  }
  .footer-map .footer-map-content li{
    width: 190px;
    line-height: 24px;
    display: inline-block;
    vertical-align: top;
    list-style: none;
    list-style-type: none;
    color :#696969;
    font-size :12px;
  }
  .footer-map .footer-map-content li b{
    color :#000;
  }
  .footer-declaration{
    background-color: #000;
  }
  .footer-declaration .footer-declaration-content{
    padding: 30px 0;
    text-align: center;
    color :#fff;
  }
</style>
