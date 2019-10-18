<template>
  <div id="app">
    <Header v-show="$store.state.bSearch"></Header>
    <keep-alive><router-view></router-view></keep-alive>
    <Footer v-show="$store.state.bFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import {VIEW_HEADER,VIEW_FOOTER} from './store/types'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  methods:{
    checkPath(path){
      if(/home/.test(path)){
        this.$store.dispatch(VIEW_HEADER,true);
        this.$store.dispatch(VIEW_FOOTER,true);
      }
      if(/user|column|species/.test(path)){
        this.$store.dispatch(VIEW_HEADER,false);
        this.$store.dispatch(VIEW_FOOTER,true);
      }
      if(/login|reg|detail/.test(path)){
        // this.$root.$data.bSearch = false;
        // this.$root.$data.bFooter = false;
        this.$store.dispatch(VIEW_HEADER,false);
        this.$store.dispatch(VIEW_FOOTER,false);
      }
    }
  },
  watch:{
    $route:{
      handler(current){
        this.checkPath(current.path);
      },
      immediate:true,
      deep:true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
