
<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Progress 进度条</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-progress :percentage="50"></v-progress>
                <v-progress :percentage="100" strokeColor="#3385ff"></v-progress>
                <v-progress :percentage="70" :showText="false"></v-progress>
            </div>
            <h4>环形进度</h4>
            <div class="demo-block">
                <v-progress :percentage="20" :circleWidth="120" strokeColor="#EE4743" type="circle" classPrefix="progress"></v-progress>
                <v-progress :percentage="100" :circleWidth="120" strokeColor="#EE4743" type="circle" classPrefix="progress"></v-progress>
                <v-progress :percentage="10" :circleWidth="120"  type="circle" classPrefix="progress" :showText="false"></v-progress>
            </div>
             <h4>数据逻辑</h4>
            <div class="demo-block">
                <button @click="increase">    
                    +
                </button>
                <button @click="decline">    
                    -
                </button>
                <v-progress :percentage="50" :step="50" strokeColor="#3385ff"  ref="child1"></v-progress>
                <v-progress :percentage="50" :step="50" strokeColor="#3385ff" type="circle" ref="child2"></v-progress>

            </div>
        </div>
    </div>
</template>

<script>
    import VProgress from '@/components/common/progress/progress'
    export default {
        components: {
            VProgress
        },
        data() {
            return {
            }
        },
        methods: {
         increase(){
              this.$refs.child1.handleIncrease();
              this.$refs.child2.handleIncrease();
         },
         decline(){
              this.$refs.child1.handleDecline();
              this.$refs.child2.handleDecline();
         }
        }
    }
</script>

<style lang="scss" scoped>
.progress{
    display: inline-block;
        margin: 0 10px;
}
</style>
