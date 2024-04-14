<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules2"
      label-width="80px"
      size="small"
    >
      <el-form-item label="公司" prop="company">
        <el-input v-model="formData.company" />
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

const rules2 = ref({
  company: [{ required: true, message: '请输入公司', trigger: 'blur' }],
});

const valid = async () => {
  let result = false;
  await ruleFormRef.value.validate((valid) => {
    result = valid;
  });

  return result;
};

watch(
  () => props.data,
  (val) => {
    formData.value = cloneDeep(val);
  }
);
defineExpose({
  valid,
  formData,
});
</script>

<style lang="scss" scoped></style>
