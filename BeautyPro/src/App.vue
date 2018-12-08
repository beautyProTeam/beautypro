<template>
  <div id="app">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
 import "./stylus/base.styl";
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import MainComponent from './components/MainComponent/MainComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
export default {
  components: {
    'v-header': HeaderComponent,
    'v-main': MainComponent,
    'v-footer': FooterComponent
  }
};
</script>

<style lang="stylus">

#app {

}
</style>
