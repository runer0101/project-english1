// Archivo: src/views/ComparativesSuperlativesView.vue
<template>
  <div>
    <ContentCard title="Comparativos y Superlativos">
      <p>Los adjetivos comparativos se usan para comparar diferencias entre dos objetos...</p>
      <h3>Comparativos y Superlativos Irregulares Comunes:</h3>
        <table>
          <thead>
            <tr>
              <th>Adjetivo (Positivo)</th>
              <th>Comparativo</th>
              <th>Superlativo</th>
              <th>Traducción (Positivo)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>good</td><td>better</td><td>the best</td><td>bueno</td></tr>
            </tbody>
        </table>
        <div class="example">
          <p><em>My house is <strong>bigger</strong> than yours.</em></p>
        </div>
    </ContentCard>

    <ExerciseSection
        sectionId="practica-comparativos"
        title="Práctica: Comparativos y Superlativos"
        description="Forma el comparativo o superlativo correcto."
        :exercises="comparativeSuperlativeExercisesData"
    />
  </div>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue';
import ExerciseSection from '@/components/ExerciseSection.vue';
// Asume que tienes un array 'comparativeSuperlativeExercises' en exerciseData.js
import { comparativeExercises, superlativeExercises } from '@/data/exerciseData.js'; // O un array combinado

// Combina o selecciona los ejercicios que quieras mostrar
const comparativeSuperlativeExercisesData = [...comparativeExercises, ...superlativeExercises];
</script>

<style scoped>
/* Estilos específicos para esta vista */
</style>