// En src/components/topics/SimplePastContent.vue
<template>
  <div class="topic-content-container">
    <ExerciseSection
      sectionId="practica-pasado-simple-content"
      title="Práctica: Pasado Simple"
      description="Completa con la forma correcta del Pasado Simple."
      :exercises="simplePastExercisesData" />
  </div>
</template>

<script setup>
// ... otras importaciones (ContentCard, VerbTable, datos de verbos) ...
import ExerciseSection from '@/components/ExerciseSection.vue'; // O la ruta correcta a ExerciseSection
import { simplePastExercises } from '@/data/exerciseData.js'; // Importa el array específico

const simplePastExercisesData = simplePastExercises; // Esta es la variable que se pasa a la prop
// ... resto del script setup ...
</script>

<style scoped>
/* ... tus estilos ... */
</style>