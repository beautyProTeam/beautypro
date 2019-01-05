export default {
  //mutations主要放的是同步的对数据的改变
  //当mutations很复杂的时候，可以借助Module对mutations,state,actions进行拆分
  setUserGlobal: (state,value) => {
    state.userGlobal = value;
    // 把登录的用户保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    localStorage.setItem('userGlobal', value);
  }
}
