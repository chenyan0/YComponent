<template>
    <div class="v-rate">
        <span class="v-rate-item" v-for="(item,key) in max" :key="key" :style="{cursor: disabled ? 'auto' : 'pointer'}" @mouseenter="handleEnter(item,$event)" @mouseleave="handleLeave(item,$event)" @click="selectItem(item)"><i :style="getIconStyle(item)"><font-awesome-icon :icon="[getIcon(item), 'star']" /></i> </span>
        <span v-if="showText" class="v-rate-text">{{text}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hover: false,
                currentValue: this.value,
            }
        },
        props: {
            value: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 5
            },
            disabled: {
                type: Boolean,
                default: false
            },
            texts: {
                type: Array,
                default () {
                    return ['极差', '失望', '一般', '满意', '惊喜'];
                }
            },
            showText: {
                type: Boolean,
                default: false
            },
            voidColor: {
                type: String,
                default: '#d4d4d4'
            },
            activeColor: {
                type: String,
                default: '#ffe504'
            }
        },
        computed: {
            text() {

                if (this.showText) {
                    return this.texts[this.currentValue - 1]
                }
            }
        },
        methods: {
            getIconStyle(item) {
                return {
                    color: item <= this.currentValue ? this.activeColor : this.voidColor
                }
            },
            getIcon(item) {
                return item <= this.currentValue ? 'fas' : 'far'
            },
            handleEnter(item, $event) {
                if(this.disabled){
                    return;
                }
                this.hover = true;
                this.currentValue = item;
    
            },
            handleLeave(item, $event) {
                 if(this.disabled){
                    return;
                }
                this.hover = false;
                this.currentValue = this.value;
                this.hoverIndex = -1;
            },
            selectItem(item) {
                 if(this.disabled){
                    return;
                }
                this.$emit('input', item);
            }
        },
        created() {
            if (!this.value) {
                this.$emit('input', 0);
            }
        }
    
    }
</script>

<style lang="scss" scoped>
    $class-prefix:'v-rate';
    .#{$class-prefix} {
        &-item {
            padding: 2px;
        }
        &-text {
            font-size: 14px;
            vertical-align: middle;
        }
    }
</style>


