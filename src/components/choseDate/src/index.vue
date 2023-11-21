<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
      />
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: '请选择开始日期',
  },
  endPlaceholder: {
    type: String,
    default: '请选择结束日期',
  },
  // 是否禁用今天之前的日期
  disableToday: {
    type: Boolean,
    default: true,
  },
});

const startDate = ref<Date | null>(null);
const endDate = ref<Date | null>(null);
const endDateDisabled = ref<boolean>(true);

// 禁用开始日期的函数
const startDisabledDate = (time: Date) => {
  if (props.disableToday) {
    return time.getTime();
  }
};
</script>

<style lang="scss" scoped></style>
