<template>
    <div class="detail">
        <div class="head-top">
            <span class="bt">详情</span>
            <div class="div-1">
                <img src="../assets/img/fanhui-ioc.png" @click="back"/>
                <span>返回</span>
            </div>
        </div>
        <div class="kk"></div>
        <div class="content" v-if="$store.state.detail[0]">
            <div class="content-left">
                <img :src="$store.state.detail[0].icon"/>
            </div>
            <div class="content-right">
                <p>作品名:<b>{{$store.state.detail[0].title}}</b></p>
                <span>作者:<b class="b1">{{$store.state.detail[0].author}}</b></span>
                <span>状态:<b class="b1">{{$store.state.detail[0].state}}</b></span>
                <span>已购:<b class="b1">{{$store.state.detail[0].num}}</b></span>
            </div>
        </div>
        <div class="pro" v-if="$store.state.detail[0]">
            <span>简介:</span>
            <em class="des">{{$store.state.detail[0].des}}</em>
        </div>
        <div class="list" @click="tip">
            <i class="icon icon-list"></i>
            <span>目录</span>
            <i class="icon icon-in"></i>
        </div>
        <div class="related">
            <h3>相关推荐</h3>
            <div class="box">
                <div class="book-box" v-for="item of $store.state.home" :key="item.id">
                    <div class="book-img">
                        <img :src="item.icon" alt="图片"/>
                    </div>
                    <div class="book-info">
                        <div class="bookInfo">
                            <p>{{item.title}}</p>
                            <span>热度：<i>{{item.num}}</i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            
            <div class="footer-car">
                <span @click="add()">加入书架</span>
            </div>
            <div class="footer-buy">
                <span>收藏</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        id:String,
        dataName:String,
    },
    methods : {
        tip(){
            alert('暂未完善');
        },
        back(){
            this.$router.go(-1);
            // window.history.go(-1);
            // window.location.href = document.referrer;
        },
        add(){
            let nickname = JSON.parse(window.localStorage.getItem('user')).data.nickname;
            let title = this.$store.state.detail[0].title;
            let des = this.$store.state.detail[0].content;
            let icon = this.$store.state.detail[0].icon;
            let author = this.$store.state.detail[0].author;
            let state = this.$store.state.detail[0].state;
            let tip = this.$store.state.detail[0].tip;
            this.$axios({
                url : '/api/column',
                method : 'post',
                data : {
                    title,
                    nickname
                }
            }).then(
                res=>{
                    if(res.data.err === 0){
                        this.$store.dispatch('UPDATE_BOOK',{tip,title,des,icon,author,state,nickname}).then(
                            res=>{
                                if(res.err === 0){
                                    alert('加入书架成功');
                                }else{
                                    alert('加入书架失败');
                                }
                            }
                        );
                    }else{
                        alert("已加入书架");
                    }
                }
            )
            // this.$store.dispatch('UPDATE_BOOK',{tip,title,des,icon,author,state});
        }
    },
    activated(){
        let id = this.id;
        let dataName = this.dataName;
        if(window.localStorage.getItem('user')){
            this.$store.dispatch('UPDATE_DETAIL',{dataName,id})
        }else{
            this.$router.push('/login');
        }
        
    }
}
</script>
<style scoped>
.detail{width: 100%;height:100%;font-size: 0.3rem;}
.head-top{background-color: #00b38a;width:100%;text-align: center;padding:0.25rem 0;
font-size: 0.3rem;color:#fff;position:fixed;line-height: 0.4rem;top:0;left:0;z-index:10;z-index:100;}
.head-top .bt{font-size:0.45rem;font-weight: 500;}
.head-top .div-1{position:absolute;top:0.27rem;left:0.25rem;height:0.5rem;}
.head-top .div-1 img{width: 20px;display: block;float:left;}
.head-top .div-l span{font-size:0.3rem;position: relative;top:0.1rem;display:block;float:left;}
.kk{width:100%;height:0.85rem;}
.content{width:100%;overflow:hidden;margin-top:0.2rem;text-align:left;}
.content .content-left{float:left;overflow:hidden;padding:0;margin:0;box-shadow: 10px 10px 5px #888888;}
.content .content-left img{display:block;padding-left:0.2rem;width:2rem;}
.content .content-right{padding-left:0.3rem;overflow:hidden;font-size:0.25rem;color:#000;}
.content .content-right p{padding:0.25rem;}
.content .content-right span{display:block;padding:0.15rem 0.25rem;}
.content .content-right b{color:#999;display:inline-block;padding-left:0.1rem;}
.content .content-right b.b1{padding-left:0.34rem;}
.content .content-right .des{font-size:0.2rem;}
.pro{margin-top:0.25rem;padding:0 0.2rem;}
.pro span{display:block;width:100%;text-align:left;}
.pro em{display:block;font-style: normal;font-weight: normal;font-size: 0.3rem;text-indent: 0.3rem;text-align: left;}
.list{width:100%;margin-top:0.3rem;text-align: left;overflow:hidden;box-shadow: 3px 3px 3px #999}
.list span{font-size:0.34rem;float:left;padding-left:0.1rem;}
.list i{display:block;float:left;width:0.4rem;height:0.44rem;}
.list i.icon-list{margin-left:0.2rem;background:url('../assets/img/list.png') no-repeat center;background-size:0.44rem;}
.list i.icon-in{float:right;margin-right:0.2rem;background:url('../assets/img/right.png') no-repeat center;background-size:0.44rem;}
.related{margin-top:0.5rem;height:10rem;}
.related h3{font-size:0.45rem;font-weight: 500;}
.related .box{margin-top:0.3rem;}
.box{padding-left:0.2rem;}
.box .book-box{width:45%;overflow:hidden;margin-top:0.15rem;float:left;}
.box .book-box .book-img{width:2rem;height:3rem;float:left;padding:0.2rem 0.1rem;}
.box .book-box .book-img img{display:block;}
.box .book-box .book-info{float:left;padding:0.4rem 0.1rem;}
.box .book-box .book-info span{display: block;float:left;padding:0.2rem 0;}
.box .book-box .book-info i{color:red;display:block;float:right;font-style: normal;padding:0.05rem 0;}
.footer{width:100%;position: fixed;bottom:0;height:0.9rem;background: #fff;display: flex;line-height: 0.9rem;color:#000;vertical-align: middle;border-top:1px solid #888;}
/* .footer .footer-left{flex:1;background-color: #fff;overflow:hideen;color: #000;text-align: center;border-right:1px solid #000;} */
/* .footer .footer-left img{display: block;width:50%;position:relative;left:0;right:0;margin:0 auto;top:0.9em;} */
.footer .footer-left div{display:block;float:left;font-size:0.2rem;padding:0 0.3em;margin-top:0.2em;}
/* .footer .footer-left .link{} */
/* .footer .footer-left .shop{} */
/* .footer .footer-left .collection{} */
.footer .footer-car{flex:1;background:papayawhip;border-right:1px solid #888;}
.footer .footer-buy{flex:1;position: relative;background:papayawhip;}
</style>