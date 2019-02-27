<template>
  <div>
    <v-header display="show" v-bind:kindcopy="kindcopy"></v-header>
    <v-indexmain v-bind:brandsCopy="brandsCopy"></v-indexmain>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import HeaderComponent from '../HeaderComponent/HeaderComponent';
  import IndexMainComponent from '../MainComponent/IndexMainComponent';
  import FooterComponent from '../FooterComponent/FooterComponent';
  import 'bootstrap/dist/js/bootstrap.js';
  import 'bootstrap/dist/css/bootstrap.css';
  export default {
    name: "IndexComponent",
    components: {
      'v-header': HeaderComponent,
      'v-indexmain': IndexMainComponent,
      'v-footer': FooterComponent
    },
    data(){
      return {
        kindcopy: window.kindcopy,
        brandsCopy:  window.brandsCopy
      }
    },
    created(){
      console.log("首页=>user");
      console.log(this.$store.state.userGlobal);
      this.$axios.get('http://localhost:8088/BeautyProServer/api/v1/kindToSmall').then((resp) => {
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
      });

      this.$axios.get('http://localhost:8088/BeautyProServer/api/v1/brand').then((resp) => {
        window.brandlist=resp.data;
        var brandCopy=[];
        for(var i=0;i<16;i++){
          brandCopy.push(resp.data[i]);
        }
        window.brandsCopy=brandCopy;
      }).catch((resp) => {
        alert("请求失败");
      });
    }
  }
</script>

<style scoped>

</style>
