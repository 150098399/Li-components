import { defineComponent, PropType, useAttrs } from 'vue'
import { MenuItem } from './types'
import * as Icons from '@element-plus/icons-vue'
import './style.scss'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true
    },
  
    defaultActive: {
      type: String,
      default: ''
    },
  
    router: {
      type: Boolean,
      default: false
    },
    // 菜单标题键名
    name: {
      type: String,
      default: 'name'
    },
    // 菜单标识键名
    index: {
      type: String,
      default: 'index'
    },
    // 菜单图标键名
    icon: {
      type: String,
      default: 'icon'
    },
    // 子菜单键名
    children: {
      type: String,
      default: 'children'
    }
  },
  setup(props) {
    // 渲染无限层级菜单的方法
    const renderMenu = (data: any[]) => {
      
      return data.map((item: any) => {
        // 处理icon
        item.i = (Icons as any)[item[props.icon]!]
        // 处理子菜单的插槽
        const slots = {
          title: () => {
            return <>
              <item.i />
              <span>{ item[props.name] }</span>
            </>
          }
        }
        // 递归渲染children
        if (item[props.children] && item[props.children].length) {
          return (
            <el-sub-menu index={item[props.index] } v-slots={slots}>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          )
        }

        //  普通菜单（无子菜单）
        return (
          <el-menu-item index={item[props.index]}>
            <item.i />
            <span>{ item[props.name] }</span>
          </el-menu-item>
        )
      })
    }    
    const attrs = useAttrs()
    return () => {
      return (
        <el-menu
          class='menu'
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})