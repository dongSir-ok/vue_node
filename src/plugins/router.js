import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/home.vue'
import User from '../pages/user.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import Detail from '../pages/detail.vue'
import Column from '../pages/column.vue'
import Species from '../pages/species.vue'
import Shaky from '../pages/shaky.vue'
import About from '../pages/about.vue'
let routes=[
  {path:'/home',component:Home},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  // {path:'/detail',component:Detail},
  {path:'/detail/:id',component:Detail,name:'detail',props:(route)=>({id:route.params.id,...route.query})},
  {path:'/column',component:Column},//书架
  {path:'/species',component:Species},//书城
  {path:'/shaky',component:Shaky},//活动
  {path:'/about',component:About}//关于我们

];

export default new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0};
  }
})