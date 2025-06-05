import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import './assets/style.css' 
const app = createApp(App)

app.use(router) // Aquí usas la variable 'router' que importaste arriba.

app.mount('#app')