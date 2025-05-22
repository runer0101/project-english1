// Archivo: src/components/ExerciseSection.vue
<template>
  <ContentCard id="practica" title="¡Practiquemos un Poco!">
    <p>Completa las siguientes frases con la forma correcta del verbo en pasado simple.</p>
    <ExerciseItem
      v-for="ex in exerciseList"
      :key="ex.id"
      :exercise="ex"
      :is-being-checked="checkingInProgress"
      @update:answer="handleAnswerUpdate"
      @update:feedback="handleFeedbackUpdate"
    />
    <button @click="triggerAllChecks" class="btn">Revisar Ejercicios</button>
  </ContentCard>
</template>

<script setup>
import { ref } from 'vue';
import ContentCard from './ContentCard.vue';
import ExerciseItem from './ExerciseItem.vue';
import { exercises } from '../data/exerciseData.js'; // Importamos los datos de los ejercicios

const exerciseList = ref(
  exercises.map(ex => ({ ...ex, userAnswer: '', feedback: { type: '', text: ''} }))
);
const checkingInProgress = ref(false);

function handleAnswerUpdate({ id, answer }) {
  const exercise = exerciseList.value.find(ex => ex.id === id);
  if (exercise) {
    exercise.userAnswer = answer;
  }
}

function handleFeedbackUpdate({ id, type, text }) {
    const exercise = exerciseList.value.find(ex => ex.id === id);
    if (exercise) {
        exercise.feedback.type = type;
        exercise.feedback.text = text;
    }
}

function triggerAllChecks() {
  checkingInProgress.value = true;
  // Los ExerciseItem individuales reaccionarán a este cambio y se auto-verificarán.

  // Opcional: resetear el estado de "checkingInProgress" después de un tiempo
  // para permitir al usuario corregir y volver a chequear.
  setTimeout(() => {
    checkingInProgress.value = false;
  }, 500); // Un tiempo corto para que el watch en ExerciseItem se dispare
}
</script>

<style scoped>
/* Los estilos ya están en style.css global. */
</style>