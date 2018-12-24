import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from '../components/LoginComponent/LoginComponent';
import IndexComponent from '../components/IndexComponent/IndexComponent';
import RegisterComponent from '../components/RegisterComponent/RegisterComponent';
import HomeComponent from '../components/HomeComponent/HomeComponent';
import HomeIndexComponent from '../components/HomeComponent/IndexComponent';
import UpdatePasswordComponent from '../components/HomeComponent/UpdatePasswordComponent';
import AddressComponent from '../components/HomeComponent/AddressComponent';
import AddAddressComponent from '../components/HomeComponent/AddAddressComponent';
import UpdateAddressComponent from '../components/HomeComponent/UpdateAddressComponent';
import UpdateMyInfoComponent from '../components/HomeComponent/UpdateMyInfoComponent';
import OrderHistoryComponent from '../components/HomeComponent/OrderHistoryComponent';
import UpdateEmailComponent from '../components/HomeComponent/UpdateEmailComponent';
import ProductListComponent from '../components/ProductComponent/ProductListComponent';
import ProductDetailsComponent from '../components/ProductComponent/ProductDetailsComponent';
import AddToCartComponent from '../components/ShoppingCartComponent/AddToCartComponent';
import ShoppingCartComponent from '../components/ShoppingCartComponent/ShoppingCartComponent';
import ShoppingCartSettlementComponent from '../components/ShoppingCartComponent/ShoppingCartSettlementComponent';
import OrderDetailsComponent from '../components/OrderDetailsComponent/OrderDetailsComponent';
import AboutUsComponent from '../components/AboutUsComponent/AboutUsComponent';
import HelpCenterComponent from '../components/HelpCenterComponent/HelpCenterComponent';
import OrderSuccessComponent from '../components/ShoppingCartComponent/OrderSuccessComponent';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: IndexComponent },
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/productlist', component: ProductListComponent },
    { path: '/product', component: ProductDetailsComponent },
    { path: '/addtocart', component: AddToCartComponent },
    { path: '/shoppingcart', component: ShoppingCartComponent },
    { path: '/shoppingcartsettlement', component: ShoppingCartSettlementComponent },
    { path: '/orderdetails', component: OrderDetailsComponent },
    { path: '/aboutus', component: AboutUsComponent },
    { path: '/helpcenter', component: HelpCenterComponent },
    { path: '/ordersuccess', component: OrderSuccessComponent },
    {
      path: '/home',
      component: HomeComponent,
      children:[
        {
          path: '',
          component: HomeIndexComponent,
        },
        {
          path: 'updatepassword',
          component: UpdatePasswordComponent,
        },
        {
          path: 'address',
          component: AddressComponent,
        },
        {
          path: 'address/add',
          component: AddAddressComponent,
        },
        {
          path: 'address/update',
          component: UpdateAddressComponent,
        },
        {
          path: 'updatemyinfo',
          component: UpdateMyInfoComponent,
        },
        {
          path: 'orderhistory',
          component: OrderHistoryComponent,
        },
        {
          path: 'updateemail',
          component: UpdateEmailComponent,
        }

      ]
    }
  ]
});
