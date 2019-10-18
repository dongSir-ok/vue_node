<template>
  <div class="banner">
    <ul class="clearfix">

      <router-link
        to="/shaky"
        tag="li"
      >
        <img src="/images/banner_1.png" alt=""/>
      </router-link>

      <router-link
        to="/shaky"
        tag="li"
      >
        <img src="/images/banner_2.png" alt=""/>
      </router-link>
      <router-link
        to="/shaky"
        tag="li"
      >
        <img src="/images/banner_3.png" alt=""/>
      </router-link>
      
    </ul>
  </div>
</template>
<script>
import $ from 'jquery';
import Swipe from '../assets/js/swipe';
export default {
  props:['banner'],
  mounted(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    });
  }
}
</script>

<style scoped>

.banner{padding-top:0.98rem;position: relative;overflow: hidden; z-index: 1}
.banner ul{width:100%;overflow:hidden;}
.banner ul li{width:6.4rem;float:left;position: relative;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}
.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}

</style>
