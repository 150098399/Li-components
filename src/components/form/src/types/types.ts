// 表单配置项
import { RuleItem } from './rules'
export interface FormOptions {
  // 元素类型
  type: 'cascader' | 'autocomplete' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker' |
  'date-picker' | 'input' | 'input-number' | 'radio-group' | 'radio' | 'radio-button' | 'rate' | 'select' |
  'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' | 'transfer' | 'upload',
  // 表单项的值
  value: any,
  // 表单项label
  label?: string,
  // 表单项的标识
  prop?: string,
  // 表单项的校验规则
  rules?: RuleItem,
  // 表单元素特有的属性
  // 表单项的placeholder
  placeholder?: string,
  attrs: any
}