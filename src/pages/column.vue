<template>
    <div class="column">
        <div class="head-top">
            <span class="bt">信息</span>
        </div>
        <div class="box">
            <div class="box-title">
                <h1>书架</h1>
            </div>
            <div class="box-list" v-for="item of listData" :key="item._id">
                <div class="box-list-time">
                    <div class="time">
                        {{item.time}}
                    </div>
                    <div class="link-time">
                        今天16:30连接
                    </div>
                </div>
                <div class="box-list-info">
                    <h3>{{item.title}}</h3>
                    <p>{{item.des}}</p>
                </div>
                <div class="box-list-tip">
                    <span>{{item.tip}}</span>
                </div>
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
          url:'/api/column',
          method:'get'
        }).then(
          res=>res.data.err === 0 ? this.listData = res.data.data : this.mess = res.data.msg
        )
        // this.$store.dispatch('UPDATE_BUY')
    }
}
</script>
<style scoped>
.column{width: 100%;height:100%;font-size: 0.3rem;font-weight: 500;margin-bottom:1.5rem;}
.head-top{background-color: #00b38a;width:100%;text-align: center;padding:0.25rem 0;
font-size: 0.3rem;color:#fff;position:fixed;line-height: 0.4rem;top:0;left:0;z-index:10;z-index:100;}
.head-top .bt{font-size:0.45rem;font-weight: 500;}
.box{position:relative;top:0.8rem;font-size:0.2rem;}
.box .box-title{border-bottom:1px solid #999;padding:0.1rem 0;text-align: left;padding-left:0.2rem;}
.box .box-list{width:90%;border: 1px solid #999;top:1rem;overflow: hidden;left:0;right:0;margin:0.2rem auto;border-radius: 0.1rem;}
.box .box-list .box-list-time{width:100%;overflow:hidden;border-bottom:1px solid #999;font-size:0.3rem;padding:0.2rem 0.1rem;text-align: left;}
.box .box-list .box-list-time .time{float:left;}
.box .box-list .box-list-time .link-time{float:right;padding:0 0.1rem;font-size:0.15rem;color:red;}
.box .box-list .box-list-info{text-align:left;border-bottom:1px solid #999;}
.box .box-list .box-list-info h3{font-size:0.3rem;padding-left:0.2rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.box .box-list .box-list-info p{font-size:0.25rem;padding-left:0.25rem;padding-top: 0.1rem;}
.box .box-list .box-list-tip{text-align: left;overflow:hidden;}
.box .box-list .box-list-tip span{padding-left:0.2rem;display:block;line-height: 0.5rem;}
</style>