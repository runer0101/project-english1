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
import { ref, computed, toRefs, watch } from 'vue';
import { speakText } from '@/utils/speechUtils'; // Asegúrate de que esta ruta sea correcta

const emit = defineEmits(['update:answer', 'update:feedback']);

const props = defineProps({
  exercise: {
    type: Object,
    required: true,
    // Ejemplo de estructura de 'exercise':
    // {
    //   id: 1,
    //   text: "The cat ______ on the mat.",
    //   type: "fill_in_blank",
    //   correctAnswer: "is sleeping",
    //   placeholder: "verb in present continuous"
    // }
  },
  isBeingChecked: {
    type: Boolean,
    default: false
  },
  // Si tienes un modo global de revisión/corrección, podrías necesitar esto
  // globalCheckTrigger: {
  //   type: Number, // Un contador que se incrementa para forzar la revisión
  //   default: 0
  // }
});

const { exercise, isBeingChecked } = toRefs(props);

const userAnswer = ref('');
const feedbackText = ref('');
const feedbackType = ref(''); // 'correct', 'incorrect', 'empty'
const showCorrectAnswerAfterCheck = ref(false);

// --- Funciones de Utilidad ---

// Limpia el HTML de una cadena de texto
function stripHtml(html) {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

// Normaliza la respuesta para la comparación
// Importante: Puedes ajustar esta función para ser más o menos estricta.
function normalizeAnswer(answer) {
  if (typeof answer !== 'string') return '';
  // Convertir a minúsculas, quitar espacios extra al inicio/final,
  // quitar puntuación básica, reemplazar múltiples espacios por uno solo
  return answer
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:]/g, '') // Quita puntuación común
    .replace(/\s+/g, ' ');   // Reemplaza múltiples espacios por uno
}

// Función para reproducir texto
function speak(textToSpeak, lang) {
  if (textToSpeak) {
    const cleanText = stripHtml(textToSpeak);
    const textForSpeech = cleanText.replace(/______\s*\([^)]+\)/g, '').trim(); // Elimina placeholders como "______ (play)"
    if (textForSpeech) {
      speakText(textForSpeech, lang);
    }
  }
}

// Determina si el tipo de ejercicio requiere una entrada de texto
const isTextInputType = (type) => ['fill_in_blank', 'form_sentence_negative', 'form_sentence_question', 'text_input'].includes(type);
// Puedes añadir más tipos según tus necesidades, ej: 'multiple_choice', 'drag_and_drop'

// --- Lógica de Corrección ---

function performCheck() {
  const userResponse = userAnswer.value.trim();
  
  // Limpia feedback anterior
  clearFeedback();

  if (userResponse === '') {
    feedbackText.value = 'Por favor, escribe tu respuesta.';
    feedbackType.value = 'empty';
    showCorrectAnswerAfterCheck.value = false;
    return; // No hay respuesta para corregir
  }

  // Normaliza tanto la respuesta del usuario como la respuesta correcta
  const userAnswerNormalized = normalizeAnswer(userResponse);
  const correctAnswersRaw = Array.isArray(exercise.value.correctAnswer)
    ? exercise.value.correctAnswer
    : [exercise.value.correctAnswer]; // Asegura que siempre sea un array

  const correctAnswersNormalized = correctAnswersRaw.map(ans => normalizeAnswer(ans));

  // Compara la respuesta normalizada del usuario con las respuestas correctas normalizadas
  const isCorrect = correctAnswersNormalized.includes(userAnswerNormalized);

  if (isCorrect) {
    feedbackText.value = '¡Correcto!';
    feedbackType.value = 'correct';
    showCorrectAnswerAfterCheck.value = false;
  } else {
    feedbackText.value = 'Incorrecto. Intenta de nuevo.';
    feedbackType.value = 'incorrect';
    showCorrectAnswerAfterCheck.value = true; // Muestra la respuesta correcta si es incorrecta
  }
  
  // Emitir evento con el feedback, útil para un componente padre que gestiona el estado general
  emit('update:feedback', { 
    id: exercise.value.id, 
    type: feedbackType.value, 
    text: feedbackText.value,
    isCorrect: isCorrect
  });
}

function checkThisSpecificAnswer() {
  if (!isBeingChecked.value) { // Solo si no está siendo chequeado globalmente
    performCheck();
  }
}

// --- Gestión de Feedback y Clases CSS ---

function clearFeedback() {
  feedbackText.value = '';
  feedbackType.value = '';
  showCorrectAnswerAfterCheck.value = false;
}

function clearFeedbackOnInputChange() {
  // Solo limpia el feedback si no estamos en un chequeo global
  if (!isBeingChecked.value) {
    clearFeedback();
  }
}

const feedbackComputedClass = computed(() => {
  return {
    'feedback-correct': feedbackType.value === 'correct',
    'feedback-incorrect': feedbackType.value === 'incorrect',
    'feedback-empty': feedbackType.value === 'empty'
  };
});

// --- Watchers (observadores) ---
// Para cuando el componente padre necesite actualizar el estado de userAnswer o feedback
watch(userAnswer, (newValue) => {
  emit('update:answer', { id: exercise.value.id, answer: newValue });
});

// Si tienes un sistema de "revisar todo" desde un componente padre:
// watch(() => props.globalCheckTrigger, (newVal, oldVal) => {
//   if (newVal > oldVal && newVal > 0) { // Si el trigger se incrementa
//     performCheck();
//   }
// });

// Para limpiar el feedback si el ejercicio cambia o si se reinicia el componente padre
watch(() => exercise.value.id, () => {
    userAnswer.value = ''; // Limpiar respuesta del usuario al cambiar de ejercicio
    clearFeedback();
});


