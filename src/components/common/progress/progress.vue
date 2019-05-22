<template>
    <div class="v-progress" :class="classPrefix">
        <div  class="v-progress-bar" v-if="type=='line'" :class="classes">
            <div class="v-progress-outer" :style="outerStyle" ref="outer">
                <div class="v-progress-inner" :style="innerStyle">
    
                </div>
            </div>
            <span class="v-progress-text" v-if="showText" :style="textStyle">
                                            <template v-if="!status">{{percent}}%
</template>

<template v-else>
    <font-awesome-icon :icon="['fas', 'check']" />
</template>
            </span>
        </div>
        <div class="v-progress-circle" v-else :class="classes" :style="{'width':circleWidth+'px','height':circleWidth+'px'}">
            <svg id="circleProgress" ref="circleProgress" xmlns="http://www.w3.org/2000/svg">
                <circle  :cx="circleWidth/2" :cy="circleWidth/2" :r="(circleWidth-strokeWidth)/2" stroke="#e5e5ea" :stroke-width="strokeWidth" stroke-dashoffset='0'></circle>
                <circle  class="v-progress-circle-stroke" ref="circle" :cx="circleWidth/2" :cy="circleWidth/2" :r="(circleWidth-strokeWidth)/2" :stroke="circleStrokeColor" :stroke-width="strokeWidth" :stroke-dashoffset='(circleWidth-strokeWidth) * 3.14 * (100 - percent) / 100' :stroke-dasharray="(circleWidth-strokeWidth)*3.14" stroke-linecap="round"></circle>
            </svg>
            <span class="v-progress-circle-info" v-if="showText"  :style="textStyle">
<template v-if="!status">
    {{percent}}%
</template>

<template v-else>
    <font-awesome-icon :icon="['fas', 'check']" />
</template>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                percent: this.percentage,
            }
        },
        props: {
            classPrefix: {
                type: String,
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
                default: '#ffc104'
            },
            width: {
                type: Number,
                default: 200
            },
            circleWidth: {
                type: Number,
                default: 90
            },
            strokeWidth: {
                type: Number,
                default: 10
            },
        },
         
        computed: {
            classes(){
                const prefix = this.type=='circle' ? 'v-progress-circle' : 'v-progress-bar'
                return [
                {
                    [`${prefix}-success`]:this.status == 'success'
                }]
            },
            status() {
                return this.percent === 100 ? 'success' : null
            },
            textStyle() {
                return {
                    color: this.status == 'success' ? '#52c41a' : '#575757'
                }
            },
            circleStrokeColor() {
                return this.percent === 100 ? '#52c41a' : this.strokeColor
    
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
            transition: width .3s ease;
        }
        &-text {
            font-size: 16px;
                padding-left: 10px;
            vertical-align: middle;
            width: 50px;
        }
        &-circle {
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
        &-circle-stroke {
            transition: stroke-dashoffset .3s ease, stroke-dasharray .2s ease-in-out, stroke .3s;
        }
        #circleProgress {
            width: 100%;
            height: 100%;
            fill: none;
            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            transform: rotate(-90deg);
        }
    }
</style>
