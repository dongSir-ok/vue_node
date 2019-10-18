<template>
    <div class="column">
        <div class="head-top">
            <span class="bt">书架</span>
        </div>
        <span class="k"></span>
        <div class="box">
            <div class="box-list" v-for="item of $store.state.columns" :key="item._id">
                <div class="img_left">
                    <img :src="item.icon"/>
                </div>
                <div class="info_right">
                    <div class="info_right_top">
                        <p>书名:{{item.title}}</p>
                        <i>{{item.time}}</i>
                    </div>
                    <div class="info_right_bottom">
                        <span>作者:{{item.author}}</span>
                        <b>简介:{{item.des}}</b>
                        <em>{{item.tip}}</em>
                        <strong>{{item.state}}</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="tip">~我也是有底线的~</div>
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
        this.$store.dispatch('UPDATE_COLUMN')
    }
}
</script>
<style scoped>
.column{width: 100%;height:100%;font-size: 0.3rem;font-weight: 500;margin-bottom:1.5rem;background:#fff;}
.head-top{background-color: #00b38a;width:100%;text-align: center;padding:0.25rem 0;
font-size: 0.3rem;color:#fff;position:fixed;line-height: 0.4rem;top:0;left:0;z-index:10;z-index:100;}
.head-top .bt{font-size:0.45rem;font-weight: 500;}
.k{width:100%;height:1.1rem;display:block;}
.box{width:100%;overflow:hidden;}
.box .box-list{width:90%;overflow:hidden;padding:0.1rem 0;margin:0.2rem auto;background:rgb(245,245,245);}
.box .img_left{width:2.1rem;overflow:hidden;float:left;}
.box .img_left img{display:block;}
.box .info_right{float:left;overflow: hidden;font-size: 0.25rem;padding-left:0.2rem;width:3.45rem;}
span,b,i,strong,em{display: block;font-style: normal;font-weight: normal;padding-top:0.1rem;}
.box .info_right .info_right_top{font-size:0.28rem;font-weight: 700;overflow: hidden;}
.box .info_right .info_right_top p{float: left;}
.box .info_right .info_right_top i{float:right;font-weight:700;padding-left:0.45rem;font-size:0.1rem;}
.box .info_right .info_right_bottom{text-align: left;}
.box .info_right .info_right_bottom b{width:3.5rem;overflow:hidden;word-wrap: normal;text-overflow: ellipsis;white-space: nowrap;}
.box .info_right .info_right_bottom em{font-size:0.1rem;}
.tip{width:100%;font-size:0.2rem;padding-top:0.3rem;}
</style>