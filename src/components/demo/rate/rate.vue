<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Radio</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-rate v-model="value" ></v-rate>
            </div>
          <h4>辅助文字</h4>
            <div class="demo-block">
                <v-rate v-model="value2" show-text></v-rate>
            </div>
              <h4>只读</h4>
            <div class="demo-block">
                <v-rate v-model="value2" disabled></v-rate>
            </div>
        </div>
    </div>
</template>
<script>
import VRate from '../../common/rate/rate'
export default {
    components:{
        VRate
    },
    data(){
        return{
            value:1,
            value2:2
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

