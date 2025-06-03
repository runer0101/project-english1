<template>
  <ContentCard :id="sectionId || 'practica-default'" :title="title || '¡Practiquemos un Poco!'">
    <p v-if="description" class="exercise-section-description">{{ description }}</p>
    
    <ExerciseItem
      v-for="exState in exercisesWithState"
      :key="exState.id"
      :exercise="exState.originalExercise" :is-being-checked="checkingInProgress"
      @update:answer="payload => handleAnswerUpdate(exState.id, payload.answer)" 
      @update:feedback="payload => handleFeedbackUpdate(exState.id, payload.type, payload.text)"
    />
    
    <button @click="triggerAllChecks" class="btn check-exercises-btn">Revisar Todos los Ejercicios</button>
  </ContentCard>
</template>

<script setup>
import { ref, watch } from 'vue';
import ContentCard from './ContentCard.vue';   // O '@/components/ContentCard.vue'
import ExerciseItem from './ExerciseItem.vue'; // O '@/components/ExerciseItem.vue'

// Define las props que este componente espera recibir de la rama principal 
const props = defineProps({
  sectionId: String,
  title: String,
  description: String,
  exercises: { // Aquí es donde se reciben los ejercicios específicos del tema
    type: Array,
    required: true,
    default: () => [] 
  }
});

const checkingInProgress = ref(false);

// Creamos una versión reactiva de los ejercicios que incluye estado local
const exercisesWithState = ref([]);

// Observa la prop 'props.exercises' y actualiza 'exercisesWithState'
watch(() => props.exercises, (newExercises) => {
  if (newExercises) {
    exercisesWithState.value = newExercises.map(ex => ({
      ...ex, // Copia todas las propiedades originales del ejercicio
      originalExercise: ex, 
      userAnswer: '',       
      feedbackType: '',     
      feedbackText: ''      
    }));
  } else {
    exercisesWithState.value = [];
  }
}, { immediate: true, deep: true });


function handleAnswerUpdate(exerciseId, answerValue) {
  const exerciseState = exercisesWithState.value.find(exState => exState.id === exerciseId);
  if (exerciseState) {
    exerciseState.userAnswer = answerValue;
    if (!checkingInProgress.value) {
        exerciseState.feedbackType = '';
        exerciseState.feedbackText = '';
    }
  }
}

function handleFeedbackUpdate(exerciseId, type, text) {
  const exerciseState = exercisesWithState.value.find(exState => exState.id === exerciseId);
  if (exerciseState) {
    exerciseState.feedbackType = type;
    exerciseState.feedbackText = text;
  }
}

function triggerAllChecks() {
  checkingInProgress.value = true;
  setTimeout(() => {
    checkingInProgress.value = false;
  }, 1000); // Ajusta el tiempo si es necesario
}
</script>

<style scoped>
/* La clase 'card' del ContentCard ya debería aplicar estilos globales. */

.exercise-section-description { /* Estilo para la descripción si la tienes */
  font-size: 1em;
  color: #555;
  margin-bottom: 25px;
  font-style: italic;
}

.check-exercises-btn {
  margin-top: 25px;
  display: block; 
  margin-left: auto; 
  margin-right: auto; 
}
</style>