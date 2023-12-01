// 表单配置项
import { CSSProperties } from 'vue'
import { RuleItem } from './rules'
export interface FormOptions {
  // 元素类型
  type: 'cascader' | 'autocomplete' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker' |
  'date-picker' | 'input' | 'input-number' | 'radio-group' | 'radio' | 'radio-button' | 'rate' | 'select' |
  'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' | 'transfer' | 'upload' | 'editor',
  // 表单项的值
  value?: any,
  // 表单项label
  label?: string,
  // 表单项的标识
  prop?: string,
  // 表单项的校验规则
  rules?: RuleItem[],
  // 表单项的placeholder
  placeholder?: string,
  // 表单元素特有的属性
  attrs?: {
    // css样式
    style?: CSSProperties,
    clearable?: boolean,
    showPassword?: boolean,
    disabled?: boolean
  },
  // 表单项的子元素
  children?: FormOptions[],
  // 上传组件的属性和方法
  uploadAttrs?: {
    action: string,
    headers?: object,
    methods?: 'post' | 'put' | 'patch',
    multiple?: boolean,
    data?: any,
    name?: string,
    withCredentials?: boolean,
    showFileList?: boolean,
    drag?: boolean,
    accept?: string,
    fileList?: string,
    listType?: 'text' | 'picture' | 'picture-card',
    disabled?: boolean,
    limit?: number
  }
}