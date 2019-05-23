<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Radio 单选框</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-radio name="sex" :value="1" @input="onInput" v-model="radio">北京</v-radio>
                <v-radio name="sex" :value="2" @input="onInput" v-model="radio">上海</v-radio>
            </div>
            <h4>禁用状态</h4>
            <div class="demo-block">
                <v-radio  :value="1"  v-model="radio2" disabled>北京</v-radio>
                <v-radio  :value="2"  v-model="radio2" disabled>上海</v-radio>
            </div>
        </div>
    </div>
</template>

<script>
    import VRadio from '@/components/common/radio'
    export default {
        components: {
            VRadio
        },
        data() {
            return {
                radio: 2,
                radio2: 2
            }
        },
        methods: {
            onInput() {
                console.log(this.radio)
            }
        }
    }
</script>

