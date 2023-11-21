<template>
  <div class="notificaton-popover">
    <el-popover placement="bottom" :width="300" trigger="click">
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge
          :value="value"
          :max="max"
          :is-dot="isDot"
          style="cursor: pointer"
        >
          <component :is="`el-icon-${toLine(icon)}`"></component>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { toLine } from '../../../utils';

const props = defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: 'Bell',
  },

  // 通知的数量
  value: {
    type: [String, Number],
    default: '',
  },

  // 通知最大值
  max: {
    type: Number,
    default: 99,
  },

  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
