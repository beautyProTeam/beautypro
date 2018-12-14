<template>
  <div>
    <v-header></v-header>
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
    }
  }
</script>

<style scoped>

</style>
