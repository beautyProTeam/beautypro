import Vue from 'vue';
import axios from 'axios';

/*let user;
try{
  if(localStorage.userGlobal)
  {
    user = localStorage.userGlobal;
  }
}catch(e){

}*/
let userGlobal;
function getRedisUser(){
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
}
getRedisUser();
try{
  if(localStorage.userGlobal)
  {
    userGlobal = localStorage.userGlobal;
  }
}catch(e){
    userGlobal = null;
}

export default {
  userGlobal: userGlobal
}
/*export default {
  data(){
    return {
      userGlobal: {}
    };
  },
  created(){
    this.getRedisUser();
  },
  methods: {
    getRedisUser(){
      var data={
        key: 'USER',
        cookieName: 'userid',
        //hashkey: this.getCookie('userid')
      };
      this.$axios.get('/api/redis',{params: data}).then((resp) => {
        this.userGlobal=resp.data;
        if(this.userGlobal){
          console.log(this.userGlobal.nickname);

        }
      }).catch((resp) => {

      });
    }
  },

}*/
