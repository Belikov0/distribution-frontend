import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import axios from 'axios'


const app = createApp(App)
const pinia = createPinia()
axios.defaults.baseURL = "http://localhost:9090/"



app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.provide("$axios", axios)
app.mount('#app')
