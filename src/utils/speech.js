// src/utils/speech.js

/**
 * Pronuncia un texto dado usando la API de Síntesis de Voz del navegador.
 * @param {string} text - El texto a pronunciar.
 * @param {string} lang - El código de idioma (ej. 'en-US' para inglés americano, 'es-ES' para español de España).
 */
export function speakText(text, lang = 'en-US') {
  if (!text || typeof text !== 'string') {
    console.warn('speakText: No se proporcionó texto válido para hablar.');
    return;
  }

  if (!('speechSynthesis' in window)) {
    console.error('speakText: Tu navegador no soporta la síntesis de voz.');
    alert('Lo siento, tu navegador no soporta la síntesis de voz.');
    return;
  }

  // Cancela cualquier voz que se esté reproduciendo actualmente
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text.trim());
  utterance.lang = lang;
  utterance.rate = 1.0; // Velocidad de habla (0.1 a 10, donde 1 es normal)
  utterance.pitch = 1.0; // Tono (0 a 2, donde 1 es normal)

  
  window.speechSynthesis.speak(utterance);
}

// Opcional: Puedes añadir más funciones aquí si las necesitas,
// por ejemplo, para listar voces disponibles, etc.