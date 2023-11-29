<template>
  <m-form
    label-width="100px"
    :options="options"
    @on-preview="handlePreview"
    @on-remove="handleRemove"
    @on-success="handleSuccess"
    @on-error="handleError"
    @on-progress="handleProgress"
    @on-change="handleChange"
    @on-exceed="handleExceed"
    @before-upload="beforeUpload"
    @before-remove="beforeRemove"
  >
    <template #uploadArea>
      <el-button size="small" type="primary">Click to upload</el-button>
    </template>
    <template #uploadTip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
    <template #action="scope">
      <el-button type="primary" @click="onSubmitForm(scope)">提交</el-button>
      <el-button @click="resetForm(scope)">重置</el-button>
    </template>
  </m-form>
</template>

<script lang="ts" setup>
import {
  FormInstance,
  UploadFile,
  UploadFiles,
  UploadProgressEvent,
  UploadRawFile,
  UploadUserFile,
} from 'element-plus';
import { FormOptions } from '../../components/form/src/types/types';
interface Scope {
  form: FormInstance;
  model: any;
}
interface CommonFile {
  uploadFile: UploadFile;
  uploadFiles: UploadFiles;
}
interface SuccessFile extends CommonFile {
  response: any;
}

interface ErrorFile extends CommonFile {
  error: Error;
}

interface ProgressFile extends CommonFile {
  evt: UploadProgressEvent;
}

interface ExceedFile {
  files: File[];
  uploadFiles: UploadUserFile[];
}

const options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    attrs: {
      clearable: true,
    },
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6个字符之间',
        trigger: 'blur',
      },
    ],
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    attrs: {
      showPassword: true,
      clearable: true,
    },
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
      },
      {
        min: 6,
        max: 15,
        message: '用户名在6-15个字符之间',
        trigger: 'blur',
      },
    ],
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%',
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'blur',
      },
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1',
      },
      {
        type: 'option',
        label: '主管',
        value: '2',
      },
      {
        type: 'option',
        label: '组长',
        value: '3',
      },
    ],
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'blur',
      },
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '5',
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '6',
      },
    ],
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'blur',
      },
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: '1',
      },
      {
        type: 'radio',
        label: '女',
        value: '2',
      },
      {
        type: 'radio',
        label: '未知',
        value: '3',
      },
    ],
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    rules: [
      {
        required: true,
        message: '上传不能为空',
        trigger: 'blur',
      },
    ],
    uploadAttrs: {
      action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
    },
  },
];

// 点击文件列表中已上传的文件时的钩子
const handlePreview = (uploadFile: UploadFile) => {
  console.log(uploadFile);
};
// 文件列表移除文件时的钩子
const handleRemove = (val: CommonFile) => {
  console.log(val.uploadFile);
};
// 文件上传成功的钩子
const handleSuccess = (val: SuccessFile) => {
  console.log(val.uploadFile);
};
// 文件上传失败的钩子
const handleError = (val: ErrorFile) => {
  console.log(val.error);
};
// 文件上传时的钩子
const handleProgress = (val: ProgressFile) => {
  console.log(val.evt);
};
// 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
const handleChange = (val: CommonFile) => {
  console.log(val.uploadFile);
};
// 当超出限制时，执行的钩子函数
const handleExceed = (val: ExceedFile) => {
  console.log(val.files);
};
// 上传文件之前的钩子，参数为上传的文件
const beforeUpload = (rawFile: UploadRawFile) => {
  console.log(rawFile);
};
// 删除文件之前的钩子，参数为上传的文件和文件列表
const beforeRemove = (val: CommonFile) => {
  console.log(val.uploadFile);
};

const onSubmitForm = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model);
    } else {
      console.log('失败');
    }
  });
};
const resetForm = (scope: Scope) => {
  scope.form.resetFields();
};
</script>

<style lang="scss" scoped></style>
