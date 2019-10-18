<template>
    <div class="outdiv">
        <div class="head-top">
            <span class="bt">登录</span>
            <div class="div-1">
                <img src="../assets/img/fanhui-ioc.png" @click="back"/>
                <span>返回</span>
            </div>
        </div>
        <div class="body-conter">
            <div class="div-dl">
                <ul>
                    <li class="yhm">
                        <img class="yhico" src="../assets/img/font-yonghu.png"/>
                        <input placeholder="请输入用户名称" name="username" type="text" v-model="username" />
                        <img class="qk" src="../assets/img/font-quxiao.png" @click="clear1" />
                        <div style="clear: both;"></div>
                    </li>
                    <li class="yhm" style="overflow:hidden;">
                        <img class="yhico" src="../assets/img/iconfont-mima.png"/>
                        <input placeholder="请输入密码" name="" :type="password_type" id="password" class="password" v-model="password"/>
                        <img class="qk" src="../assets/img/iconfont-chakan.png" @click="check"/>
                    </li>
                    <li style="font-size:0.1rem;color:red;position:absolute;left:0.2rem;top:1.6rem;">{{mess}}</li>
                </ul>
            </div>
            <div class="div-mmzd">
                <ul>
                    
                    <li>
                        <span class="left-wjmm">忘记密码</span>
                        <span class="right-zddl">
                        <input  name="" type="checkbox"  checked/>
                        下次自动登录
                        </span>
                    </li>
                </ul>
                <div class="dl-button"><span style="color:#fff;" @click="login">登录</span></div>
                <div class="fgx">------------------还没有账号------------------</div>
                <!-- <div class="dl-button" style="background-color: #fff; color:  #5FB52C;">免费注册</div> -->
                <router-link tag="div" class="dl-button" to="/reg" style="background-color: #fff; color:  #5FB52C;">免费注册</router-link>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    data(){
        return {
            username : '',
            password : '',
            mess : '',
            password_type : 'password'
        }
    },
    methods:{
      login(){
        this.$store.dispatch('CHECK_USER',{
          username:this.username,
          password:this.password
        }).then(
          data=>{
              data.err == 0 ? this.$router.push('/user') : this.mess = data.mess;
              this.username = "";
              this.password = "";
            }
        )
      },
      back(){
        //   window.history.go(-1);
        this.$router.go(-1);
      },
      clear1(){
            this.username = "";
      },
      check(){
            this.password_type == 'password' ? this.password_type = 'text' : this.password_type = 'password'
      }
  }
}
</script>
<style scoped>
.outdiv{width: 100%;height:100%;}
.head-top{background-color: #00b38a;width:100%;text-align: center;padding:0.25rem 0;
font-size: 0.3rem;color:#fff;position:fixed;line-height: 0.3rem;top:0;left:0;z-index:10;}
.head-top .bt{font-size:0.45rem;font-weight: 500;}
.head-top .div-1{position:absolute;top:0.27rem;left:0.25rem;height:0.5rem;}
.head-top .div-1 img{width: 20px;display: block;float:left;}
.head-top .div-l span{font-size:0.3rem;position: relative;top:-0.1rem;display:block;float:left;}
.body-conter{overflow:auto;width:100%;height:100%;position:absolute;top:0.84rem;left:0;right:0;background:rgb(245, 245, 245);}
.body-conter .div-dl{width:95%;border-radius: 5px;background-color:#fff;margin:0 auto;height:1.8rem;margin-top:0.15rem;}
.body-conter .div-dl ul {margin: 0px;width: 100%;padding: inherit;border: none;}
.body-conter .div-dl ul .yhm{border-bottom: 1px solid #f2f2f2;padding:9px 0;color:#838383;font-size:0.2rem;}
.body-conter .div-dl ul .yhm .yhico{width:0.6rem;float: left;padding-left: 0.2rem;}
img{width:0.6rem;}
input{display:block;border:none;width:4rem;height:0.5rem;padding-left:15px;float:left;}
.qk{float:right;width:0.5rem;}
.body-conter .div-mmzd{margin:0px auto;width:95%;height:auto;}
.body-conter .div-mmzd ul{padding:inherit;border:inherit;margin-top:0.1rem;}
.body-conter .div-mmzd ul li{padding:0.15rem 0;font-size: 0.2rem;color: #838383;}
.body-conter .div-mmzd ul li .left-wjmm{color:#5f852c;font-size:0.1rem;float:left;}
.body-conter .div-mmzd ul li .right-zddl{font-size:0.1rem;float:right;}
.body-conter .div-mmzd ul li .right-zddl input{position:relative;top:-6px;margin-right:5px;width:15px;}
.body-conter .div-mmzd .dl-button{width:100%;height:auto;margin:0px auto;text-align:center;padding:0.2rem 0;background-color:#00b38a;
font-size:0.25rem;margin-top:0.2rem;}
.body-conter .div-mmzd .fgx{text-align:center;width:100%;height:auto;margin:0px auto;color:#8e8e8e;
font-size:0.25rem;padding:0.25rem 0;}
</style>