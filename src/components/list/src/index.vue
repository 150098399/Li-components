<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.title"
      >
        <el-scrollbar max-height="300px">
          <div
            class="container"
            @click="clickItem(op, index1)"
            v-for="(op, index1) in item.content"
            :key="index1"
          >
            <div class="avatar" v-if="op.avatar">
              <el-avatar size="small" :src="op.avatar"></el-avatar>
            </div>
            <div class="content">
              <div v-if="op.title" class="title">
                <div>{{ op.title }}</div>
                <el-tag v-if="op.tag" size="small" :type="op.tagType">{{
                  op.tag
                }}</el-tag>
              </div>
              <div v-if="op.desc">{{ op.desc }}</div>
              <div v-if="op.time" class="time">{{ op.time }}</div>
            </div>
          </div>
          <div class="actions">
            <div
              class="a-item"
              @click="clickAction(action, i)"
              :class="{ border: i !== actions.length }"
              v-for="(action, i) in actions"
              :key="i"
            >
              <div class="a-icon" v-if="action.icon">
                <component :is="`el-icon-${toLine(action.icon)}`"></component>
              </div>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { ListOptions, ActionOptions, ListItem } from './types';
import { toLine } from '../../../utils';

const props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },

  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: [],
  },
});

const emits = defineEmits(['clickItem', 'clickAction']);
const clickItem = (op: ListItem, index: number) => {
  emits('clickItem', { op, index });
};

const clickAction = (action: ActionOptions, index: number) => {
  emits('clickAction', { action, index });
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background-color: #e6f6ff;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.actions {
  display: flex;
  height: 50px;
  border-top: 1px solid #eee;
  cursor: pointer;
  .a-item {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .a-icon {
    margin-right: 4px;
    position: relative;
    top: 2px;
  }
}

.border {
  border-right: 1px solid #eee;
}
</style>
