<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules1"
      label-width="80px"
      size="small"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="formData.age" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose, defineProps, watch } from 'vue';
import cloneDeep from 'lodash/cloneDeep';
import type { FormInstance, FormRules } from 'element-plus';

const ruleFormRef = ref<FormInstance>();

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const formData = ref({});

const rules1 = ref({
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
});

const valid = async () => {
  let result = false;
  await ruleFormRef.value.validate((val) => {
    result = val;
  });
  return result;
};

watch(
  () => props.data,
  (val) => {
    console.log(val);

    formData.value = cloneDeep(val);
  },
  { deep: true, immediate: true }
);
defineExpose({
  valid,
  formData,
});
</script>

<style lang="scss" scoped></style>
