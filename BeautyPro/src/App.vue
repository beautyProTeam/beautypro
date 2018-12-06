<template>
  <div id="app">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue';
import main from './components/main/main';
import footer from './components/footer/footer';
export default {
  components: {
    'v-header': header,
    'v-main': main,
    'v-footer': footer
  }
};
</script>

<style lang="stylus">
@import "./stylus/base.styl";
#app {

}
</style>
