<template>
    <div class="container">
        <swiper class="swiperbox">
            <!-- slides -->
            <swiper-item>I'm Slide 1</swiper-item>
            <swiper-item>I'm Slide 2</swiper-item>
            <swiper-item>I'm Slide 3</swiper-item>
            <swiper-item>I'm Slide 4</swiper-item>
            <swiper-item>I'm Slide 5</swiper-item>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

    </div>
</template>
<script>
import util from '../../utils/util'
import store from '../../vuex/store'

// import { swiperSlide } from 'vue-awesome-swiper' //只在H5使用

export default {
    name: "chat",
    data () {
        return {
           
        }
    },
    components:{
        // swiperItem: swiperSlide   //只在H5使用
    },
    methods: {
 
    },
    mounted(){
   
    },
    created () {

    }
}

</script>
<style>
.swiperbox{
    width:100%;
}
</style>
