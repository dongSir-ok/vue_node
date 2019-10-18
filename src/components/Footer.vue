<template>
    <footer class="aui-footer aui-footer-fixed">
        <router-link tag="a" id="aui-tabBar-item" class="aui-tabBar-item-active" to="/home">
            <span class="aui-tabBar-item-text">首页</span>
        </router-link>
        <router-link tag="a" id="aui-tabBar-item" to="/species">
            <span class="aui-tabBar-item-text">书城</span>
        </router-link>
        <router-link tag="a" id="aui-tabBar-item" to="/column">
            <span class="aui-tabBar-item-text">书架</span>
        </router-link>
        <router-link tag="a" id="aui-tabBar-item" to="/user">
            <span class="aui-tabBar-item-text">我的</span>
        </router-link>
    </footer>
</template>
<script>
window.onload = function(){
    var li = document.querySelector('footer').children;
    for(var i=0;i<li.length;i++){
        li[i].index = i;
        li[i].onclick = function(){
            for(var i=0;i<li.length;i++){
                li[i].className = "";
            }
            this.className = "aui-tabBar-item-active"
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: #08acee;
}

.aui-footer {
    width: 100%;
    position: relative;
    z-index: 100;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 7px 5px 7px 5px;
    background: #fff;
    border-top:1px solid #9f9f9f;
}

#aui-tabBar-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #979797;
}

.aui-tabBar-item-text {
    display: inline-block;
    font-size: 0.3rem;
    color: #818085;
    padding-top: 2px;
}

.aui-tabBar-item-active .aui-tabBar-item-text {
    color: #f94745;
}

.aui-footer-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 49;
}

.aui-book-list-one .aui-book-img {
    width: 70px;
}

.aui-book-img-one {
    width: 100px;
}

.aui-flex-box h4 {
    background: #fee7e8;
    color: #f94344;
    font-size: 0.7rem;
    border-radius: 22px;
    padding: 0.1rem 0.2rem;
    font-weight: normal;
    width: 60px;
    text-align: center;
}

.aui-book-list-one .aui-flex-box p {
    margin-bottom: 1rem;
}

.aui-book-list-one .aui-flex-box h3 {
    overflow: hidden;
}

.aui-book-list-one .aui-flex-box h3 em {
    font-style: normal;
    float: left;
}

.aui-book-list-one .aui-flex-box h3 i {
    font-style: normal;
    float: right;
    color: #feb249;
    font-size: 0.9rem;
    font-weight: 500;
}


</style>