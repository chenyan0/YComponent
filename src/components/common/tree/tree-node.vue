<template>
    <div class="v-tree-node">
        <div :class="nodeClasses" @dblclick="changeType" @click="toggle">
            <span class="v-tree-expand-icon">
                <font-awesome-icon :icon="['fas', open ? 'caret-down' : 'caret-right']" class="icon-arrow" v-if="!showIcon && isFolder" />
                <font-awesome-icon :icon="['fas', opened ? 'folder-open' : 'folder']" class="icon-folder" v-if="showIcon && isFolder" />
            </span>
            <input type="checkbox" v-if="showCheckbox" :value="model.id" v-model="model.checked" @click="handleCheck($event,model)" />
            <span>{{ model.label }}</span>
        </div>
        <transition-group tag="div" class="v-tree-node__children" v-if="isFolder" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
            <v-tree-node  v-show="open" v-for="child in model.children" :key="child.label" :model="child" :showIcon="showIcon" :showCheckbox="showCheckbox">
            </v-tree-node>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "v-tree-node",
        props: {
            model: {
                default () {
                    return {};
                }
            },
            props: {},
            showIcon: {
                type: Boolean,
                default: false
            },
            showCheckbox: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                open: false,
            };
        },
        computed: {
            isFolder: function() {
                return this.model.children && this.model.children.length;
            },
            opened: function() {
                return this.open && this.isFolder && this.showIcon;
            },
            nodeClasses: function() {
                return [
                    'tree-node', {
                        // ["tree-leaf"]: !this.isFolder,
                        ["tree-show-icon"]: this.showIcon,
                        ["tree-expend"]: this.open
                    }
                ];
            }
        },
        methods: {
            beforeEnter: function(el) {
                if (!el.dataset) el.dataset = {};
                el.style.height = 0;
            },
            enter: function(el) {
                 el.offsetWidth
                el.dataset.oldOverflow = el.style.overflow
                // if (el.scrollHeight !== 0) {
                    el.style.height = el.scrollHeight + 'px'
                // } else {
                    // el.style.height = '';
                // }  
                //判断el.scrollHeight和offsetWidth  才能有过渡动画
                el.style.overflow = 'hidden'
            },
            afterEnter: function(el) {
                el.style.height = '';
                el.style.overflow = el.dataset.oldOverflow;
            },
            beforeLeave(el) {
                if (!el.dataset) el.dataset = {};
                el.dataset.oldOverflow = el.style.overflow;
                el.style.height = el.scrollHeight + 'px';
                el.style.overflow = 'hidden';
    
            },
            leave(el) {
                 el.offsetWidth  //重绘DOM
                // if (el.scrollHeight !== 0) {
                    el.style.height = 0;
                // }
            },
            afterLeave(el) {
                el.style.height = '';
                el.style.overflow = el.dataset.oldOverflow;
            },
            toggle: function() {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType: function() {
                if (!this.isFolder) {
                    this.$set(this.model, "children", []);
                }
            },
            handleCheck: function($event, el) {
                if (el.children) {
                    el.children.map(element => {
                        // element.checked=$event.target.checked
                        // return { ...element }
                        this.$set(element, 'checked', $event.target.checked)
                        this.handleCheck($event, element)
                        this.toggle()
                    });
                }
            },
        },
    
    
    };
</script>

<style lang="scss" scoped>
    .v-tree-node{
        cursor: pointer;
        font-size: 14px;
        list-style: none;
        line-height: 26px;
        color: #444444;  
        transition: height .3s ease;

       .tree-show-icon:before {
                display: none;
        }
       .v-tree-node__children{
            padding-left: 1em;
        }
        .v-tree-expand-icon {
            width: 10px;
            height: 10px;
            display: inline-block;
        }
        .tree-node {
            padding-left: 10px;
            &:hover {
                background: #f5f7fa;
            }
        }
        .icon-folder {
            font-size: 12px;
            vertical-align: middle;
        }
        .icon-arrow {
            font-size: 16px
        }
    }
</style>
