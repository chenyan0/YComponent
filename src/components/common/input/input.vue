<template>
    <div :class="wrapperClass">
        <template v-if="type!=='textarea'">
                    <input :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" :readonly="readonly" :placeholder="placeholder" :value="value" :disabled="inputDisabled" @focus="handleFocus" @blur="handleBlur"  class="v-input-inner" @change="handleChange($event)">
                    <span class="v-input-suffix" v-if="getSuffixVisible">
                                <span class="v-input__suffix-inner">
                                <font-awesome-icon
                                    :icon="['far', 'times-circle']"
                                    class="icon-clear"
                                    @click="onClear"
                                    v-if="clearable"
                                  />
                                  <font-awesome-icon
                                    :icon="['far', 'eye']"
                                    class="icon-clear"
                                    v-if="showPassword"
                                    @click="handlePasswordVisible"
                                  />
                                    </span>
                    </span>
</template>

        <textarea v-else name="" id="" cols="30" :rows="rows" class="v-textarea-inner" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></textarea>    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                focused: false,
                hovering: false,
                passwordVisible: false
            }
        },
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            readonly: {
                type: Boolean,
                default: false
            },
            inputDisabled: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'text'
            },
            value: {
                type: String,
                default: ''
            },
            showPassword: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            rows: {
                type: String,
                default: '2'
            }
        },
        computed: {
            wrapperClass: function() {
                return [
                    'v-input', {
                        ['is-disabled']: this.inputDisabled,
                        ['is-disabled']: this.inputDisabled
                    }
                ]
            },
            showClear() {
                return this.clearable &&
                    !this.inputDisabled &&
                    (this.focused || this.hovering);
            },
            getSuffixVisible() {
                return this.suffixIcon || this.showClear || this.showPassword
            }
        },
        methods: {
            handleChange($event) {
                this.$emit('change', $event.target.value)
            },
            handleFocus($event) {
                console.log(1)
                this.focused = true;
            },
            handleBlur($event) {
                console.log(2)
                this.focused = false;
            },
            handlePasswordVisible() {
                this.passwordVisible = !this.passwordVisible;
            },
            onClear() {
                this.focused = false;
                this.$emit('change', '');
            }
        }
    }
</script>

<style lang="scss" scoped>
    $class:'v-input';
    .#{$class} {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
        &-inner {
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            width: 100%;
            cursor: pointer;
            &:hover {
                border: 1px solid #c0c4cc;
            }
                        &:focus {
                            outline: none;
                            border-color: #409eff;
                        }
        }
        &.is-disabled {
            &-inner {
                background-color: #f5f7fa;
                border-color: #e4e7ed;
                color: #c0c4cc;
                cursor: not-allowed;
            }
        }
        &-suffix {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            line-height: 40px;
            width: 30px;
            color: #999;
        }
    }
    
    .v-textarea-inner {
        display: block;
        resize: vertical;
        padding: 5px 15px;
        line-height: 1.5;
        box-sizing: border-box;
        width: 100%;
        font-size: inherit;
        color: #606266;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
         &:hover {
                border: 1px solid #c0c4cc;
            }
        &:focus {
            outline: none;
            border-color: #409eff;
        }
    }
</style>

