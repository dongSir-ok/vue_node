<template>
    <div class="home">
        <Slider :banner="banner"></Slider>
        <Place></Place>
        <List :list-data="$store.state.home" :data-name="'home'"></List>
    </div>
</template>
<script>
import Slider from '../components/Slider';
import Place from '../components/Place';
import List from '../components/List';
export default {
    data(){
        return {
            // listData : [],
            banner : [],
            // place : []
        }
    },
    components : {  //注册
        Slider,
        Place,
        List
    },
    mounted(){
        // this.$store.dispatch('UPDATE_BANNER');
        this.$store.dispatch('UPDATE_HOME');
    }
}
</script>
