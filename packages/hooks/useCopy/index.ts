import { ElMessage } from 'element-plus'
export const useCopy = (text: string) => {
  // 创建输入框
  const input = document.createElement('input')
  // 给输入框赋值
  input.value = text
  // 追加到body
  document.body.appendChild(input)
  // 选中输入框
  input.select()
  // 复制操作
  document.execCommand('Copy')
  document.body.removeChild(input)
  // 提示
  ElMessage.success('复制成功')
}