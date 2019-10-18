<template>
<div>
   <div class="head-top">
      <span class="bt">我的</span>
  </div>
  <div class="content">
    <div class="header">
      <h2><img src="../assets/img/headimg.png" alt=""/></h2>
      <div class="user-box">
        <a href="javascript:;" class="nickname">{{$store.state.user.data.nickname}}</a>
        <a href="javascript:;" class="logout" @click="logout">注销</a>
      </div>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <i></i>
          <p>我的书架</p>
          <b></b>
        </li>
        <li class="mm-text">
          <i></i>
          <p>我的收藏</p>
          <b></b>
        </li>
        <li class="set-text">
          <i></i>
          <p>我的设置</p>
          <b></b>
        </li>
        <li class="cg-text">
          <i></i>
          <p>我的客服</p>
          <b></b>
        </li>
        <li class="sc-text">
          <i></i>
          <p>关于我们</p>
          <b></b>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
import store from '../plugins/store.js'
export default {
  data(){
    return {
      userInfo : {}
    }
  },
  beforeRouteEnter(to,from,next){
    store.state.user.err == 0 ? next() : next('/login');
  },
  methods : {
    logout(){
      this.$axios({
        url : '/api/logout',
        method : 'DELETE'
      }).then(
        res=>{
          if(res.data.err === 0){
            this.$router.push('/home');
            this.$store.state.user.err = 1;
            this.$store.state.user.msg = '未登录';
          }
          window.localStorage.removeItem('user');
        }
      )
    }
  }
}
</script>
<style scoped>
.head-top{background-color: #00b38a;width:100%;text-align: center;padding:0.25rem 0;
font-size: 0.3rem;color:#fff;position:fixed;line-height: 0.4rem;top:0;left:0;z-index:10;z-index:100;}
.head-top .bt{font-size:0.45rem;font-weight: 500;}
.content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;margin-top:0.85rem;}
.content .header{width:6.4rem;height:2.84rem; background:skyblue; padding-top:0.4rem;}
.header h2{width:1.02rem;height:1.02rem; border-radius:50%; margin:0 auto;}
.header h2 img{width:100%;}
.header .user-box{width:3rem;font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.2rem;overflow:hidden;}
.user-box a{color:#fff;display: block;float: left;}
.user-box .nickname,.logout{width:1.5rem;}
.header ul{ margin-top:0.2rem;}
.header ul li{width:50%;height:0.7rem; float:left; color:#fff;}
.header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block; font-size:0.25rem;}
.header ul li p{ text-align:center; font-size:0.3rem;height:0.32rem; line-height:0.32rem; border-right:1px solid #fff;}
.header ul li p.end{ border:0;}

.content .docList{width:6.4rem; margin:0 auto; padding-top:0.5rem;}
.docList ul{ border-top:1px solid #7b7c7c;}
.docList ul li{ background:#fff;height:0.79rem; border-top:1px solid #bcbbba; border-bottom:1px solid #7b7c7c;}
.docList ul li span{ float:right;margin-right:0.14rem; margin-top:0.26rem;font-size: 0.3rem;}
.docList ul li b{width:0.21rem;height:0.24rem; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}


.docList ul .gk-text i{width:0.37rem;height:0.37rem; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.gk-text p{ float:left; font-size:0.25rem;margin-left:0.1rem; margin-top:0.25rem;}
.gk-text i{background:url('../assets/img/book.png') no-repeat center;background-size:0.44rem;}
.docList ul .mm-text i{width:0.29rem;height:0.35rem; background-size:100%; float:left; margin-left:0.32rem; margin-top:0.24rem;}
.mm-text p{ float:left; font-size:0.25rem;margin-left:0.15rem; margin-top:0.25rem;}
.mm-text i{background:url('../assets/img/collection.png') no-repeat center;background-size:0.5rem;}
.docList ul .cg-text i{width:0.37rem;height:0.37rem; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.cg-text p{ float:left; font-size:0.25rem;margin-left:0.1rem; margin-top:0.25rem;}
.cg-text i{background:url('../assets/img/message.png') no-repeat center;background-size:0.5rem;}
.docList ul .sc-text i{width:0.37rem;height:0.37rem; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.sc-text p{ float:left; font-size:0.25rem;margin-left:0.1rem; margin-top:0.25rem;}
.sc-text i{background:url('../assets/img/about_us.png') no-repeat center;background-size:0.5rem;}
.docList ul .set-text i{width:0.37rem;height:0.37rem; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.set-text p{ float:left; font-size:0.25rem;margin-left:0.1rem; margin-top:0.25rem;}
.set-text i{background:url('../assets/img/set.png') no-repeat center;background-size:0.5rem;}

</style>
