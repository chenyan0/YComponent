<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Dialog 对话框</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-button type="primary" size="small" @click="isVisible1=true">显示对话框</v-button>
                <v-dialog :visible.sync="isVisible1" title="对话框标题" size="small" center @open="openHandle" :closeOnClickModal=false>
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                </v-dialog>
            </div>
            <h4>不带标题栏</h4>
    
            <div class="demo-block">
                <v-button type="primary" size="small" @click="isVisible2=true">不带标题栏</v-button>
                <v-dialog :visible.sync="isVisible2" size="small" center @open="openHandle" :closeOnClickModal=false>
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                </v-dialog>
            </div>
            <h4>国际化</h4>
    
            <div class="demo-block">
                <v-button type="primary" size="small" @click="isVisible3=true">国际化</v-button>
    
                <v-dialog :visible.sync="isVisible3" title="Modal Title" ok-text="OK" cancel-text="Cancel" size="tiny" center @on-ok="ok()" @on-cancel="cancel()">
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                </v-dialog>
            </div>
            <h4>自定义页头和页脚</h4>
            <div class="demo-block">
                <v-button type="primary" size="small" @click="isVisible4=true">自定义页头和页脚</v-button>
                <v-dialog :visible.sync="isVisible4" size="small" center @open="openHandle">
                    <p slot="header" style="color:#f60;text-align:center">
                        <font-awesome-icon :icon="['fas','exclamation-circle' ]" />
                        <span>删除确认</span>
                    </p>
                    <div style="text-align:center">
                        <p>此任务删除后，下游 10 个任务将无法执行。</p>
                        <p>是否继续删除？</p>
                    </div>
                    <div slot="footer">
                        <v-button type="danger" size="large">删除</v-button>
                    </div>
                </v-dialog>
            </div>
    
    
    
    
        </div>
    </div>
</template>

<script>
    import VDialog from "../../common/dialog"
    import VButton from "../../common/button"
    export default {
        components: {
            VDialog,
            VButton
        },
        data() {
            return {
                isVisible1: false,
                isVisible2: false,
                isVisible3: false,
                isVisible4: false,
            }
        },
        methods: {
            ok() {
                this.$vmessage.info("点击了确定");
            },
            cancel() {
                this.$vmessage.info("点击了取消");
            },
            openHandle() {}
        }
    }
</script>
