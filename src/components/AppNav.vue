// Archivo: src/components/AppNav.vue
<template>
  <nav>
    <div class="container">
      <ul>
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

// defineProps se usa para declarar las propiedades.
// Aquí, esperamos una propiedad 'navItems' que sea un Array y es requerida.
defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Los estilos de 'nav' ya están en style.css global. */
</style>