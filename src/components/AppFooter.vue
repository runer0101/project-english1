// Archivo: src/components/AppFooter.vue
<template>
  <footer>
    <div class="container">
      <p>&copy; {{ currentYear }} Guía de Pasado Simple Interactiva. ¡Sigue practicando!</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

// 'computed' crea una propiedad cuyo valor depende de otras variables reactivas
// o simplemente calcula un valor. Se actualiza automáticamente si sus dependencias cambian.
// Aquí, simplemente obtiene el año actual una vez.
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* Los estilos de 'footer' ya están en style.css global. */
</style>