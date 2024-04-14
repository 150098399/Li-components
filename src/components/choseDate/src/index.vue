<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="startDisabledDate"
      />
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabledDate="endDisabledDate"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const emits = defineEmits(['startChange', 'endChange']);

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

// 结束日期禁用状态
const endDateDisabled = ref<boolean>(true);

// 是否禁用今天之前的日期
const startDisabledDate = (time: Date) => {
  if (props.disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24;
  }
};

const endDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24;
  }
};

watch(
  () => startDate.value,
  (val) => {
    if (!val) {
      endDateDisabled.value = true;
    } else {
      emits('startChange', val);
      endDateDisabled.value = false;
    }
    endDate.value = null;
  }
);

watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits('endChange', {
        startDate: startDate.value,
        endDate: val,
      });
    }
  }
);
</script>

<style lang="scss" scoped></style>
