<template>
  <div class="section">
    <div class="main">
      <h2 class="section-label">Tree 树形控件</h2>
      <h4>基础用法</h4>
      <div class="demo-block">
        <v-tree class="item" :model="tree"   :props="defaultProps"  ></v-tree>
      </div>
      <h4>自定义图标</h4>
      <div class="demo-block">
        <v-tree class="item" :model="tree" showIcon ></v-tree>
      </div>
      <h4>可选择</h4>
      <div class="demo-block">
        <v-tree class="item" :model="tree" show-checkbox ></v-tree>
      </div>
    </div>
  </div>
</template>

<script>
  import VTree from "../../common/tree/tree";
  
  export default {
    components: {
      VTree
    },
    data() {
      return {
        "tree":[{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
         defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
  
  }
</script>

<style lang="scss" scoped>
  
</style>

