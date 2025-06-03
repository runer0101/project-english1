// Archivo: src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <--- ¡ESTA LÍNEA ES CRUCIAL! Asegúrate de que esté presente y la ruta sea correcta.
import './assets/style.css'   // Importa tus estilos CSS globales

const app = createApp(App)

app.use(router) // Aquí usas la variable 'router' que importaste arriba.

app.mount('#app')