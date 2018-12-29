import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from 'axios';
import qs from 'qs';
Vue.config.productionTip = false;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios=Axios;
Vue.prototype.$qs=qs;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  methods: {
    /*getCookie(param){
        var c_param = '';
        if (document.cookie.length > 0) {
          var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //再次切割
            //判断查找相对应的值
            if (arr2[0] == param) {
              c_param = arr2[1];
              //保存到保存数据的地方
            }
          }
          return c_param;
        }

    }*/
  }
});
