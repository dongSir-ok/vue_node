<template>
<div class="place">
    <DivHeight></DivHeight>
    <div class="aui-place" @click="tip">
        <a href="javascript:;" class="aui-place-grid aui-place-one">
            <div class="aui-place-grid-icon">
                <img src="../assets/img/nav-001.png" alt="图片"/>
            </div>
            <div class="aui-place-grid-text">
                <h2>金卡会员</h2>
            </div>
        </a>
        <a href="javascript:;" class="aui-place-grid aui-place-one">
            <div class="aui-place-grid-icon">
                <img src="../assets/img/nav-002.png" alt="图片"/>
            </div>
            <div class="aui-place-grid-text">
                <h2>铂金见智</h2>
            </div>
        </a>
        <a href="javascript:;" class="aui-place-grid aui-place-one">
            <div class="aui-place-grid-icon">
                <img src="../assets/img/nav-003.png" alt="图片"/>
            </div>
            <div class="aui-place-grid-text">
                <h2>黑卡大师课</h2>
            </div>
        </a>
        <a href="javascript:;" class="aui-place-grid aui-place-one">
            <div class="aui-place-grid-icon">
                <img src="../assets/img/nav-004.png" alt="图片"/>
            </div>
            <div class="aui-place-grid-text">
                <h2>用户疑问</h2>
            </div>
        </a>
        <a href="javascript:;" class="aui-place-grid aui-place-one">
            <div class="aui-place-grid-icon">
                <img src="../assets/img/nav-005.png" alt="图片"/>
            </div>
            <div class="aui-place-grid-text">
                <h2>VIP商城</h2>
            </div>
        </a>
        <a href="javascript:;" class="aui-place-grid aui-place-one">
            <div class="aui-place-grid-icon">
                <img src="../assets/img/nav-006.png" alt="图片"/>
            </div>
            <div class="aui-place-grid-text">
                <h2>热门圈子</h2>
            </div>
        </a>
        <a href="javascript:;" class="aui-place-grid aui-place-one">
            <div class="aui-place-grid-icon">
                <img src="../assets/img/nav-007.png" alt="图片"/> 
            </div>
            <div class="aui-place-grid-text">
                <h2>精选话题</h2>
            </div>
        </a>
        <a href="javascript:;" class="aui-place-grid aui-place-one">
            <div class="aui-place-grid-icon">
                <img src="../assets/img/nav-008.png" alt="图片"/>
            </div>
            <div class="aui-place-grid-text">
                <h2>见识LIVE</h2>
            </div>
        </a>
    </div>
</div>
</template>
<script>
import DivHeight from '../components/divHeight'
export default {
    methods : {
        tip(){
            alert('功能暂未完善');
        }
    },
    components:{
        DivHeight
    }
}
</script>
<style scoped>
    .aui-place{padding:0.25rem 0;position:relative;overflow:hidden;}
    .gui-place-one,.aui-place-grid{width: 25%;}
    .aui-place-grid{position:relative;float:left;padding:1px;margin:5px 0;box-sizing: border-box;}
    .aui-place-grid-icon{width:30px;height:30px;margin:0 auto;}
    .aui-place-grid-icon img{width: 100%;height: 100%;display:block;border:none;}
    .aui-place-grid-text{text-align:center;}
    .aui-place-grid-text h2{font-size:0.26rem;font-weight: normal;color:#666;}
</style>