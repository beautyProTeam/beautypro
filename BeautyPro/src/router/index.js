import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from '../components/LoginComponent/LoginComponent';
import IndexComponent from '../components/IndexComponent/IndexComponent';
import RegisterComponent from '../components/RegisterComponent/RegisterComponent';
import HomeComponent from '../components/HomeComponent/HomeComponent';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: IndexComponent },
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/home', component: HomeComponent }
  ]
});