</script>
<style scoped>
/* Estilos generales para el contenedor del ejercicio */
.exercise-item-card {
  background-color: var(--card-bg-color, #ffffff); /* Color de fondo por defecto (DE LAS TARJETAS PRINCIPALES DE LOS EJERCICIOS) */
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px #0c55ff; /* Sombra sutil (DE LAS TARJETAS PRINCIPALES DE LOS EJERCICIOS) */
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Estilo para el texto del ejercicio */
.exercise-text {
  font-size: 1.1em;
  color: var(--text-color, #3a0ab3); /* Color de texto por defecto */
  line-height: 1.5;
  display: flex;
  align-items: center; /* Alinea el texto y el ícono */
  flex-wrap: wrap; /* Permite que el contenido se ajuste en líneas si es muy largo */
}

.exercise-text  u { /* Estilo para el subrayado dentro del texto del ejercicio */
  text-decoration: underline;
  text-decoration-color: var(--primary-color, #ffcc00); 
  text-underline-offset: 3px;
}

/* Área de respuesta (input) */
.answer-area {
  margin-top: 5px;
}

.answer-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border-color, #00b4e1); 
  border-radius: 6px;
  background-color: var(--input-bg-color, #ffffff); /* color de fondo del input (donde se colaca las repuestas) */
  color: var(--input-text-color, #000000); /* color donde se escribe la respuesta */
  font-size: 1em;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.answer-input::placeholder {
  color: var(--placeholder-color, #717070); /* MENSAJE DEL TEXTO PRIMARIO DE COMO COLACAR LA RESPUESTA (ESTA EN LA MISMA TARJETA DONDE SE COLOCA LA RESPUESTA) */
}

.answer-input:focus {
  border-color: var(--primary-color, #00aaff);
  outline: none;
  box-shadow: 0 0 0 3px  #0766ff33; /* Sombra sutil EN LA TARJETA DONDE SE COLOCAN LAS RESPUESTAS */
  transition: box-shadow 0.2s ease;}
/* Área de feedback y botón */
.feedback-and-review-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.feedback-span {
  font-weight: bold;
  font-size: 0.95em;
  padding: 5px 10px;
  border-radius: 4px;
  min-width: 120px; /* Para que no cambie de tamaño si el texto es corto */
  text-align: center;
}

.feedback-correct {
  background-color: var(--success-bg-color, #1c8b36); /* MENSAJE DE CORRECTO */
  color: var(--success-text-color, #fff); /* Color del texto del mensaje de correcto */
}

.feedback-incorrect {
  background-color: var(--error-bg-color, hsla(353, 7%, 76%, 0.292)); /* MENSAJE DE INCORRECTO */
  color: var(--error-text-color, #ff0101); /* Color del texto del mensaje de incorrecto */
}

.feedback-empty {
  background-color: var(--warning-bg-color, #f0fc05); /* Amarillo */
  color: var(--warning-text-color, #000000);
}

/* Botones */
.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.1s ease;
  white-space: nowrap; /* Evita que el texto del botón se rompa */
}

.btn-small {
  padding: 6px 12px;
  font-size: 0.85em;
}

.review-one-btn {
  background-color: var(--primary-color, #4A90E2);
  color: var(--button-text-color, #fff);
}

.review-one-btn:hover {
  background-color: var(--primary-hover-color, #023377); /* Cambia el color al pasar el mouse (el la tarjeta de "Revisar") */
  transform: translateY(-1px);
}

.review-one-btn:active {
  transform: translateY(0);
}

/* MOSTRAR RESPUESTA CORRECTA */
.correct-answer-display {
  font-size: 0.9em;
  color: var(--text-color, #e0e0e0);
  background-color: var(--correct-answer-bg, #4478fb33); /* Fondo sutil para el mensaje que sugiere la despuesta correcta (Respuesta correcta: ...) */
  padding: 8px 12px;
  border-radius: 6px;
  border-left: 4px solid var(--success-bg-color, #7ab2f7); /* parte del lado izquierdo del mensaje  */
}

/* MENSAJE DE CORRECCION DEL EJERCICIO INCORRECTO */
.correct-answer-display strong {
  color: var(--success-text-color, #47ec5d); /* EL MENSAJE CON LA REPUESTA CORRECTA */
}

/* Icono de altavoz */
.clickable-text {
  cursor: pointer;
  user-select: none; /* Evita que el texto se seleccione al hacer clic */
}
.speaker-icon {
  font-size: 1.1em; /* Un poco más grande para mejor visibilidad */
  margin-left: 8px;
  opacity: 0.7;
  display: inline-flex; /* Para centrar verticalmente */
  align-items: center;
  justify-content: center;
  width: 24px; /* Tamaño fijo para el icono */
  height: 24px;
  border-radius: 50%; /* Opcional, para hacerlo circular */
  background-color: #445cf7; /* Fondo sutil al icono del MEGAFONO (EL QUE REPRODUCE LOS SONIDOS) */
  color: var(--primary-color, #0163ff); /* Color del icono */
  transition: opacity 0.2s, background-color 0.2s;
}
.speaker-icon:hover {
  opacity: 1;
  background-color: #395570; /* Cambia el fondo al pasar el mouse del altavoz*/
}
.exercise-speaker {
  /* Estilos específicos para el altavoz del texto del ejercicio */
  font-size: 1em; /* Puede ser ligeramente más pequeño que el general */
}
.answer-speaker {
  /* Estilos específicos para el altavoz de la respuesta correcta */
  font-size: 1em;
}
</style>