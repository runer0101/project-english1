// Archivo: src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa la configuración del router
import './assets/style.css'

const app = createApp(App)

app.use(router) // Dile a Vue que use el router

app.mount('#app')