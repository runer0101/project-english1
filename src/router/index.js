// Archivo: src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'; // Usaremos createWebHashHistory para simplificar en este ejemplo. createWebHistory es otra opción común.

// Importaremos los componentes de las vistas de cada tema más adelante
// Por ahora, podemos definirlos como componentes dinámicos para que no den error si aún no existen.
const SimplePastView = () => import('../views/SimplePastView.vue');
const ComparativesSuperlativesView = () => import('@/views/ComparativesSuperlativesView.vue');
const PresentPerfectView = () => import('@/views/PresentPerfectView.vue');
// Más adelante, podríamos tener una vista para la lista de ejercicios o una página de inicio.
// const HomeView = () => import('@/views/HomeView.vue');

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: HomeView // Una página de inicio si la tuvieras
  // },
  {
    path: '/', // Haremos que el Pasado Simple sea la página por defecto por ahora
    name: 'SimplePast',
    component: SimplePastView
  },
  {
    path: '/simple-past',
    name: 'SimplePastLink', // Usamos un nombre diferente si '/' ya es SimplePast
    component: SimplePastView
  },
  {
    path: '/comparatives-superlatives',
    name: 'ComparativesSuperlatives',
    component: ComparativesSuperlativesView
  },
  {
    path: '/present-perfect',
    name: 'PresentPerfect',
    component: PresentPerfectView
  },
  // Aquí podrías añadir rutas para secciones de ejercicios específicos si las separas
  // {
  //   path: '/exercises/:topic', // Ejemplo de ruta dinámica
  //   name: 'TopicExercises',
  //   component: () => import('@/views/TopicExercisesView.vue'),
  //   props: true
  // }
];

const router = createRouter({
  history: createWebHashHistory(), // Usa el modo hash para URLs (ej. http://localhost:5173/#/simple-past). Es más fácil para empezar.
                                // createWebHistory() es más limpio (sin el #) pero requiere configuración del servidor para producción.
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    // Siempre hacer scroll al principio de la página al navegar a una nueva ruta
    // O si hay una posición guardada (ej. al usar los botones atrás/adelante del navegador)
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) { // Si la ruta tiene un hash (ej. /simple-past#examples)
        return {
            el: to.hash,
            behavior: 'smooth', // Opcional: scroll suave
        }
    }
    else {
      return { top: 0 };
    }
  }
});