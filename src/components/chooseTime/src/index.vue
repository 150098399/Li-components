<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        class="mr-4"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const startTime = ref<string>('');
const endTime = ref<string>('');
const endTimeDisabled = ref<boolean>(true);

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: '请选择开始时间',
  },
  // 开始时间的默认选择
  startTimeStart: {
    type: String,
    default: '08:00',
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: '00:30',
  },
  // 开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: '24:00',
  },

  endPlaceholder: {
    type: String,
    default: '请选择结束时间',
  },
  // 结束时间的默认选择
  endTimeStart: {
    type: String,
    default: '08:00',
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: '00:30',
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: '24:00',
  },
});

const emits = defineEmits(['startChange', 'endChange']);

watch(
  () => startTime.value,
  (val) => {
    if (val === '') {
      endTime.value = '';
      endTimeDisabled.value = true;
    } else {
      endTimeDisabled.value = false;
      emits('startChange', val);
    }
  }
);

watch(
  () => endTime.value,
  (val) => {
    if (val) {
      emits('endChange', {
        startTime: startTime.value,
        endTime: val,
      });
    }
  }
);
</script>

<style lang="scss" scoped></style>
