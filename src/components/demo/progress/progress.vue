
<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Progress</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-progress :percentage="50"></v-progress>
                <v-progress :percentage="100" strokeColor="#3385ff"></v-progress>
                <v-progress :percentage="70" :showVal="false"></v-progress>
            </div>
            <h4>circle</h4>
            <div class="demo-block">
                <v-progress :percentage="50" type="circle"></v-progress>
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
                progress: 2,
                progress2: 2
            }
        },
        methods: {
         
        }
    }
</script>

