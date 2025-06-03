// Archivo: src/App.vue
<template>
  <div id="vue-app-container">
    <AppHeader />
    <AppNav :nav-items="navigationItems" />

    <main class="container main-content-area">
      <router-view />
    </main>

    <div class="container qa-box-container">
      <QABox id="preguntas-respuestas-global" />
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';
import QABox from './components/QABox.vue';

const navigationItems = [
  { text: 'Inicio', path: '/' },
  { text: 'Verbos (Reg. e Irreg.)', path: '/verbs' },
  { text: 'Pasado Simple', path: '/simple-past' },
  { text: 'Comparativos/Superlativos', path: '/comparatives-superlatives' },
  { text: 'Presente Perfecto', path: '/present-perfect' },
];
</script>

<style>
/* Estilos para el layout fundamental de App.vue. */
#vue-app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content-area {
  flex-grow: 1;
  padding-top: 25px;
  padding-bottom: 25px;
}

.qa-box-container {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>