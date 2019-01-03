import Vue from 'vue';
import axios from 'axios';

let userGlobal;
export function getRedisUser(){
  var data={
    key: 'USER',
    cookieName: 'userid',
  };
  axios.get('/api/redis',{params: data}).then((resp) => {
    userGlobal=resp.data;
    if(userGlobal){
      console.log(userGlobal.nickname);

    }
  }).catch((resp) => {
    userGlobal = null;
  });

  return userGlobal;
}
//userGlobal = getRedisUser();
var state = {
  userGlobal: getRedisUser()
};
export default state

