<template>
    <div class="shaky">
        <div class="head-top">
            <span class="bt">活动</span>
            <div class="div-1">
                <img src="../assets/img/fanhui-ioc.png" @click="back"/>
                <span>返回</span>
            </div>
        </div>
        <span class="kk"></span>
        <div class="tip">暂无数据</div>
    </div>
</template>
<script>
export default {
    methods : {
        back(){
            window.history.go(-1);
        }
    }
}
</script>
<style scoped>
.head-top{background-color: #00b38a;width:100%;text-align: center;padding:0.25rem 0;
font-size: 0.3rem;color:#fff;position:fixed;line-height: 0.3rem;top:0;left:0;z-index:10;}
.head-top .bt{font-size:0.45rem;font-weight: 500;}
.head-top .div-1{position:absolute;top:0.27rem;left:0.25rem;height:0.5rem;}
.head-top .div-1 img{width: 20px;display: block;float:left;}
.head-top .div-l span{font-size:0.3rem;position: relative;top:-0.1rem;display:block;float:left;}
.kk{display:block;height:1.1rem;width:100%;}
.tip{font-size: 1rem;width:100%;}
</style>