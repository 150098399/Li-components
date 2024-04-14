<template>
  <div>
    <el-button type="primary" @click="handleSave">保存</el-button>
    <form1 ref="form1" :data="formMap.form1"></form1>
    <form2 ref="form2" :data="formMap.form2"></form2>
  </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import Form1 from './form1.vue';
import Form2 from './form2.vue';

const { proxy } = getCurrentInstance();

// 表单值回显
const formMap = ref({
  form1: {
    name: 'fff',
    age: 12,
  },
  form2: {},
});

const handleSave = async () => {
  const formKeys = Object.keys(formMap.value);
  const res = formKeys.map((key) => {
    const item = proxy.$refs[key].valid();
    return item;
  });
  const resarr = await Promise.all(res);

  if (resarr.every((r) => r)) {
    console.log(22);
    const data = {};
    formKeys.map((key) => {
      const part = proxy.$refs[key].formData;
      Object.assign(data, part);
    });

    console.log(data);
  } else {
    console.log(11);
  }
};
</script>

<style lang="scss" scoped></style>
