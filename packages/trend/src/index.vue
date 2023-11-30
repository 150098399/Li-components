<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        v-if="type === 'up'"
        :style="{ color: !reverseColor ? upIconColor : downIconColor }"
      ></component>
      <component
        :is="`el-icon-${toLine(downIcon)}`"
        v-else
        :style="{ color: !reverseColor ? downIconColor : upIconColor }"
      ></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, computed } from "vue";
import { toLine } from "../../utils";

const props = defineProps({
  // 上升(up)/下降(down)
  type: {
    type: String,
    default: "up",
  },

  // 文字
  text: {
    type: String,
    default: "趋势",
  },

  // 上升图标
  upIcon: {
    type: String,
    default: "ArrowUp",
  },

  // 下降图标
  downIcon: {
    type: String,
    default: "ArrowDown",
  },

  // 上升趋势的图标颜色
  upIconColor: {
    type: String,
    default: "#f5222d",
  },

  // 下降趋势的图标颜色
  downIconColor: {
    type: String,
    default: "#52c41a",
  },

  // 上升趋势的文字颜色
  upTextColor: {
    type: String,
    default: "rgb(0,0,0)",
  },

  // 下降趋势的文字颜色
  downTextColor: {
    type: String,
    default: "rgb(0,0,0)",
  },

  // 颜色反转(只在默认颜色生效)
  reverseColor: {
    type: Boolean,
    default: false,
  },
});

// 获取插槽内容
const slots = useSlots();

// 文字颜色
const textColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor;
});
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
