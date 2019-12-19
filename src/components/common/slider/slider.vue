<template>
    <div class="v-slider">
        <div class="v-slider-bar" ref="rule">
                    <div class="v-slider-inner"></div>
                    <v-tooltip class="item" effect="dark" content="0" placement="top" trigger="hover">
                        <div class="v-slider-dot" ref="bar" @mousedown="mouseDown($event)" @mousemove="mouseMove($event)"></div>
                    </v-tooltip>
                </div>
        <v-tooltip class="item" effect="dark" :content="rate" placement="top" trigger="hover" :tipStyle="tipPosition()">
            <input class="v-range"  ref="range" type="range" :disabled="disabled" v-model="rate" :min="min" :max="max" :step="step">
        </v-tooltip>
    </div>
</template>

<script>
    import VTooltip from '../tooltip/tooltip'
    export default {
        components: {
            VTooltip
        },
        model: {
            prop: "value",
            event: "change"
        },
        data() {
            return {
                rate: this.value,
            }
        },
        props: {
            value: {
                type: [Number, String]
            },
            step: {
                type: [Number, String],
                default: 1
            },
            disabled: {
                type: Boolean,
                default: false
            },
            max: Number,
            min: Number,
        },
        watch: {
            // 动态修改
            rate(value) {
                this.$emit("change", Number(value));
                this.progressStyle()
            },
            // 如果不存在初始值的话，以最小值为初始值
            value: {
                handler(value) {
                    this.rate = this.value || this.min;
                },
                immediate: true
            }
        },
        created:function(){
            this.$nextTick(function(){
                this.progressStyle()
            })
        },
        methods: {
           
            mouseDown($event){
                // 开始滑动时滑块的位置
                this.startX = $event.clientX;
            },
            mouseMove($event){
                console.log($event.clientX,this.$refs.rule)
                let slidedis = $event.clientX - this.$refs.rule[0].offsetLeft;
                if(slidedis<0 || slidedis>this.$refs.rule.offsetWidth){
                    return;
                }
                this.$refs.bar.style.left=`${slidedis}px`
            },
            progressStyle() {
                const {
                    rate,
                    max,
                    min
                } = this;
                console.log(`${((rate - min) * 100) / (max - min)}%`)
                this.$refs.range.style.backgroundSize = `${((rate - min) * 100) / (max - min)}% 100%`
            },
            tipPosition() {
                const {
                    rate,
                    max,
                    min
                } = this;
                const xOffset = 9 - 18 * ((rate - min) / (max - min));
                return {
                    left: `${((rate - min) * 100) / (max - min)}%`,
                    // marginLeft: '4px',
                    transform: `translateX(-50%)`
                }
            }
        }
    
    }
</script>

<style lang="scss" scoped>
    $classes:'v-slider';
    .#{$classes} {
        position: relative;
        &-bar {
            width: 200px;
            height: 10px;
            background: rgb(229, 229, 234);
            border-radius: 10px;
            position: relative;
        }
        &-inner {
            width: 100px;
            height: 10px;
            background: rgb(229, 229, 234);
            border-radius: 10px;
        }
        &-dot {
            width: 8px;
            height: 8px;
            border: 2px solid #33c0fa;
            background: #fff;
            position: absolute;
            border-radius: 50%;
            top: -1px;
            left: 0;
            transition: left .3s ease;
            &:hover {
                box-shadow: 0 0 1px 3px rgba(51, 192, 250, 0.25);
                transition: all .3s ease;
                cursor: pointer;
            }
        }
        input.v-range[type=range]::-webkit-slider-thumb {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid #33c0f9;
            background-color: #fff;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.21);
            -webkit-transition: border-color 0.15s, background-color 0.15s;
            transition: border-color 0.15s, background-color 0.15s;
            cursor: pointer;
            background-clip: padding-box;
            box-sizing: border-box;
        }
        input.v-range[type=range]::-webkit-slider-thumb:active {
            box-shadow: 0 0 1px 3px rgba(51, 192, 250, 0.25);
            transition: all .3s ease;
            cursor: pointer;
        }
        input.v-range[type=range] {
            width: 100%;
            height: 8px;
            border-radius: 8px;
            margin: .8em 0;
            padding: 0;
            cursor: pointer;
            border: 0;
            /**background-color: #45bd5c;*/
            background: -webkit-linear-gradient(#33c0f9, #33c0f9) no-repeat #e5e5ea;
            background-size: 0% 100%;
            position: relative;
            outline: 0;
            -webkit-appearance: none !important;
            &:disabled {
                background: -webkit-linear-gradient(#c0c4cb, #c0c4cb) no-repeat #e5e5ea;
                cursor: not-allowed;
                &::-webkit-slider-thumb {
                    border-color: #c0c4cb;
                }
            }
        }
        input.v-range[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none !important;
        }
        /*Virtual Range*/
        .v-range {
            display: inline-block;
            position: relative;
            width: 100%;
            font-size: 1em;
        }
    }
</style>



