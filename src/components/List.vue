<template>
    <div class="list">
        <DivHeight></DivHeight>
        <div class="aui-flex">
            <div class="aui-flex-box">
                <h1>见识书单</h1>
            </div>
            <div class="aui-arrow">
                <router-link tag="a" class="more" to="/species">查看更多</router-link>
            </div>
        </div>
        <div class="aui-book-list">
            <a href="javascript:;" class="aui-flex">
                <div class="aui-book-img">
                    <span>新手上线</span>
                    <img src="../assets/img/bok-001.png"/>
                </div>
                <div class="aui-list-box">
                    <h2>Hi-Finance:投资最重要的事情投资最重要的事情</h2>
                    <p>金融经典书籍解读</p>
                    <h3>5本 · 195个在学</h3>
                    <span>
                        <em>IQ9.9</em>
                        <i>IQ19.99</i>
                        <b>1.0折</b>
                    </span>
                </div>
            </a>
        </div>
        <DivHeight></DivHeight>
        <div class="aui-flex">
            <div class="aui-flex-box">
                <h1>见识商城</h1>
            </div>
            <div class="aui-arrow">
                <router-link tag="a" class="more" to="/species">查看更多</router-link>
            </div>
        </div>
        <div class="aui-book-list">
            <a href="javascript:;" class="aui-flex">
                <div class="aui-book-img">
                    <span>新手上线</span>
                    <img src="../assets/img/bok-002.png"/>
                </div>
                <div class="aui-list-box">
                    <h2>Hi-Finance:投资最重要的事情投资最重要的事情</h2>
                    <p>金融经典书籍解读</p>
                    <h4>全国包邮</h4>
                    <span>
                        <em>￥49</em>
                    </span>
                </div>
            </a>
        </div>
        <DivHeight></DivHeight>
        <div class="aui-flex">
            <div class="aui-flex-box">
                <h1>大师在线课</h1>
            </div>
            <div class="aui-arrow">
                <router-link tag="a" class="more" to="/species">查看更多</router-link>
            </div>
        </div>
        <div class="aui-list-theme-box">
            <a href="javascript:;" class="aui-list-item">
                <div class="aui-list-theme-img">
                    <img src="../assets/img/bok-003.png"/>
                </div>
                <div class="aui-list-theme-message">
                    <h3 class="aui-list-theme-title">大类资产框架手册府老师|全程课 大师级课程</h3>
                    <p>IQ&nbsp;199</p>
                </div>
            </a>
            <a href="javascript:;" class="aui-list-item">
                <div class="aui-list-theme-img">
                    <img src="../assets/img/bok-004.png"/>
                </div>
                <div class="aui-list-theme-message">
                    <h3 class="aui-list-theme-title">大类资产框架手册府老师|全程课 大师级课程</h3>
                    <p>IQ&nbsp;199</p>
                </div>
            </a>
            <a href="javascript:;" class="aui-list-item">
                <div class="aui-list-theme-img">
                    <img src="../assets/img/bok-005.png"/>
                </div>
                <div class="aui-list-theme-message">
                    <h3 class="aui-list-theme-title">大类资产框架手册府老师|全程课 大师级课程</h3>
                    <p>IQ&nbsp;199</p>
                </div>
            </a>
        </div>
        <DivHeight></DivHeight>
        <div class="aui-flex">
            <div class="aui-flex-box">
                <h1>实战课</h1>
            </div>
            <div class="aui-arrow">
                <!-- <p to="/column">查看更多</p> -->
                <router-link tag="a" class="more" to="/species">查看更多</router-link>
            </div>
        </div>
        <div class="aui-book-list aui-book-list-one">
                <router-link tag="a" v-for="item of listData" :key="item._id" class="aui-flex" :to="{name:'detail', params:{id:item._id}, query:{dataName:dataName}}">
                    <div class="aui-book-img">
                        <span style="left:0;top:0;">{{item.tip}}</span>
                        <!-- <img :src="require(item.icon)"/> -->
                        <img :src="item.icon"/>
                    </div>
                    <div class="aui-list-box">
                        <h2>{{item.title}}</h2>
                        <p>{{item.content}}</p>
                        <h3>
                            <em>{{item.num}}人看过</em>
                            <i>IQ {{item.price}}</i>
                        </h3>
                    </div>
                </router-link>
        </div>
        <DivHeight></DivHeight>
    </div>
