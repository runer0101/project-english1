<template>
  <ContentCard id="preguntas-respuestas" title="Pregúntame sobre tus dudas" class="qa-box">
    <div id="qa-area">
      <div id="chat-box" ref="chatBoxRef">
        <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.sender + '-message']">
          <p>{{ msg.text }}</p>
        </div>
      </div>

      <div id="input-area">
        <input
          type="text"
          id="user-question"
          v-model="userQuestion"
          placeholder="Escribe tu pregunta..."
          @keypress.enter="handleAsk"
          :disabled="isBotReplying"
        />
        <button id="ask-btn" @click="handleAsk" :disabled="isBotReplying">
          Enviar
        </button>
      </div>
    </div>
  </ContentCard>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import ContentCard from './ContentCard.vue';
import { qaPairs, defaultFallbackAnswer } from '../data/qaData.js';

// --- Variables reactivas para controlar el estado del chat ---
const userQuestion = ref(''); // Almacena el texto del input del usuario.
const messages = ref([ // Lista de todos los mensajes en el chat.
  { sender: 'bot', text: 'Hola 👋 ¡Pregúntame lo que quieras saber!' }
]);
const chatBoxRef = ref(null); // Referencia al DOM del chat para poder hacer scroll.
const isBotReplying = ref(false); // Controla si el bot está procesando una respuesta.

/**
 * Añade un mensaje al chat y asegura que la vista baje hasta el último mensaje.
 */
function addMessageToDisplay(text, sender) {
  messages.value.push({ text, sender });
  // nextTick espera a que el mensaje se renderice en el DOM antes de intentar hacer scroll.
  nextTick(() => {
    if (chatBoxRef.value) {
      chatBoxRef.value.scrollTop = chatBoxRef.value.scrollHeight;
    }
  });
}

/**
 * Busca la respuesta más adecuada para la pregunta del usuario.
 */
function getBotResponse(userText) {
  const lowerUserText = userText.toLowerCase().trim();

  // 1. Prioridad 1: Búsqueda de coincidencia exacta.
  if (qaPairs[lowerUserText]) {
    return qaPairs[lowerUserText];
  }

  // 2. Prioridad 2: Búsqueda por palabras clave.
  let bestMatch = null;
  let highestScore = 0;

  for (const question in qaPairs) {
    const keywords = question.split(' ');
    const score = keywords.reduce((acc, keyword) => lowerUserText.includes(keyword) ? acc + 1 : acc, 0);

    if (score > highestScore) {
      highestScore = score;
      bestMatch = qaPairs[question];
    }
  }

  // 3. Devuelve la mejor opción si supera un umbral, si no, la respuesta por defecto.
  return (bestMatch && highestScore > 1) ? bestMatch : defaultFallbackAnswer;
}

/**
 * Maneja el evento de enviar una pregunta.
 */
function handleAsk() {
  const uq = userQuestion.value.trim();
  if (uq === '' || isBotReplying.value) return; // Evita envíos vacíos o mientras el bot responde.

  addMessageToDisplay(uq, 'user');
  userQuestion.value = '';
  isBotReplying.value = true; // Bloquea el input y botón.

  // Simula un retraso para la respuesta del bot.
  setTimeout(() => {
    const botText = getBotResponse(uq);
    addMessageToDisplay(botText, 'bot');
    isBotReplying.value = false; // Desbloquea el input y botón.
  }, 500);
}
</script>

<style scoped>
/* Contenedor principal del chat */
#qa-area {
  display: flex;
  flex-direction: column;
  height: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f9f9f9;
}

/* Ventana donde se muestran los mensajes */
#chat-box {
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Estilo general para cada burbuja de mensaje */
.message {
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 18px;
  line-height: 1.4;
  word-wrap: break-word;
}

/* Mensajes del BOT (izquierda) */
.bot-message {
  background-color: #dde4ef; /* Color de fondo del mensaje del bot */
  color: #000000;
  border-bottom-left-radius: 4px;
  align-self: flex-start;
}

/* Mensajes del USUARIO (derecha) */
.user-message {
  background-color: #47c1edb7;
  color: rgb(0, 0, 0);
  border-bottom-right-radius: 4px;
  align-self: flex-end;
}

/* Área de input y botón de enviar */
#input-area {
  display: flex;
  padding: 10px;
  border-top: 1px solid #170b42;
  background-color: #b7faf575; /* Color de fondo del input */
}

#user-question {
  flex-grow: 1;
  border: 1px solid #152bd0; /* Color del borde del input DONDE DICE (Escribe tu pregunta...) */
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

#user-question:focus {
  border-color: #15c132; /* Color del borde al hacer foco */
}

#ask-btn {
  background-color: #0d05e2; /* Color del botón */
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

#ask-btn:hover:not(:disabled) {
  background-color: #140ca4; /* Color del botón al pasar el mouse */
}

#ask-btn:disabled {
  background-color: #08c440; /* Color del botón deshabilitado */
  cursor: not-allowed;
}
</style>