// Archivo: src/components/ExerciseItem.vue
<template>
  <div class="exercise-item">
    <p v-html="exercise.text"></p>
    <input type="text" v-model="userAnswer" :placeholder="exercise.placeholder" @input="clearFeedbackOnInput">
    <span :class="feedbackComputedClass">{{ feedbackText }}</span>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, watch } from 'vue';

// defineEmits se usa para declarar los eventos que este componente puede emitir hacia su padre.
const emit = defineEmits(['update:answer', 'update:feedback']);

const props = defineProps({
  exercise: {
    type: Object,
    required: true
  },
  // Prop para recibir el estado de revisión desde el padre (ExerciseSection)
  isBeingChecked: {
    type: Boolean,
    default: false
  }
});

// 'ref' crea una variable reactiva. Si su valor cambia, Vue actualizará el DOM.
const userAnswer = ref('');
const feedbackText = ref('');
const feedbackType = ref(''); // 'correct', 'incorrect', ''

// Observa cambios en la prop isBeingChecked.
// Cuando el padre (ExerciseSection) cambie isBeingChecked a true, este watcher se ejecuta.
watch(() => props.isBeingChecked, (newValue) => {
  if (newValue) {
    performCheck();
  }
});

// Observa cambios en userAnswer para emitir la respuesta al padre.
watch(userAnswer, (newAnswer) => {
  emit('update:answer', { id: props.exercise.id, answer: newAnswer });
});

function performCheck() {
  const correctAnswer = props.exercise.correctAnswer.trim().toLowerCase();
  const currentAnswer = userAnswer.value.trim().toLowerCase();

  if (currentAnswer === '') {
    feedbackText.value = 'Intenta responder.';
    feedbackType.value = 'incorrect';
  } else if (currentAnswer === correctAnswer) {
    feedbackText.value = '¡Correcto! 👍';
    feedbackType.value = 'correct';
  } else {
    feedbackText.value = 'Incorrecto. Intenta de nuevo. 🤔';
    feedbackType.value = 'incorrect';
  }
  emit('update:feedback', { id: props.exercise.id, type: feedbackType.value, text: feedbackText.value });
}

function clearFeedbackOnInput() {
  // Solo limpia el feedback si NO se está en modo "isBeingChecked"
  // Esto evita que el feedback desaparezca inmediatamente si el usuario corrige después de un chequeo.
  if (!props.isBeingChecked) {
      feedbackText.value = '';
      feedbackType.value = '';
      emit('update:feedback', { id: props.exercise.id, type: '', text: '' });
  }
}

// Propiedad computada para las clases del feedback
const feedbackComputedClass = computed(() => {
  if (feedbackType.value === 'correct') {
    return 'feedback-correct';
  } else if (feedbackType.value === 'incorrect') {
    return 'feedback-incorrect';
  }
  return ''; // Sin clase especial
});
</script>

<style scoped>
/* Los estilos ya están en style.css global. */
</style>