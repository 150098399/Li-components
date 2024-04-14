<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item, i) in data" :key="i">
      <el-menu-item
        v-if="!item[children] || !item[children].length"
        :index="item[index]"
      >
        <component
          v-if="item[icon]"
          :is="`el-icon-${toLine(item[icon])}`"
        ></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu
        v-if="item[children] && item[children].length"
        :index="item[index]"
      >
        <template #title>
          <component
            v-if="item[icon]"
            :is="`el-icon-${toLine(item[icon])}`"
          ></component>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item
          v-for="(item1, index1) in item[children]"
          :key="index1"
          :index="item1[index]"
        >
          <component
            v-if="item1[icon]"
            :is="`el-icon-${toLine(item1[icon])}`"
          ></component>
          <span>{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { toLine } from '../../utils';

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },

  defaultActive: {
    type: String,
    default: '',
  },

  router: {
    type: Boolean,
    default: false,
  },

  // 菜单标题键名
  name: {
    type: String,
    default: 'name',
  },
  // 菜单标识键名
  index: {
    type: String,
    default: 'index',
  },
  // 菜单图标键名
  icon: {
    type: String,
    default: 'icon',
  },
  // 子菜单键名
  children: {
    type: String,
    default: 'children',
  },
});
</script>

<style lang="scss" scoped>
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
