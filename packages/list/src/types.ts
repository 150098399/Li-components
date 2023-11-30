export interface ListItem {
  avatar?: string,  // 头像
  title?: string,   // 标题
  desc?: string,    // 描述
  time?: string,    // 时间
  tag?: string,      // 标签内容
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger',   // 标签类型
}

export interface ListOptions {
  title: string,
  content: ListItem[]
}

export interface ActionOptions {
  text: string,
  icon?: string
}