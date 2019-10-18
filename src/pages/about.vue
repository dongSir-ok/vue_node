<template>
    
    <div class="about">
        <div class="head-top">
            <span class="bt">关于我们</span>
            <div class="div-1">
                <img src="../assets/img/fanhui-ioc.png" @click="back"/>
                <span>返回</span>
            </div>
        </div>
        <div class="k"></div>
        <p>暂无数据提供</p>
    </div>
</template>
<script>
export default {
    methods : {
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.head-top{background-color: #00b38a;width:100%;text-align: center;padding:0.25rem 0;
font-size: 0.3rem;color:#fff;position:fixed;line-height: 0.4rem;top:0;left:0;z-index:10;z-index:100;}
.head-top .bt{font-size:0.45rem;font-weight: 500;}
.head-top .div-1{position:absolute;top:0.27rem;left:0.25rem;height:0.5rem;}
.head-top .div-1 img{width: 20px;display: block;float:left;}
.head-top .div-l span{font-size:0.3rem;position: relative;top:0.1rem;display:block;float:left;}
.k{width:100%;height:1.1rem;}
</style>