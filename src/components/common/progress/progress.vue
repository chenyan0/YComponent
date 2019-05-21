<template>
    <div class="v-progress" :class="classPrefix">
        <div class="v-progress-bar" v-if="type=='line'">
            <div class="v-progress-outer" :style="outerStyle" ref="outer">
                <div class="v-progress-inner" :style="innerStyle">
    
                </div>
            </div>
            <span class="v-progress-text" v-if="showText" :style="textStyle">
                                    <template v-if="!status">{{percent}}%
</template>

<template v-else>
    <font-awesome-icon :icon="['fas', 'check']" class="icon-clear" />
</template>
            </span>
        </div>
        <div class="v-progress-circle" v-else>
            <svg id="circleProgress" ref="circleProgress" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle" ref="circle" cx="50%" cy="50%" r="40%" :stroke="strokeColor" stroke-width="10" stroke-dashoffset='310%' stroke-linecap="round"></circle>
            </svg>
            <svg id="circleProgress2" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle" cx="50%" cy="50%" r="40%" stroke="#e5e5ea" stroke-width="9" stroke-dashoffset='0'></circle>
            </svg>
            <span class="v-progress-circle-info">{{percent}}%</span>
        </div>
<!-- <input id="range" ref="range" type="range" min="0" max="255" step="4" value="360" @input="drawCircle"> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                percent: this.percentage,
                rangeValue: 0,
                rangeText: 0
            }
        },
        props: {
            classPrefix: {
                type: String,
            },
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
            step: {
                type: Number,
                default: 1
            },
            showText: {
                type: Boolean,
                default: true
            },
            strokeColor: {
                type: String,
                default: '#ffd95a'
            }
    
        },
        computed: {
            status() {
                return this.percent === 100 ? 'success' : null
            },
            textStyle() {
                return {
                    color: this.status == 'success' ? '#52c41a' : '#575757'
                }
            },
            innerStyle() {
                const width = this.width;
                const percentage = this.percent;
                return {
                    width: `${width*percentage/100}px`,
                    background: this.percent === 100 ? '#52c41a' : this.strokeColor
                }
            },
            outerStyle() {
                return {
                    width: this.width + 'px',
                }
            },
    
        },
        methods: {
            handleIncrease() {
                if (this.percent < 100) {
                    this.percent = this.percent + this.step
                }
            },
            handleDecline() {
                if (this.percent > 0) {
                    this.percent = this.percent - this.step
                }
            },
            drawCircle() {
                const range = this.$refs.range
                const circle = this.$refs.circle
                const circleProcess = this.$refs.circleProcess
                this.rangeValue = Number(range.value);
                circle.setAttribute("stroke-dashoffset", (360 - this.rangeValue) + "%");
                this.rangeText = Math.ceil(this.rangeValue / 360 * 100)
            }
        },
    
    
    }
</script>

<style lang="scss" scoped>
    $classes:'v-progress';
    .#{$classes} {
        &-bar {
            display: table;
            table-layout: fixed;
        }
        &-outer {
            height: 10px;
            border-radius: 10px;
            display: inline-block;
            background: #e5e5ea;
        }
        &-inner {
            height: 100%;
            border-radius: 10px;
        }
        &-text {
            font-size: 16px;
            margin-left: 10px;
            vertical-align: middle;
        }
        &-circle {
            width: 200px;
            height: 200px;
            position: relative;
        }
        &-circle-info {
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;
            font-size: 16px;
            line-height: 2.25;
            height: 36px;
        }
        #circleProgress {
            position: absolute;
            
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
            stroke-dasharray: 360%;
            stroke-dashoffset: 360%;
            fill: none;
            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            transform: rotate(-90deg);
            z-index: 2;
        }
        #circleProgress2 {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
          stroke-dasharray: 360%;
            stroke-dashoffset: 360%;
            fill: none;
            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            transform: rotate(-90deg);
        }
    }
</style>
