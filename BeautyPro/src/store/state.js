import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
/*if (typeof(this.$store.state.userGlobal) == 'string') {
  this.$store.commit('setUserGlobal',null);
}else if(typeof(this.$store.state.userGlobal) == 'object'){
  this.$store.commit('setUserGlobal','');
}*/
var state = {
  userGlobal: getRedisUser() || localStorage.getItem('userGlobal')
};
export default state

let userGlobal;
export function getRedisUser(){
  var data={
    key: 'USER',
    cookieName: 'userid',
  };
  axios.get('http://localhost:8088/BeautyProServer/api/v1/redis',{params: data}).then((resp) => {
    state.userGlobal=resp.data;
    window.loginUser=resp.data;
    if(state.userGlobal){
      console.log(state.userGlobal.nickname);
    }else{
      //state.userGlobal = null;
    }
  }).catch((resp) => {
    /*state.userGlobal = null;*/
  });

  var data=qs.stringify({
    pid: 0
  });
  var data1=qs.stringify({
    pid: 1
  });
  var data2=qs.stringify({
    pid: 2
  });
  var data3=qs.stringify({
    pid: 3
  });
  axios.post("http://localhost:8088/BeautyProServer/api/v1/area",data).then((resp) => {
    console.log(resp.data);
    var rows=resp.data;
    if(rows.length>0){
      window.Area.province=rows;//省
    }
  }).catch((resp) => {
    alert("请求失败");
  });
  axios.post("http://localhost:8088/BeautyProServer/api/v1/area",data1).then((resp) => {
    var rows=resp.data;
    if(rows.length>0){
      window.Area.city=rows;//市区
    }
  }).catch((resp) => {
    alert("请求失败");
  });
  axios.post("http://localhost:8088/BeautyProServer/api/v1/area",data2).then((resp) => {
    var rows=resp.data;
    if(rows.length>0){
      window.Area.country=rows;//下级市
    }
  }).catch((resp) => {
    alert("请求失败");
  });
  axios.post("http://localhost:8088/BeautyProServer/api/v1/area",data3).then((resp) => {
    var rows=resp.data;
    if(rows.length>0){
      window.Area.hometown=rows;//街道
    }
  }).catch((resp) => {
    alert("请求失败");
  });

/*商品类别*/
  /*axios.get('http://localhost:8088/BeautyProServer/api/v1/kindToSmall').then((resp) => {
    window.kindmap=resp.data;
    var kinds=window.kindmap;
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
    console.log(window.kindmap);
  }).catch((resp) => {
    alert("请求失败");
  });*/


/*品牌*/
  /*axios.get('http://localhost:8088/BeautyProServer/api/v1/brand').then((resp) => {
    window.brandlist=resp.data;
    var brandCopy=[];
    for(var i=0;i<16;i++){
      brandCopy.push(resp.data[i]);
    }
    window.brandsCopy=brandCopy;
  }).catch((resp) => {
    alert("请求失败");
  });*/
}




