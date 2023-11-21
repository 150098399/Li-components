<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand
        v-if="collapse"
        style="margin-right: 10px"
      ></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean;
}>();
const emits = defineEmits(['update:collapse']);

// 菜单伸缩

const toggle = () => {
  emits('update:collapse', !props.collapse);
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
