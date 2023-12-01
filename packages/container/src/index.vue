<template>
  <el-container>
    <!-- Aside -->
    <el-aside width="auto">
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <!-- Header -->
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <!-- Main -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavHeader from './navHeader/index.vue';
import NavSide from './navSide/index.vue';

let isCollapse = ref(false);
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
