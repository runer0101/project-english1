// Archivo: src/components/ContentCard.vue
<template>
  <section class="card">
    <h2 v-if="title">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

// Este componente acepta una propiedad opcional 'title' de tipo String.
defineProps({
  title: String, // No es required, así que puede o no tener título.
});
</script>

<style scoped>
/* Los estilos de '.card' y '.card h2' ya están en style.css global. */
</style>