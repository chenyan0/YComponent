<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Switch 开关</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-switch v-model="value" size="small" id="pickUp" name="pickUp" @change="onFormChange($event,'switchValue')" />
            </div>
            <h4>禁用状态</h4>
            <div class="demo-block">
                <v-switch v-model="value2" size="small" id="pickUp" disabled name="pickUp" @change="onFormChange($event,'switchValue')" />
                <v-switch v-model="value" size="small" id="pickUp" disabled name="pickUp" @change="onFormChange($event,'switchValue')" />
            </div>
            <h4>文字描述</h4>
            <div class="demo-block">
                <v-switch v-model="value" size="small" id="pickUp"  name="pickUp" @change="onFormChange($event,'switchValue')" >按年付费</v-switch>
            </div>
        </div>
    </div>
</template>

<script>
    import VSwitch from "../../common/switch/switch";
    
    export default {
        components: {
            VSwitch
        },
        data() {
            return {
                value: true,
                value2:false
            }
        },
        methods: {
            onFormChange(v) {
                this.value = v;
            },
        }
    
    }
</script>

<style lang="scss" scoped>
    
</style>

