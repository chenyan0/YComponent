<template>
  <div class="wrapper">
    <div class="wrapper-navigate">
      <div class="v-menu">
        <div class="navigate-group">组件</div>
        <div class="v-menu-item-group-title">基础</div>
        <router-link to="/component/button" class="v-menu-item">Button 按钮</router-link>
        <router-link to="/component/tree" class="v-menu-item">Tree 树型控件</router-link>
        <router-link to="/component/card" class="v-menu-item">Card 卡片</router-link>
        <div class="v-menu-item-group-title">操作反馈</div>
        <router-link to="/component/toast" class="v-menu-item">Toast 轻提示</router-link>
        <router-link to="/component/dialog" class="v-menu-item">Dialog 对话窗</router-link>
        <router-link to="/component/message" class="v-menu-item">Message 全局提示</router-link>
        <div class="v-menu-item-group-title">表单</div>
        <router-link to="/component/radio" class="v-menu-item">Radio 单选框</router-link>
        <router-link to="/component/form" class="v-menu-item">Form 表单</router-link>
        <router-link to="/component/select" class="v-menu-item">Select 选择器 </router-link>
        <div class="v-menu-item-group-title">导航</div>
        <router-link to="/component/pages" class="v-menu-item">Page 页码</router-link>
      </div>
    </div>
    <div class="wrapper-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/global.scss';
@import '@/styles/layout.scss';

</style>


