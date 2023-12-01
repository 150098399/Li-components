export interface MenuItem {
  // 导航的icon
  icon?: string,
  // 处理后的icon
  i?: string,
  // 导航名
  name: string,
  // 导航的标识
  index: string,
  // 导航的子菜单
  children: MenuItem[]
}