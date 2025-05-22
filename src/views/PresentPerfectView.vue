// Archivo: src/views/PresentPerfectView.vue
<template>
  <div>
    <ContentCard title="El Presente Perfecto">
      <p>El Presente Perfecto (Present Perfect Tense) se usa para hablar de acciones...</p>
      <div class="tip">
        <p><strong>¡Importante!</strong> Revisa la lista de verbos irregulares para sus participios pasados.</p>
         <ul>
            <li>be → was/were → <strong>been</strong></li>
            </ul>
      </div>
    </ContentCard>

    <ExerciseSection
        sectionId="practica-presente-perfecto"
        title="Práctica: Presente Perfecto"
        description="Completa con la forma correcta del Presente Perfecto."
        :exercises="presentPerfectExercisesData"
    />
  </div>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue';
import ExerciseSection from '@/components/ExerciseSection.vue';
// Asume que tienes un array 'presentPerfectExercises' en exerciseData.js
import { presentPerfectExercises } from '@/data/exerciseData.js';

const presentPerfectExercisesData = presentPerfectExercises;
</script>

<style scoped>
/* Estilos específicos para esta vista */
</style>