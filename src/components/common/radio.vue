<template>
    <label class="v-radio " :class="{'is-checked':state,'is-disabled':disabled}">
            <div class="v-radio-input ">
                <span class="v-radio-inner"></span>
                <input type="radio"  :id="id"
                class="v-radio-original"
                        :value="value"
                        :class="className"
                        :required="required"
                        :disabled="disabled"
                        @change="onChange"
                        :checked="state" >
            </div>
            <label for=""><slot></slot></label>
    </label>
</template>

<script>
    export default {
        model: {
            prop: 'modelValue', //指定从父组件传递过来的 props 名称是什么   值为已被选中的value
            event: 'input' //指定$emit提交的事件名是什么？
        },
        props: {
            id: {
                type: String,
                default: function() {
                    return 'radio-id-' + this._uid;
                },
            },
            value: {
                default: '',
            },
            modelValue: {
                default: undefined,
            },
            className: {
                type: String,
                default: null,
            },
            checked: {
                type: Boolean,
                default: false,
            },
            required: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            model: {}
        },
        computed: {
            state() {
                if (this.modelValue === undefined) {
                    return this.checked;
                }
                return this.modelValue === this.value;
            }
        },
        methods: {
            onChange() {
                this.toggle();
            },
            toggle() {
                this.$emit('input', this.state ? '' : this.value);
            }
        },
        mounted() {
            if (this.checked && !this.state) {
                this.toggle();
            }
        },
    
    }
</script>

<style lang="scss" scoped>
    $class:'v-radio';
    @mixin colors($text:inherit, $background:inherit, $border:inherit) {
        color: $text;
        background-color: $background;
        border-color: $border;
    }
    
    .#{$class} {
        color: #606266;
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        outline: none;
        font-size: 14px;
        margin-right: 30px;
        &-input {
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
            .#{$class}-inner {
                border-width: 1px ;
                border-style: solid;
                border-radius: 100%;
                width: 14px;
                height: 14px;
                position: relative;
                cursor: pointer;
                display: inline-block;
                box-sizing: border-box;
                @include colors($background:#fff,$border:#dcdfe6);
                &:after {
                    width: 4px;
                    height: 4px;
                    border-radius: 100%;
                    background-color: #fff;
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    transition: transform .15s ease-in;
                }
            }
        }
        &-original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    
    .is-checked {
        @extend .#{$class};
        .#{$class}-inner {
            @include colors($background: #409eff, $border:#409eff);
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
        label {
            @include colors($text: #409eff);
        }
    }
    
    .is-disabled {
        @extend .#{$class};
        .#{$class}-inner {
            @include colors($border: #e4e7ed);
            cursor: not-allowed;
            &:after {
                cursor: not-allowed;
            }
        }
        label {
            @include colors($text: #c0c4cc);
            cursor: not-allowed;
        }
    }
    
    .is-disabled.is-checked {
        .#{$class}-inner {
            &:after {
                @include colors($background: #c0c4cc);
            }
        }
    }
</style>


