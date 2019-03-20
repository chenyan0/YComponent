<template>
  <div class="section">
    <div class="main">
      <h2 class="section-label">Tree 树形控件</h2>
      <h4>基础用法</h4>
      <div class="demo-block">
        <v-tree class="item" :model="tree"  style="width:200px;display:inline-block"></v-tree>
  
      </div>
      <h4>自定义图标</h4>
      <div class="demo-block">
        <v-tree class="item" :model="tree" showIcon style="width:200px;display:inline-block"></v-tree>
  
      </div>
      <h4>可选择</h4>
      <div class="demo-block">
        <v-tree class="item" :model="tree" show-checkbox style="width:200px;display:inline-block;    vertical-align: top;"></v-tree>
  
      </div>
  
    </div>
  </div>
</template>

<script>
  import VTree from "../../common/tree";
  
  export default {
    components: {
      VTree
  
    },
    data() {
      return {
        "tree": {
          "grade": 0,
          "name": "总公司部门",
          "children": [{
              "grade": 11,
              "parent": 0,
              "name": "财务部",
              "children": [{
                  "grade": 2111,
                  "parent": 211,
                  "name": "北京sss",
                  "children": [{
                    "grade": 21111,
                    "parent": 2111,
                    "name": "张三丰"
                  }]
                },
                {
                  "grade": 2112,
                  "parent": 211,
                  "name": "上海",
                  "children": [{
                    "grade": 21121,
                    "parent": 2112,
                    "name": "林夕"
                  }]
                }
              ]
            },
            {
              "grade": 12,
              "parent": 0,
              "name": "技术部",
              "children": [{
                  "grade": 221,
                  "parent": 12,
                  "name": "甄宓"
                },
                {
                  "grade": 222,
                  "parent": 12,
                  "name": "吴鑫"
                },
                {
                  "grade": 223,
                  "parent": 12,
                  "name": "琳琳"
                }
              ]
            },
            {
              "grade": 13,
              "parent": 0,
              "name": "人事部",
              "children": [{
                "grade": 231,
                "parent": 13,
                "name": "宁馨"
              }]
            }
          ]
        },
      }
    },
    created() {
      this.$axios.get("http://localhost:8000/api/getTree").then(res => {
        this.tree = res.data.data;
      });
    },
  }
</script>

<style lang="scss" scoped>
  
</style>

