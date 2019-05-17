<template>
    <div class="v-progress">
        <div class="v-progress-bar" v-if="type=='line'">
            <div class="v-progress-outer" :style="outerStyle" ref="outer">
                <div class="v-progress-inner" :style="innerStyle">
    
                </div>
            </div>
            <span class="v-progress-text" v-if="showVal">{{percentage}}%</span>
        </div>
        <div class="v-progress-circle" v-else>
            d
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            width: {
                type: String,
                default: '200'
            },
            type: {
                type: String,
                default: 'line'
            },
            percentage: {
                type: Number,
                default: '100'
            },
            showVal: {
                type: Boolean,
                default: true
            },
            strokeColor: {
                type: String,
                default: '#ffd95a'
            }
    
        },
        computed: {
            innerStyle: function() {
                return {
                    width: this.width * (this.percentage / 100),
                    background: this.percentage === 100 ? '#52c41a' : this.strokeColor
                }
            },
            outerStyle: function() {
                return {
                    width: this.width + 'px',
    
                }
            }
        }
    
    }
</script>

<style lang="scss" scoped>
    $classes:'v-progress';
    .#{$classes} {
        height: 20px;
        &-bar {
            height: 10px;
        }
        &-outer {
            height: 100%;
            border-radius: 10px;
            display: inline-block;
            background: #e5e5ea;
        }
        &-inner {
            height: 100%;
            border-radius: 10px;
        }
        &-text {
            font-size: 14px;
            margin-left: 10px;
        }
    }
</style>
