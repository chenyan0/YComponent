<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Input 输入框</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-input v-model="input1" placeholder="请输入内容" @change="onChange"></v-input>
            </div>
            <h4>禁用状态</h4>
            <div class="demo-block">
                <v-input v-model="input2" placeholder="请输入内容" @change="onChange2" disabled></v-input>
            </div>
            <h4>可清空</h4>
            <div class="demo-block">
                <v-input v-model="input3" placeholder="请输入内容" @change="onChange3" clearable></v-input>
            </div>
            <h4>密码框</h4>
            <div class="demo-block">
                <v-input v-model="input4" placeholder="请输入内容" @change="onChange4" show-password></v-input>
            </div>
            <h4>Textarea</h4>
            <div class="demo-block">
                <v-input v-model="input4" placeholder="请输入内容" @change="onChange4" type="textarea" rows="3"></v-input>
            </div>
        </div>
    </div>
</template>

<script>
    import VInput from '@/components/common/input/input'
    export default {
        components: {
            VInput
        },
        data() {
            return {
                input1:'',
                input2:'',
                input3:'',
                input4:'',
            }
        },
        methods: {
            onChange(v) {
                this.input1=v;
            },
            onChange2(v) {
                this.input2=v;
            },
             onChange3(v) {
                this.input3=v;
            },
            onChange4(v) {
                this.input4=v;
            }
        }
    }
</script>

