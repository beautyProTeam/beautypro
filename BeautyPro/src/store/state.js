import Vue from 'vue';
import axios from 'axios';
var state = {
  userGlobal: getRedisUser()
};
export default state

let userGlobal;
export function getRedisUser(){
  var data={
    key: 'USER',
    cookieName: 'userid',
  };
  axios.get('/api/redis',{params: data}).then((resp) => {
    state.userGlobal=resp.data;
    if(state.userGlobal!=""){
      console.log(state.userGlobal.nickname);
    }else{
      state.userGlobal = null;
    }
  }).catch((resp) => {
    state.userGlobal = null;
  });

}




