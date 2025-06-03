<template>
  <ContentCard id="preguntas-respuestas" title="Pregúntame sobre tus dudas de cualquiera de los Temas" class="qa-box">
    <div id="qa-area">
      <div id="chat-box" ref="chatBoxRef">
        <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.sender + '-message']">
          <p v-html="msg.text"></p>
        </div>
      </div>
      <div id="input-area">
        <input
          type="text"
          id="user-question"
          v-model="userQuestion"
          placeholder="Escribe tu pregunta aquí..."
          @keypress.enter="handleAsk"
        />
        <button id="ask-btn" @click="handleAsk" class="btn">Enviar</button>
      </div>
    </div>
  </ContentCard>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import ContentCard from './ContentCard.vue';
import { qaPairs, defaultFallbackAnswer } from '../data/qaData.js'; // Importamos los datos de Q&A

const userQuestion = ref(''); // Variable reactiva para el input del usuario
const messages = ref([ // Array reactivo para los mensajes del chat
  { sender: 'bot', text: 'Hola 👋 ¡Pregúntame lo que quieras saber!' }
]);
const chatBoxRef = ref(null); // Referencia al div del chat-box

// Función para añadir un mensaje al chat
function addMessageToDisplay(text, sender) {
  messages.value.push({ text, sender });

  // nextTick espera a que Vue actualice el DOM antes de ejecutar el código.
  // Esto asegura que el nuevo mensaje esté renderizado antes de intentar hacer scroll.
  nextTick(() => {
    if (chatBoxRef.value) {
      chatBoxRef.value.scrollTop = chatBoxRef.value.scrollHeight; // Auto-scroll al último mensaje
    }
  });
}

// Lógica para obtener la respuesta del "bot" (simplificada)
function getBotResponse(userText) {
  const lowerUserText = userText.toLowerCase().trim();
  let bestMatch = null;
  let highestScore = 0;

  // Intenta una coincidencia exacta primero
  if (qaPairs[lowerUserText]) {
    return qaPairs[lowerUserText];
  }

  // Búsqueda simple por palabras clave
  for (const question in qaPairs) {
    const keywords = question.split(" ");
    let currentScore = 0;
    keywords.forEach(keyword => {
      if (lowerUserText.includes(keyword)) {
        currentScore++;
      }
    });
    // Da más peso a preguntas más largas que coinciden
    if (currentScore > highestScore && currentScore >= Math.min(2, keywords.length * 0.5) ) {
         highestScore = currentScore;
         bestMatch = qaPairs[question];
    } else if (currentScore === highestScore && keywords.length > (bestMatch ? bestMatch.split(" ").length : 0) && currentScore >= Math.min(2, keywords.length * 0.5) ){
        // Si el puntaje es el mismo, prefiere la coincidencia con más palabras clave originales.
        bestMatch = qaPairs[question];
    }
  }

  // Umbral mínimo de coincidencia para considerar una respuesta válida
  if (bestMatch && highestScore > 0) { // Requiere al menos 1 palabra clave coincidente y un match
    return bestMatch;
  }

  return defaultFallbackAnswer; // Respuesta por defecto si no se entiende
}

// Maneja el envío de la pregunta del usuario
function handleAsk() {
  const uq = userQuestion.value.trim();
  if (uq === '') return; // No hace nada si la pregunta está vacía

  addMessageToDisplay(uq, 'user'); // Muestra la pregunta del usuario
  userQuestion.value = ''; // Limpia el campo de input

  // Simula un pequeño retraso para la respuesta del bot
  setTimeout(() => {
    const botText = getBotResponse(uq);
    // Determina si el mensaje del bot es un error para aplicar estilos condicionales si fuera necesario
    // let botMessageClass = 'bot';
    // if (botText === defaultFallbackAnswer) {
    //   botMessageClass = 'bot error-message'; // Asumiendo que tienes esta clase en tu CSS global
    // }
    addMessageToDisplay(botText, 'bot'); // Muestra la respuesta del bot
  }, 500);
}
</script>

<style scoped>
/* Los estilos ya están en style.css global. */
/* qa-area y sus hijos ya tienen estilos globales. */
</style>