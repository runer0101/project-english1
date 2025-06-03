// Archivo: src/components/AppNav.vue
<template>
  <nav class="app-nav"> 
    <div class="container nav-container"> 
      <ul>
        <li v-for="item in navItems" :key="item.path">
          <router-link :to="item.path">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// NO importes defineProps desde 'vue'
defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Estilos específicos para AppNav si son necesarios,
   pero la responsividad del layout del NAV se manejará globalmente. */

/* El estilo para .router-link-exact-active ya lo tenías y está bien aquí */
.app-nav ul li .router-link-exact-active {
  background-color: #ffffff;
  color: var(--primary-color, #4A90E2); /* O tu variable CSS */
  font-weight: 600;
}

/* En pantallas chicas, los items <a> ya son display: block por el CSS global.
   Aquí podrías añadir toques finales si es necesario. */
@media (max-width: 767px) {
  .app-nav ul li a {
    padding: 0.9rem 1rem; /* Un poco más de padding vertical en móviles para mejor tacto */
  }
}
</style>