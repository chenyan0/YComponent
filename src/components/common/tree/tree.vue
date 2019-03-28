<template>
<div>
  <v-tree-node v-for="child in model" :key="child.id" :props="props" :model="child" :show-checkbox="showCheckbox" :show-icon="showIcon"></v-tree-node>
</div>
</template>
<script>
import VTreeNode from './tree-node'
export default {
  name: "v-tree",
  components:{
    VTreeNode
  },
  props: {
    model: {
      type: Array,
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showCheckbox:{
       type: Boolean,
      default: false
    },
    props: {
        default() {
          return {
            children: 'children',
            label: 'label',
            disabled: 'disabled'
          };
        }
      },
  },
  data: function() {
    return {
    };
  },
  
};
</script>
