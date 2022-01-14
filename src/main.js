import { createApp } from 'vue'
import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(Element3)
app.mount('#app')
