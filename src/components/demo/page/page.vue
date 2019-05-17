<template>
       <div class="section">
        <div class="main">
          <p class="section-label">Page Group</p>
          <h4>基础用法</h4>
          <div class="demo-block">
          <v-page :total="82" :pageSizes="5" :pageIndex="curPage" :pagerCount="7" @on-change="onPageChange" />
          </div>
          <div class="demo-block">
          <v-page :total="10" :pageSizes="5" :pageIndex="curPage" :pagerCount="10" @on-change="onPageChange" />
          </div>
        </div>
      </div>
</template>
<script>
  import VPage from "../../common/pages";

export default {
    components:{
        VPage
    },
    data(){
        return{
        curPage: 2,

        }
    },
    methods:{
         onPageChange(v) {
        this.curPage = v;
      },
    }
}
</script>
