import { createApp } from 'vue'
import { createPinia } from 'pinia'

import naive from 'naive-ui'
import App from './App.vue'

import 'virtual:windi.css'

const app = createApp(App)
app.use(naive)
app.use(createPinia())
app.mount('#app')
