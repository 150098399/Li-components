<template>
  <el-form
    ref="form"
    v-if="model"
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
        >
        </component>
        <el-upload
          v-if="item.type === 'upload'"
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :on-exceed="onExceed"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
        >
          <slot name="uploadArea"></slot>
          <template #tip>
            <slot name="uploadTip"></slot>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
          ></component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {
  PropType,
  ref,
  onMounted,
  watch,
  shallowRef,
  onBeforeUnmount,
} from 'vue';
import { FormOptions } from './types/types';
import cloneDeep from 'lodash/cloneDeep';
import {
  FormInstance,
  UploadFile,
  UploadFiles,
  UploadProgressEvent,
  UploadRawFile,
  UploadUserFile,
} from 'element-plus';

const props = defineProps({
  // 表单配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  httpRequest: {
    type: Function,
  },
});

const model = ref<any>(null);
const rules = ref<any>(null);

// 初始化表单
const initForm = () => {
  if (props.options && props.options.length) {
    const m: any = {};
    const r: any = {};
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
};

/* start 上传组件事件 */
const uploadEmits = defineEmits([
  'on-preview',
  'on-remove',
  'on-success',
  'on-error',
  'on-progress',
  'on-change',
  'on-exceed',
  'before-upload',
  'before-remove',
]);
const onPreview = (uploadFile: UploadFile) => {
  uploadEmits('on-preview', uploadFile);
};
const onRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  uploadEmits('on-remove', {
    uploadFile,
    uploadFiles,
  });
};
const onSuccess = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  // 给表单上传项赋值
  const uploadItem = props.options.find((item) => item.type === 'upload');
  model.value[uploadItem?.prop!] = { response, uploadFile, uploadFiles };
  uploadEmits('on-success', {
    response,
    uploadFile,
    uploadFiles,
  });
};
const onError = (
  error: Error,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  uploadEmits('on-error', {
    error,
    uploadFile,
    uploadFiles,
  });
};
const onProgress = (
  evt: UploadProgressEvent,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  uploadEmits('on-progress', {
    evt,
    uploadFile,
    uploadFiles,
  });
};
const onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  uploadEmits('on-change', {
    uploadFile,
    uploadFiles,
  });
};
const onExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  uploadEmits('on-exceed', {
    files,
    uploadFiles,
  });
};
const beforeUpload = (rawFile: UploadRawFile) => {
  uploadEmits('before-upload', rawFile);
};
const beforeRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  uploadEmits('before-remove', {
    uploadFile,
    uploadFiles,
  });
};
/* end 上传组件事件 */

const form = ref<FormInstance | null>();

onMounted(() => {
  initForm();
});

watch(
  () => props.options,
  () => {
    initForm();
  },
  { deep: true }
);
</script>

<style lang="scss" scoped></style>
