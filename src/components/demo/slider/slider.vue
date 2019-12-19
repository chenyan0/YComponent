<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Slider 滑块</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-slider v-model="value" :min="0"  :max="100" @change="getValue"></v-slider>
            </div>
             <h4>禁用</h4>
            <div class="demo-block">
                <v-slider v-model="value" :min="0"   :max="100" disabled @change="getValue"></v-slider>
            </div>
        </div>
    </div>
</template>
<script>
import VSlider from '@/components/common/slider/slider'
export default {
    components:{
        VSlider
    },
    data(){
        return{

            value:10
        }
    },
    methods:{
    getValue(v){
        console.log(v)
    }
    }
}
</script>

