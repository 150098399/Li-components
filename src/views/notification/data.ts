import { ListOptions, ActionOptions } from '../../components/list/src/types'
export const list: ListOptions[] = [
  {
    title: '通知',
    content: [
      {
        title: '毛主席回复了你的邮件hhhhhhhhhhhhhhhhhhhhhhhh',
        time: '2023-11-11 11:11:11',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      {
        title: '周总理回复了你的邮件',
        time: '2023-11-11 11:11:11',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      }
    ]
  },

  {
    title: '待办',
    content: [
      {
        title: '回复乔丹的信息',
        time: '2023-11-11 11:11:11',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        desc: 'dsdsd'
      },
      {
        title: '回复姚明的信息',
        time: '2023-11-11 11:11:11',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        desc: 'fff',
        tag: '待处理',
        tagType: 'danger'
      }
    ]
  },
]

export const actions: ActionOptions[] = [
  {
    text: '清空待办',
    icon: 'Delete'
  },
  {
    text: '查看更多',
    icon: 'Sunny'
  }
]