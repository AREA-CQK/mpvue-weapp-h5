<template>
    <div class="container">
    <Swiper>
        <Slide>
                1
        </Slide>
        <Slide>
                2
        </Slide>
        <Slide>
                3
        </Slide>
    </Swiper>
    </div>
</template>
<script>
import util from '../../utils/util'
import store from '../../vuex/store'

export default {
    name: "chat",
    data () {
        return {
           
        }
    },
    components:{
        Swiper,
        Slide
    },
    methods: {
 
    },
    mounted(){
        // this.service.previewImg(
        //    'https://pic.ziroom.com/static/upload/cms/2016/12/6f8ac101cdf4a67facc0028d22f530b6.jpg',
        //    ['https://pic.ziroom.com/static/upload/cms/2016/12/6f8ac101cdf4a67facc0028d22f530b6.jpg','https://pic.ziroom.com/static/upload/cms/2017/08/0fb4fcd6d0f1c4a765be6658e43d9819.jpg']
        // )
    },
    created () {

    }
}

</script>
<style>

</style>
