// Archivo: src/components/VerbTable.vue
<template>
  <table>
    <thead>
      <tr>
        <th>Forma Base</th>
        <th>Pasado Simple</th>
        <th>Traducción</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="verb in verbs" :key="verb.base">
        <td>{{ verb.base }}</td>
        <td>{{ verb.past }}</td>
        <td>{{ verb.translation }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue';

// Espera una propiedad 'verbs' que es un Array y es requerida.
defineProps({
  verbs: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Los estilos de 'table' ya están en style.css global. */
</style>