// Archivo: src/components/VerbTable.vue
<template>
  <table class="verb-table-component">
    <thead>
      <tr>
        <th>Forma Base</th>
        <th>Pasado Simple</th>
        <th v-if="showParticipleColumn">Participio Pasado</th>
        <th>Traducción <span class="lang-hint">(Esp)</span></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="verb in verbs" :key="verb.base">
        <td @click="speak(verb.base, 'en-US')" class="clickable-text">{{ verb.base }} <span class="speaker-icon">🔈</span></td>
        <td @click="speak(verb.past, 'en-US')" class="clickable-text">{{ verb.past }} <span class="speaker-icon">🔈</span></td>
        <td>{{ verb.translation }}</td>
       
      </tr>
      <tr v-if="!verbs || verbs.length === 0">
        <td :colspan="showParticipleColumn ? 4 : 3" class="no-verbs-message">
          No hay verbos para mostrar.
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from 'vue';

// NO importes defineProps
const props = defineProps({
  verbs: { type: Array, required: true, default: () => [] },
  showParticiple: { type: Boolean, default: false }
});

const showParticipleColumn = computed(() => props.showParticiple);

function speak(textToSpeak, lang) {
  if (textToSpeak && textToSpeak !== '-') {
    // Para el pasado de "be" (was / were), podrías querer reproducir ambas o una.
    // Aquí un ejemplo simple, reproduce la primera palabra si hay un '/'
    let text = textToSpeak.includes('/') ? textToSpeak.split('/')[0].trim() : textToSpeak;
    // Para "read (/red/)", quitamos la anotación de pronunciación
    text = text.replace(/\s*\(\/rɛd\/\)\s*/, '').trim();
    speakText(text, lang);
  }
}
function speakText(text, lang) {
  if (!window.speechSynthesis) return;
  const utter = new window.SpeechSynthesisUtterance(text);
  utter.lang = lang;
  window.speechSynthesis.speak(utter);
  console.log(`Hablando: "${text}" en ${lang}`);
  utter.onend = () => {
    console.log(`Terminó de hablar: "${text}"`);
  };
  utter.onerror = (event) => {
    console.error(`Error al hablar: "${text}"`, event);
  };
  utter.onstart = () => {
    console.log(`Empezando a hablar: "${text}"`);
  };

  }
</script>

<style scoped>
.clickable-text {
  cursor: pointer;
  position: relative; /* Para posicionar el ícono de altavoz si es necesario */
}
.clickable-text:hover {
  background-color: var(--primary-color-light, #e0f2fe); /* Feedback visual */
  color: var(--primary-color-dark, #3c7ddb);
}
.speaker-icon {
  font-size: 0.8em;
  margin-left: 5px;
  opacity: 0.6;
  display: inline-block; /* Para asegurar que se muestre */
}
.clickable-text:hover .speaker-icon {
  opacity: 1;
}
.lang-hint {
  font-size: 0.7em;
  color: var(--text-color-light);
  font-style: italic;
}
/* ... otros estilos ... */
</style>