</template>
<script>
import DivHeight from '../components/divHeight'
export default {
    components:{
        DivHeight
    },
    props : ['listData','dataName'],
    // mounted(){
    //     console.log(this.listData);
    //     for(let i=0;i<this.listData.length;i++){
    //         this.ss = 
    //         this.myIcon.push(this.ss);
    //         // this.b = require(this.myIcon);
    //     };
    //     console.log(this.myIcon);
        
    // }
}
</script>
<style scoped>
.list{overflow:hidden;margin-bottom:0.7rem;}
.aui-flex{position: relative;padding: 15px;padding-bottom: 0;overflow:hidden;display:block;}
.aui-flex-box{float:left;}
.aui-arrow{float:right;}
.aui-flex-box h1{color: #303741;font-size: 0.3rem;font-weight: 500;}
.aui-arrow{position: relative;}
.aui-arrow p,.more{color:#9b9b9b;font-size: 0.3rem;padding-right: 0.2rem;}
.aui-arrow .more{display:block;}
.aui-arrow:after {content: " ";display: inline-block;height: 6px;width: 6px;border-width: 2px 2px 0 0;
    border-color: #848484;border-style: solid;transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);position: absolute;
    top: 50%;margin-top: -4px;right: 2px;border-radius: 1px;}
img{padding:0;}
.aui-book-img{float:left;width:2.25rem;margin-right:0.5rem;position: relative;margin-right:8px;}
.aui-book-img span{font-size:0.25rem;color: #fff;background-color: #ee6310;position:absolute;
    left:0.1rem;top:0.1rem;}
.aui-list-box{color:#333;font-size:0.25rem;float:left;width:3.3rem;}
.aui-list-box h2{text-align:left;color:#303741;font-weight:500;overflow: hidden;word-wrap: normal;text-overflow: ellipsis;white-space: nowrap;
font-size:0.24rem;margin-bottom:0.12rem;}
.aui-list-box p{overflow: hidden;color:#848c97;word-break:break-all;text-overflow: ellipsis;font-size: 0.2rem;
text-align:left;margin-bottom: 0.12rem;}
.aui-list-box h3{overflow: hidden;text-align:left;color: #8a8a8a;font-weight:normal;width:100%;font-size:0.2rem;margin-bottom: 0.2rem;}
.aui-list-box span{overflow: hidden;}
.aui-list-box span em{float:left;color:#feb249;font-size:0.2rem;font-style: normal;}
.aui-list-box span i{float:left;color:#545454;font-size:0.2rem;font-style: normal;text-decoration: line-through;margin:0 0.1rem;}
.aui-list-box span b{float:left;color:#999;font-size:0.2rem;font-style: normal;}
.aui-list-box h4{overflow:hidden;background:#fee7e8;color:#f94344;width:2.2rem;font-size:0.1rem;border-radius:10px;padding:0.1rem 0.2rem;text-align:center;}
.aui-book-list-one .aui-book-img{width:1.25rem;}
.aui-book-list-one .aui-book-img span{font-size:0.1rem;}
.aui-book-list-one .aui-list-box p{margin-bottom:0.25rem;}
/* .aui-book-list-one .aui-list-box{width:4.5rem;} */
.aui-list-box h3 i{display: block;float:right;color:#feb249;}
.aui-list-theme-box{padding:0.3rem 0 0 0.3rem;overflow:hidden;position:relative;}
.aui-list-item{width:29.33%;float:left;margin:0 4% 2% 0;display:block;overflow:hidden;}
.aui-list-theme-img{height:auto;width:100%;position:relative;}
.aui-list-theme-img img{width:100%;height:auto;display:auto;}
.aui-list-theme-message{padding:0.1rem 0;}
.aui-list-theme-title{color: #333;font-size: 0.15rem;margin: 0.1rem 0;overflow: hidden;display: -webkit-box;
    -webkit-line-clamp: 2;word-break: break-all;font-weight: normal;text-overflow: ellipsis;}
.aui-list-theme-message p{font-size:0.2rem;text-align: left;color:#feb249;}
</style>