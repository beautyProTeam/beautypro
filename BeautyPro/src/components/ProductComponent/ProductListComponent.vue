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
                  <!--<li>
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
                  </li>-->
                  <li v-for="brand in getBrandsLimit10" v-bind:value="brand.id">
                    <router-link to="/">
                      <!--<img src="/static/img/sephoracollection_144X60.png">-->
                      <img :src="brand.imgUrl">
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
                  <!--<li><router-link to="/">护肤</router-link></li>
                  <li><router-link to="/">彩妆</router-link></li>
                  <li><router-link to="/">香水</router-link></li>
                  <li><router-link to="/">工具</router-link></li>
                  <li><router-link to="/">男士护肤</router-link></li>
                  <li><router-link to="/">洗浴护体</router-link></li>
                  <li><router-link to="/">美发护发</router-link></li>-->
                  <li v-for="kind in getKinds" :value="kind.id"><router-link to="/">{{kind.name}}</router-link></li>
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
      <div class="sort-product">
        <div class="box-content clearfix">
          <div class="sort-product-left">
            <div class="active">综合<i class="sort-way-arrow"></i><span class="sort_border"></span></div>
            <div>销量<i class="sort-way-arrow"></i></div>
            <div>新品<i class="sort-way-arrow"></i></div>
          </div>
        </div>
      </div>
      <div class="cate_prod_cont">
        <div class="cate_prod">
          <ul class="cate_prod clearfix">
            <!--<li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>
            <li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>
            <li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>
            <li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>
            <li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>
            <li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>
            <li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>
            <li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>
            <li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>
            <li>
              <div class="p_cont">
                <div class="p-img">
                  <router-link to="/">
                    <img src="/static/img/pr1.jpg">
                    <div class="p_buy">立即购买</div>
                  </router-link>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <router-link to="/">
                    黄金双瓶赋活珍藏礼盒
                  </router-link>
                </div>
                <div class="p_discount">￥695.00</div>
              </div>
            </li>-->
            <li v-for="good in getGoods" v-bind:value="good.id">
              <div class="p_cont">
                <div class="p-img">
                  <a href="javascript:;" @click="getGoodDetail(good.id,$event)">
                    <!--<img src="/static/img/pr1.jpg">-->
                    <img :src="good.imgUrl">
                    <div class="p_buy" @click="getGoodDetail(good.id,$event)">立即购买</div>
                  </a>
                </div>
                <div class="p_tags">新品</div>
                <div class="p_brandEn">CLARINS</div>
                <div class="p_productCN">
                  <a href="javascript:;" @click="getGoodDetail(good.id,$event)">
                   {{good.name}}
                  </a>
                </div>
                <div class="p_discount">￥{{good.price}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="pignation_wrap">
        <div class="pignation-bg">
          <div class="pignation-place">
            <a to="/" class="prev" href="javascript:;" @click="prevPage($event)">< 上一页</a>
            <!--<router-link to="/" class="current">1</router-link>-->
            <a v-for="(index,p) in getPages" href="javascript:;" @click="getGoodByPage($event)">{{index}}</a>
            <a to="/" class="next" href="javascript:;" @click="nextPage($event)">下一页 ></a>
            <div class="module-pagination-go">
              到第<input type="text" class="module-pagination-go-input" autocomplete="false" autocapitalize="false" v-model="pointPage">页
              <input type="submit" value="确定" class="module-pagination-go-submit" @click="confirmPageGood">
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
  import router from "../../router/index.js";
    export default {
      name: "ProductListComponent",
      components:{
        'v-header': HeaderComponent,
        'v-footer': FooterComponent
      },
      created(){
        if(this.$route.query.kindDetailId){
          this.kindDetailId=this.$route.query.kindDetailId;

          this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/good",{params:{kindDetailId:this.kindDetailId}}).then((resp) => {
            var brandIdList=[],kindIds=[],smallKinds=[],kindDetailIds=[];
            var totalPage=resp.data.totalPage;
            this.pages=totalPage;
            this.currentPage=resp.data.currentPage;
            var goodList=resp.data.rows;
            this.goodsBykdid=goodList;
            for(var i in goodList){
              brandIdList.push(goodList[i].brand_id);
              kindIds.push(goodList[i].kind_id);
              smallKinds.push(goodList[i].small_kind_id);
              kindDetailIds.push(goodList[i].kind_detail_id);
            }
            brandIdList=Array.from(new Set(brandIdList));
            kindIds=Array.from(new Set(kindIds));
            smallKinds=Array.from(new Set(smallKinds));
            kindDetailIds=Array.from(new Set(kindDetailIds));
            this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/brands/ids",{params:{brandIds:brandIdList}}).then((resp) => {
              var brands=resp.data;
              this.brandsBykdid=brands;
            }).catch((resp) => {
              alert("品牌获取失败!");
            });
            this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/kinds/ids",{params:{kindIds:kindIds}}).then((resp) => {
              var kinds=resp.data;
              this.kindsBykdid=kinds;
            }).catch((resp) => {
              alert("总分类获取失败!");
            });
            this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/smallKinds/ids",{params:{smallKindIds:smallKinds}}).then((resp) => {
              var smallKinds=resp.data;
              this.smallKindsBykdid=smallKinds;
            }).catch((resp) => {
              alert("次类别获取失败!");
            });
            this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/kindDetails/ids",{params:{kindDetailIds:this.kindDetailIds}}).then((resp) => {
              var kindDetails=resp.data;
              this.kindDetailsBykdid=kindDetails;
            }).catch((resp) => {
              alert("分类详细获取失败!");
            });
          }).catch((resp) =>{
            alert("商品列表获取失败!");
          });

        }else{

        }

      },
      data(){
        return {
          kindDetailId:0,//由其他组件传过来的参数
          brandsBykdid:[],
          kindsBykdid:[],
          smallKindsBykdid:[],
          kindDetailsBykdid:[],
          goodsBykdid:[],
          pages:1,
          pointPage:1,
          currentPage: 1
        }
      },
      methods:{
        getGoodByPage(event){
          var pageNum=parseInt(event.target.innerText);
          this.pointPage=pageNum;
          this.currentPage=pageNum;
          var data={
            currentPage: pageNum,
            offset: parseInt((pageNum-1)*10),
            limit: parseInt(10),
            kindDetailId: this.$route.query.kindDetailId
          }
          this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/good",{params:data}).then((resp) => {
            var result=resp.data;
            this.goodsBykdid=result.rows;
          }).catch((resp) => {
            alert("商品获取失败!");
          });
        },
        confirmPageGood(){
          let pageNum=this.pointPage;
          this.currentPage=pageNum;
          var data={
            currentPage: pageNum,
            offset: parseInt((pageNum-1)*10),
            limit: parseInt(10),
            kindDetailId: this.$route.query.kindDetailId
          }
          this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/good",{params:data}).then((resp) => {
            var result=resp.data;
            this.goodsBykdid=result.rows;
          }).catch((resp) => {
            alert("商品获取失败!");
          });
        },
        prevPage(event){
          var pageNum=parseInt(this.currentPage);
          if(pageNum==1){
            this.pointPage=pageNum;
          }else{
            this.pointPage=pageNum - 1 ;
            var data={
              currentPage: pageNum - 1,
              offset: parseInt((pageNum-1 -1 )*10),
              limit: parseInt(10),
              kindDetailId: this.$route.query.kindDetailId
            }
            this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/good",{params:data}).then((resp) => {
              var result=resp.data;
              this.goodsBykdid=result.rows;
            }).catch((resp) => {
              alert("商品获取失败!");
            });
          }

        },
        nextPage(event){
          var pageNum=parseInt(this.currentPage);
          if(pageNum==this.pages){
            this.pointPage=pageNum;
          }else{
            this.pointPage=pageNum + 1 ;
            var data={
              currentPage: pageNum + 1,
              offset: parseInt((pageNum-1 + 1 )*10),
              limit: parseInt(10),
              kindDetailId: this.$route.query.kindDetailId
            }
            this.$axios.get("http://localhost:8088/BeautyProServer/api/v1/good",{params:data}).then((resp) => {
              var result=resp.data;
              this.goodsBykdid=result.rows;
            }).catch((resp) => {
              alert("商品获取失败!");
            });
          }
        },
        getGoodDetail(goodid,event){
          let good_id=goodid;
          router.push({path:'/product',query:{goodId:good_id}});
        }
      },
      computed:{
        getBrands(){
          return this.brandsBykdid;
        },
        getBrandsLimit10(){
          var bs=this.brandsBykdid;
          var bsnews=[];
          for(var i=0;i<10;i++){
            bsnews.push(bs[i]);
          }
          return bsnews;
        },
        getGoodsLimit10(){
          var gs=this.goodsBykdid;
          var gsnews=[];
          for(var i=0;i<10;i++){
            gsnews.push(gs[i]);
          }
          return gsnews;
        },
        getGoods(){
          return this.goodsBykdid;;
        },
        getKinds(){
          return this.kindsBykdid;
        },
        getPages(){
          var pages=[];
          for(var i=1;i<7;i++){
            pages.push(i);
          }
          return pages;
        },

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
  .sort-product-left{
    overflow: hidden;
    height: 32px;
    border: 1px solid #ddd;
    float: left;
  }
  .sort-product-left>div{
    float: left;
    width: 100px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    margin-left: -1px;
    position: relative;
    cursor: pointer;

  }
  .sort-product-left>div.active{
    background: #000;
    color: #fff;
  }
  .sort-product-left .sort-way-arrow{
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-left: 5px;
    background: url(/static/img/category_product_long_arrow_black.png) bottom no-repeat;
  }
  .sort-product-left .active .sort-way-arrow{
    background: url(/static/img/category_product_long_arrow_white.png) bottom no-repeat;
  }
  .sort_border{
    height: 11px;
    width: 1px;
    display: block;
    background: #ddd;
    float: right;
    position: absolute;
    right: 0;
    top: 10px;
  }
  .sort-product-left .active .sort_border{
    display: none;
  }
  .cate_prod{
    width: 1190px;
    margin: 0 auto;
    margin-bottom: 70px;
  }
  .cate_prod>li{
    float: left;
    width: 238px;
    height: 320px;
    border-right: 1px solid #f7f7f7;
    border-bottom: 1px solid #f7f7f7;
  }
  .cate_prod .p_cont{
    padding: 16px 15px 0;
    width: 206px;
    height: 302px;
    margin: 0 auto;
    border: 1px solid transparent;
    box-sizing: unset;
  }
  .p_cont:hover{
    border-color: #000;
  }
  .p_cont .p-img{
    text-align: center;
    height: 180px;
    position: relative;
  }
  .p_cont .p-img img{
    width: 180px;
    height: 180px;
  }
  .p_cont .p-img .p_buy{
    display: none;
    position: absolute;
    bottom: 0px;
    width: 206px;
    height: 32px;
    line-height: 32px;
    background: rgba(0,0,0,.8);
    color: #fff;
    cursor: pointer;
  }
  .p_cont .p-img .p_buy:after{
    position: absolute;
    content: "";
    display: inline-block;
    width: 14px;
    height: 18px;
    left:50px;
    top:5px;
    background: url(/static/img/category_purchace_bag.png) 50% no-repeat;
  }
  .p_cont:hover .p_buy{
    display: block;
  }
  .p_cont .p_tags{
    display: inline-block;
    text-align: center;
    width: 40px;
    line-height: 15px;
    font-size: 12px;
    background: #e00;
    color: #fff;

  }
  .p_cont .p_brandEn{
    font-weight: 600;
    padding-bottom: 6px;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .p_cont .p_productCN{
    padding-bottom: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .p_cont .p_productCN a{
    text-decoration: none;
    color: #000;
    font-weight: 400;
  }
  .p_cont .p_productCN a:hover{
    color: #dc002f;
  }
  .p_cont .p_discount{
    padding-bottom: 5px;
    color: #000;
  }
  .pignation-bg{
    background: #fff;
    padding-bottom: 55px;
    width: 1190px;
    margin: 0 auto;
  }
  .pignation-place{
    width: 950px;
    margin: 0 auto;
    padding-left: 240px;
  }
  .pignation-place a{
    width: 40px;
    display: inline-block;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 14px;
    color: #a8a8a8;
    line-height: 40px;
    text-decoration: none;
  }
  .pignation-place .prev,
  .pignation-place .next{
    width: 90px;
  }
  .pignation-place .prev{
    margin-right: 20px;
  }
  .pignation-place .next{
    margin-left: 20px;
  }
  .pignation-place a.current{
    border-color: #000;
    background-color: #000;
    color: #fff;
  }
  .pignation-place a:hover{
    color: #dc002f;
  }
  .module-pagination-go{
    display: inline-block;
    margin-left: 40px;
    color: #000;
    font-size: 14px;
  }
  .module-pagination-go-input{
    height: 40px;
    width: 40px;
    display: inline-block;
    border: 1px solid #ddd;
    margin: 0 6px;
    color: #000;
    text-align: center;
  }
  .module-pagination-go-submit{
    font-size: 14px;
    width: 60px;
    height: 40px;
    display: inline-block;
    background-color: #000;
    color: #fff;
    margin-left: 20px;
    outline: none;
    border: none;
  }
</style>

