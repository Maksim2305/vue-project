import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import myPlugin from './components/utils/myPlugin.js'

const app = createApp(App)

const ru = {
  app: {
    title: 'Добавьте первый блок!',
    btn: 'переключить язык'
  }
}
const en = {
  app: {
    title: 'Add first block please!',
    btn: 'toggle lang'
  }
}
app.use(myPlugin, { ru, en })
app.mount('#app')
