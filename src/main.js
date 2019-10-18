import Vue from 'vue';
import App from './App.vue'
Vue.config.productionTip = false
import './assets/css/public.css';
import './assets/js/font';
import router from './plugins/router';
import store from './plugins/store'
import './plugins/axios';



export default new Vue({
  // data:{
  //   bSearch : true,
  //   bFooter : true
  // },
  render: h => h(App),
  router,
  store
}).$mount('#app')
