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
  render: h => h(App)
});
