<template>
  <div>
    <v-header display="show"></v-header>
    <v-indexmain></v-indexmain>
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
    created(){
      console.log("首页=>user");
      console.log(this.$store.state.userGlobal);
    }
  }
</script>

<style scoped>

</style>
