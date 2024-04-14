<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import * as ElIcons from '@element-plus/icons-vue';
import { toLine } from '../../utils';
import { useCopy } from '../../hooks/useCopy/index';

const props = defineProps<{
  title: string;
  visible: boolean;
}>();

const emits = defineEmits(['update:visible']);

// 拷贝一份父组件传递过来的visible
const dialogVisible = ref<boolean>(props.visible);
const handleClick = () => {
  emits('update:visible', !props.visible);
};

// 只能监听第一次的变化
watch(
  () => props.visible,
  (val) => {
    // console.log(val);
    dialogVisible.value = val;
  }
);

watch(
  () => dialogVisible.value,
  (val) => {
    emits('update:visible', val);
  }
);

const clickItem = (item: string) => {
  const text = `<el-icon-${toLine(item)} />`;
  useCopy(text);
  dialogVisible.value = false;
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
  }
}

svg {
  width: 2em;
  height: 2em;
}
</style>
