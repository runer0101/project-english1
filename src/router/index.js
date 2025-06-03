// Archivo: src/router/index.js

// Importa las funciones necesarias desde la librería vue-router.
// createRouter: se usa para crear la instancia del router.
// createWebHashHistory: se usa para el modo de historial de URLs con hash (#), simple para empezar.
import { createRouter, createWebHashHistory } from 'vue-router';

// Importación dinámica (lazy loading) de los componentes de vista.
// Esto significa que el código de cada vista solo se carga cuando el usuario navega a ella,
// mejorando el tiempo de carga inicial de la aplicación.
// El alias '@/' usualmente apunta a la carpeta 'src/'.
const HomeView = () => import('@/views/HomeView.vue'); // Componente para la página de inicio.
const SimplePastView = () => import('@/views/SimplePastView.vue'); // Componente para la vista del Pasado Simple.
const ComparativesSuperlativesView = () => import('@/views/ComparativesSuperlativesView.vue'); // Componente para Comparativos y Superlativos.
const PresentPerfectView = () => import('@/views/PresentPerfectView.vue'); // Componente para Presente Perfecto.
const VerbsView = () => import('@/views/VerbsView.vue'); // Componente para la página combinada de Verbos Regulares e Irregulares.

// Define un array de objetos, donde cada objeto representa una ruta de la aplicación.
const routes = [
  {
    path: '/', // La URL raíz del sitio.
    name: 'Home', // Un nombre único para esta ruta (útil para navegación programática).
    component: HomeView // El componente Vue que se mostrará cuando se visite esta ruta.
  },
  {
    path: '/simple-past', // URL para el tema de Pasado Simple.
    name: 'SimplePast',
    component: SimplePastView
  },
  {
    path: '/comparatives-superlatives', // URL para Comparativos y Superlativos.
    name: 'ComparativesSuperlatives',
    component: ComparativesSuperlativesView
  },
  {
    path: '/present-perfect', // URL para Presente Perfecto.
    name: 'PresentPerfect',
    component: PresentPerfectView
  },
  {
    path: '/verbs', // URL para la nueva página combinada de Verbos.
    name: 'Verbs',
    component: VerbsView
  },
  // Puedes añadir una ruta "catch-all" para redirigir páginas no encontradas (opcional).
  // { path: '/:pathMatch(.*)*', redirect: '/' } // Redirige cualquier ruta no encontrada a la página de inicio.
];

// Crea la instancia del router con la configuración.
const router = createRouter({
  history: createWebHashHistory(), // Configura el modo de historial para usar hashes en la URL (ej. /#/simple-past).
                                   // Es más simple para empezar y para despliegues en servidores estáticos.
  routes, // Asigna el array de rutas definido arriba a la configuración del router (es una forma corta de routes: routes).
  
  // Define el comportamiento del scroll al navegar entre rutas.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Si hay una posición guardada (ej. al usar los botones atrás/adelante del navegador), la restaura.
      return savedPosition;
    } else if (to.hash) {
      // Si la URL de destino tiene un ancla (ej. /simple-past#ejemplos), hace scroll suave a ese elemento.
      return { el: to.hash, behavior: 'smooth' };
    } else {
      // Para cualquier otra navegación nueva, hace scroll suave al inicio de la página.
      return { top: 0, behavior: 'smooth' };
    }
  }
});

// Exporta la instancia del router para que pueda ser importada y usada en src/main.js.
export default router;