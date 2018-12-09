<template>
  <div>
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import HeaderComponent from '../HeaderComponent/HeaderComponent';
  import MainComponent from '../MainComponent/MainComponent';
  import FooterComponent from '../FooterComponent/FooterComponent';
  export default {
    name: "IndexComponent",
    components: {
      'v-header': HeaderComponent,
      'v-main': MainComponent,
      'v-footer': FooterComponent
    }
  }
</script>

<style scoped>

</style>
