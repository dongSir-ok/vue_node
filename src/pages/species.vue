<template>
    <div class="species">
        <div class="head-top">
            <span class="bt">书城</span>
        </div>
        <div class="search-box">
            <i class="icon icon-search"></i>
            <input type="text" placeholder="搜索">
        </div>
        <div class="banner">
            <img src="../assets/img/banner.png" class="img-banner"/>
        </div>
        <div class="tbody">
            <div class="tbody-types">
                <div class="type">
                    <img src="../assets/img/type.png"/>
                    <span>分类</span>
                </div>
                <div class="sort">
                    <img src="../assets/img/sort.png"/>
                    <span>排行榜</span>
                </div>
                <div class="over">
                    <img src="../assets/img/over.png"/>
                    <span>完结精品</span>
                </div>
                <div class="update">
                    <img src="../assets/img/update.png"/>
                    <span>今日更新</span>
                </div>
            </div>
            <div class="hot-list">
                <h2>今日大热榜</h2>
                <span>百万书友阅读趋势</span>
                <b>更新时间</b>
            </div>
            <div class="book-list">
                <div class="book-box" v-for="item of listData" :key="item._id">
                    <div class="book-img">
                        <img :src="item.img" alt="图片"/>
                    </div>
                    <div class="book-info">
                        <div class="bookInfo">
                            <p>{{item.title}}</p>
                            <span>热度：<i>{{item.num}}</i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tbody-footer">
                ~到底了^_^
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            listData : [],
            mess : ''
        }
    },
    mounted(){
        this.$axios({
            url : '/api/shop',
            method : 'get'
        }).then(
            res=>res.data.err === 0 ? this.listData = res.data.data : this.mess = res.data.err
        )
    }
}
</script>
<style scoped>
.species{width: 100%;height:100%;}
.species .head-top{background-color: #00b38a;width:100%;text-align: center;padding:0.25rem 0;
font-size: 0.3rem;color:#fff;position:fixed;line-height: 0.4rem;top:0;left:0;z-index:10;z-index:100;}
.species .head-top .bt{font-size:0.45rem;font-weight: 500;}

.search-box{ background: #f4f4f4;top:1.1rem;border-radius: 22px;position: relative;width: 90%;margin: 0 auto;
    height: 0.5rem;}
.search-box i{display:block;position: absolute;width:0.5rem;height:0.5rem;left:4px;top:2px; background: url('../assets/img/search.png') no-repeat;
    background-size:0.45rem;border-radius: 0.3rem;float:left;}
.search-box input{width: 100%;background: none;border: none;font-size: 0.3rem;text-align: left;height: 0.4rem;
    border-radius: 3px;display: block;float:left;position:absolute;left:0.55rem;top:0.06rem;}
.banner{width:94%;background:#999;position: relative;left:0;right:0;margin:0 auto;margin-top:1.5rem;margin-bottom:0.3rem;overflow: hidden;border-radius: 0.2rem;}
.banner .img-banner{display:block;}
.tbody{width:100%;font-size:0.25rem;overflow:hidden;}
.tbody .tbody-types{width:100%;overflow:hidden;display:flex;}
.tbody .tbody-types .type,.sort,.over,.update{flex:1;float:left;}
.tbody .tbody-types img{display:block;width:0.4rem;height:0.4rem;position: relative;left:0;right:0;margin:0 auto;}
.tbody .hot-list{margin-top:0.3rem;}
.tbody .hot-list h2{float:left;text-indent:0.25rem;}
.tbody .hot-list span{display:block;font-size:0.2rem;float:left;padding-top:0.12rem;padding-left:0.1rem;}
.tbody .hot-list b{display:block;font-size:0.23rem;font-weight:700;padding:0.12rem 0.2rem 0 0.1rem;float:right;}
.tbody .book-list{padding-top:0.8rem;padding-left:0.3rem;overflow:hidden;width:90%;position:relative;left:0;right:0;margin:0 auto;}
.book-list .book-box{width:45%;overflow:hidden;margin-top:0.15rem;float:left;}
.book-list .book-box .book-img{width:2rem;overflow:hidden;float:left;padding:0.2rem 0.1rem;}
.book-list .book-box .book-img img{display:block;}
.book-list .book-box .book-info{float:left;padding:0.4rem 0.1rem;}
.book-list .book-box .book-info span{display: block;float:left;padding:0.2rem 0;}
.book-list .book-box .book-info i{color:red;display:block;float:right;font-style: normal;padding:0.05rem 0;}
.tbody .tbody-footer{padding-bottom:0.3rem;height:1rem;bottom:0;width:100%;text-align:center;width:100%;background:rgb(245, 245, 245);margin-top:0.1rem;}
</style>
