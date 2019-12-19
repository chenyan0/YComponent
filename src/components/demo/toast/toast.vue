
<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Toast 轻提示</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-button type="primary" size="small" @click="showToast">点击弹出Toast</v-button>
            </div>
            <h4>带图标提示</h4>
            <div class="demo-block">
                <v-button type="primary" size="small" @click="showIconToast">点击弹出有Icon的Toast</v-button>
            </div>
            <h4>自定义位置</h4>
            <div class="demo-block">
                <v-button type="primary" size="small" @click="showPosToast">自定义Toast位置</v-button>
            </div>
          
        </div>
    </div>
</template>

<script>
    import VButton from "../../common/button"
    
    export default {
        components: {
            VButton
        },
        methods: {
            showToast() {
                this.$vtoast("我是弹出消息");
            },
            showIconToast() {
                this.$vtoast({
                    text: "我是有图标的",
                    duration: "2000",
                    icon: "user"
                });
            },
            showPosToast() {
                this.$vtoast({
                    text: "我的位置是自定义的",
                    position: "top"
                });
            },
        }
    }
</script>



