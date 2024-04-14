import { App } from 'vue'
import bigForm from './src/index.vue'

export default {
  install(app: App) {
    app.component('m-big-form', bigForm)
  }
}