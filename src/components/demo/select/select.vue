<template>
    <div class="section">
        <div class="main">
            <p class="section-label">Select</p>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-select :selectValues="cityList" :v-model="selectValueModel" placeholder="请选择"  @change="onSelectChange($event,'selectValue')"></v-select>
            </div>
            <h4>禁用状态</h4>
            <div class="demo-block">
                <v-select :selectValues="cityList" placeholder="选择一下" disabled size="small"></v-select>
            </div>
            <h4>可清除已选中的值</h4>
            <div class="demo-block">
                <v-select :selectValues="cityList" :v-model="selectValueModel"  placeholder="请选择" clearable @change="onSelectChange($event,'selectValue')"></v-select>
            </div>
            <h4>自定义宽度</h4>
            <div class="demo-block">
                <v-select placeholder="选择一下" notFoundText='无匹配选项' size="large" :style="{width:'100px'}"></v-select>
            </div>
        </div>
    </div>
</template>

<script>
    import VSelect from "../../common/select"
    export default {
        components: {
            VSelect
        },
        data() {
            return {
                selectValueModel: "",
                cityList: [{
                        value: "beijing",
                        label: "北京市"
                    },
                    {
                        value: "shanghai",
                        label: "上海市"
                    },
                    {
                        value: "shenzhen",
                        label: "深圳市"
                    },
                    {
                        value: "hangzhou",
                        label: "杭州市"
                    },
                    {
                        value: "nanjing",
                        label: "南京市"
                    },
                    {
                        value: "beijing",
                        label: "临汾市"
                    },
                    {
                        value: "beijing",
                        label: "郑州市"
                    },
                    {
                        value: "chongqing",
                        label: "重庆市"
                    }
                ]
            }
        },
        methods: {
            onSelectChange(v, type) {
                console.log(v, type);
                this[type] = v;
            },
        }
    
    }
</script>


