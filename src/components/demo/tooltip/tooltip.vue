<template>
    <div class="section">
        <div class="main">
            <h2 class="section-label">Tooltip 文字提示</h2>
            <h4>基础用法</h4>
            <div class="demo-block">
                <v-tooltip class="item" effect="dark" content="top 提示文字" placement="top" trigger="hover">
                    <v-button size="small">上</v-button>
                </v-tooltip>
                 <v-tooltip class="item" effect="dark" content="bottom 提示文字" placement="bottom" trigger="hover">
                    <v-button size="small">下</v-button>
                </v-tooltip>
                 <v-tooltip class="item" effect="dark" content="left 提示文字" placement="left" trigger="hover">
                    <v-button size="small">左</v-button>
                </v-tooltip>
                 <v-tooltip class="item" effect="dark" content="right 提示文字" placement="right" trigger="hover">
                    <v-button size="small">右</v-button>
                </v-tooltip>
            </div>
            <h4>主题</h4>
            <div class="demo-block">
                <v-tooltip  class="item" effect="dark"  content="我是tooltip" placement="top" trigger="hover">
                  <v-button size="small">Dark</v-button>
                </v-tooltip >
              <v-tooltip  class="item" effect="light"  content="我是tooltip"  placement="top" trigger="hover">
                  <v-button size="small">Lignt</v-button>
                </v-tooltip >
            </div>
            <h4>更多content</h4>
            <div class="demo-block">
                <v-tooltip  class="item" effect="dark"  placement="top" trigger="hover">
                  <v-button size="small">Dark</v-button>
                   <p slot="content">多行信息<br/>第二行信息</p>
                </v-tooltip >
            </div>
            <h4>更多content</h4>
            <div class="demo-block">
                <v-tooltip  class="item" effect="dark"  content="0" placement="top" trigger="hover">
                  <v-button size="small">Dark</v-button>
                </v-tooltip >
            </div>
        </div>
    </div>
</template>

<script>
    import VTooltip from "../../common/tooltip/tooltip";
    import VButton from "../../common/button";
    
    export default {
        components: {
            VTooltip,
            VButton
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
    .item{
        display: inline-block;
    }
</style>

