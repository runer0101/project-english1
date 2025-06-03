// Archivo: src/components/ExerciseItem.vue
<template>
  <div class="exercise-item-card">
    <p class="exercise-text">
      <span v-html="exercise.text"></span>
      <span @click="speak(exercise.text, 'en-US')" class="speaker-icon clickable-text exercise-speaker">🔈</span>
    </p>

    <div class="answer-area">
      <input
        v-if="isTextInputType(exercise.type)"
        type="text"
        v-model="userAnswer"
        :placeholder="exercise.placeholder || 'Escribe tu respuesta aquí'"
        @input="clearFeedbackOnInputChange"
        @keypress.enter="checkThisSpecificAnswer"
        class="answer-input"
        :aria-label="'Respuesta para el ejercicio: ' + exercise.text"
      >
      </div>

    <div class="feedback-and-review-actions">
      <span :class="feedbackComputedClass" class="feedback-span" aria-live="polite">{{ feedbackText }}</span>
      <button
        @click="checkThisSpecificAnswer"
        class="btn btn-small review-one-btn"
        v-if="!isBeingChecked && userAnswer.trim() !== '' && feedbackType === ''"
      >
        Revisar
      </button>
    </div>

    <p v-if="showCorrectAnswerAfterCheck && feedbackType === 'incorrect'" class="correct-answer-display">
      Respuesta correcta: <strong>{{ exercise.correctAnswer }}</strong>
      <span @click="speak(exercise.correctAnswer, 'en-US')" class="speaker-icon clickable-text answer-speaker">🔈</span>
    </p>
  </div>
</template>

<script setup>
import { ref, computed, toRefs } from 'vue';
// Corregido: Ruta de importación usando el alias @ (asumiendo que @ apunta a src/)
import { speakText } from '@/utils/speechUtils'; // Asegúrate de que esta ruta sea correcta

const emit = defineEmits(['update:answer', 'update:feedback']);
const props = defineProps({ /* ... tus props ... */ // Asegúrate de que esta definición sea completa y correcta
  exercise: { type: Object, required: true },
  isBeingChecked: { type: Boolean, default: false }
});
const { exercise, isBeingChecked } = toRefs(props);

const userAnswer = ref('');
const feedbackText = ref('');
const feedbackType = ref('');
const showCorrectAnswerAfterCheck = ref(false);

// ... (resto de tu script setup: isTextInputType, watchers, normalizeAnswer, performCheck, etc.) ...
// Asegúrate de que la función normalizeAnswer quite el HTML si es necesario antes de hablar.
// También asegúrate que las funciones referenciadas como isTextInputType, normalizeAnswer, etc. estén definidas.

function stripHtml(html) {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function speak(textToSpeak, lang) {
  if (textToSpeak) {
    const cleanText = stripHtml(textToSpeak); // Limpia HTML del texto del ejercicio
    // Podrías necesitar limpiar placeholders como "______ (play)"
    const textForSpeech = cleanText.replace(/______\s*\([^)]+\)/g, '').trim();
    if (textForSpeech) {
        speakText(textForSpeech, lang);
    }
  }
}

// La función performCheck, clearFeedback, etc., se mantienen como antes.
// Aquí está una versión simplificada de performCheck para mantener el foco:
function performCheck() {
  // ... tu lógica de performCheck ...
  // Asegúrate que normalizeAnswer esté definida en tu script
  // const correctAnswerNormalized = normalizeAnswer(props.exercise.correctAnswer);
  // const userAnswerNormalized = normalizeAnswer(userAnswer.value);
  // let isCorrect = (userAnswerNormalized === correctAnswerNormalized);
  let isCorrect = false; // Placeholder, reemplaza con tu lógica real
  const userAnswerNormalized = userAnswer.value; // Placeholder

  // ... (resto de la lógica de feedback) ...
  if (userAnswerNormalized === '') { /* ... */ }
  else if (isCorrect) { /* ... */ }
  else { /* ... */ showCorrectAnswerAfterCheck.value = true; }
  emit('update:feedback', { id: props.exercise.id, type: feedbackType.value, text: feedbackText.value });
}

function checkThisSpecificAnswer() { performCheck(); }
function clearFeedback() { feedbackText.value = ''; feedbackType.value = ''; showCorrectAnswerAfterCheck.value = false; }
function clearFeedbackOnInputChange() { if (!isBeingChecked.value) clearFeedback(); }

// Asegúrate que isTextInputType esté definida
const isTextInputType = (type) => ['fill_in_blank', 'form_sentence_negative', 'form_sentence_question'].includes(type); // Ejemplo, ajusta según tus tipos

const feedbackComputedClass = computed(() => { /* ... */ return '';}); // Completa esta lógica

</script>

<style scoped>
/* ... tus estilos de ExerciseItem.vue ... */
.clickable-text {
  cursor: pointer;
}
.speaker-icon {
  font-size: 0.9em; /* Ajusta el tamaño del ícono */
  margin-left: 8px;
  opacity: 0.7;
  display: inline-block;
  vertical-align: middle; /* Alinea mejor con el texto */
  transition: opacity 0.2s;
}
.speaker-icon:hover {
  opacity: 1;
}
.exercise-text {
  display: flex; /* Para alinear el texto y el ícono */
  align-items: center;
}
.exercise-text > span:first-child { /* El texto del ejercicio */
  flex-grow: 1;
}
.exercise-text > span.exercise-speaker {
  cursor: pointer;
  color: var(--primary-color, #4A90E2); /* Color del ícono */
}
</style>