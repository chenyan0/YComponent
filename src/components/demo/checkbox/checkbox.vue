<template>
    
</template>
<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Checkbox 复选框</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
              <v-checkbox-group v-model="checkboxValue" @on-change="onFormChange($event,'checkboxValue')">
                    <v-checkbox v-for="(i,index) in tags" :key="index" :label="i.label" name="checkbox" >{{i.text}}</v-checkbox>
                </v-checkbox-group>
            </div>
            <h4>禁用状态</h4>
            <div class="demo-block">
                 <v-checkbox-group v-model="checkboxValue" @on-change="onFormChange($event,'checkboxValue')">
                    <v-checkbox v-for="(i,index) in tags" :key="index" :label="i.label" name="checkbox" disabled>{{i.text}}</v-checkbox>
                </v-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
    import VCheckboxGroup from '@/components/common/checkbox/checkbox-group'
    import VCheckbox from '@/components/common/checkbox/checkbox'
    export default {
        components: {
            VCheckboxGroup,
            VCheckbox
        },
        data() {
            return {
                  checkboxValue: ["a"],
                 tags: [{
                        label: "a",
                        text: "文件"
                    },
                    {
                        label: "b",
                        text: "食品"
                    },
                    {
                        label: "c",
                        text: "易碎品"
                    }
                ],
            }
        },
        methods: {
            onFormChange(v) {
                this.checkboxValue = v;
                console.log(this.checkboxValue)
            }
        }
    }
</script>
<style lang="scss" scoped>
.v-checkbox{
    margin-right: 30px;
}
</style>


