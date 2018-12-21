<template>
  <div>
    <v-header display="hover"></v-header>
    <div class="ShoppingCartComponent">

    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import HeaderComponent from '../HeaderComponent/HeaderComponent';
  import FooterComponent from '../FooterComponent/FooterComponent';
    export default {
        name: "ShoppingCartComponent",
      components:{
        'v-header': HeaderComponent,
        'v-footer': FooterComponent
      }
    }
</script>

<style scoped>

</style>
