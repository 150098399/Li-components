import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notaficaton from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './choseDate'
import chooseCity from './chooseCity'

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notaficaton,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate,
  chooseCity
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}