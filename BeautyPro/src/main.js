import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import Axios from 'axios';
import qs from 'qs';

Vue.config.productionTip = false;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.withCredentials=true;
Vue.prototype.$axios=Axios;
Vue.prototype.$qs=qs;
//开启debug模式
Vue.config.debug = true;
/*Vue.prototype.$store=store;*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
