
<template>
    <div style="display: inline-block;">
        <div ref="trigger">
            <slot></slot>
        </div>
        <div class="v-tooltip" ref="popover" :class="classes" :x-placement="placement" :aria-hidden="!show">
            <div class="tooltip-inner">
                <span class="tooltip-arrow"></span>
                <slot name="content" v-html="content">{{content}}</slot>
            </div>
        </div>
    </div>
</template>

<script>
    import EventListener from './EventListener'
    export default {
        name: 'VTooltip',
        props: {
            trigger: {
                type: String,
                default: 'click'
            },
            effect: {
                type: String,
                default: 'dark'
            },
            content: {
                type: String
            },
            placement: {
                type: String,
                default: 'top'
            }
        },
        data() {
            return {
                position: {
                    top: 0,
                    left: 0
                },
                show: true
            }
        },
        beforeCreate(){
            this.poperVM= new Vue({
                data:{
                    node:''
                },
                render(h){
                    return this.node;
                }
            }).$mount();
        },
        render:function(h){
            this.poperVM.node=(
                <div>哈哈哈哈啊哈哈</div>
            )
        },
        watch: {
            show: function(val) {
                if (val) {
                    const popover = this.$refs.popover;
                    const triger = this.$refs.trigger.children[0];
                    switch (this.placement) {
                        case 'top':
                            this.position.left = triger.offsetLeft + triger.offsetWidth / 2 - popover.offsetWidth / 2;
                            this.position.top = triger.offsetTop - popover.offsetHeight;
                            break;
                        case 'bottom':
                            this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
                            this.position.top = triger.offsetTop + triger.offsetHeight;
                            break;
                        case 'left':
                            this.position.left = triger.offsetLeft - popover.offsetWidth;
                            this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
                            console.log(popover.offsetWidth)
    
                            break;
                        case 'right':
                            this.position.left = triger.offsetLeft + triger.offsetWidth;
                            this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
                            break;
                        default:
                            console.log('Wrong placement prop');
                    }
                    popover.style.top = this.position.top + 'px';
                    popover.style.left = this.position.left + 'px';
                }
            },
    
        },
        computed: {
            classes: function() {
                return [{
                    [`is-${this.effect}`]: this.effect
                }]
            }
        },
        methods: {
            toggle() {
                this.show = !this.show
            }
        },
        created() {
            this.show = !this.show
        },
        mounted() {
            console.log(this.$slots.content)
    
            if (!this.$refs.popover) {
                return console.error("could't find popovero")
            }
            const triger = this.$refs.trigger.children[0];
            if (this.trigger === 'hover') {
                this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', () => {
                    this.show = true
                })
                this._mouseleaveEvent = EventListener.listen(triger, 'mouseleave', () => {
                    this.show = false
                })
            } else if (this.trigger === 'focus') {
                this._focusEvent = EventListener.listen(triger, 'foucs', () => {
                    this.show = true
                })
                thsi._blurEvent = EventListener.listen(triger, 'blur', () => {
                    this.show = false
                })
            } else {
                this._clickEvent = EventListener.listen(triger, 'click', () => {
                    alert(1)
                    this.toggle()
                })
    
            }
    
        },
        beforeDestroy() {
            if (this._blurEvent) {
                this._focusEvent.remove();
                this._blurEvent.remove()
            }
            if (this._mouseenterEvent) {
                this._mouseenterEvent.remove()
                this._mouseleaveEvent.remove()
            }
            if (this._clickEvent) this._clickEvent.remove()
    
        }
    }
</script>

<style lang="scss">
    @import './tooltip';
</style>

