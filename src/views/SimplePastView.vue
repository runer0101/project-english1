// Archivo: src/views/SimplePastView.vue
<template>
  <div class="topic-view-container">
    <ContentCard title="¿Qué es el Pasado Simple?">
      <p>El <strong>Pasado Simple</strong> (Simple Past Tense) se utiliza para hablar de acciones que comenzaron y terminaron en un momento específico del pasado. Es uno de los tiempos verbales más comunes y esenciales en inglés.</p>

      <div class="video-container" v-if="youtubeVideoId && youtubeVideoId !== 'https://youtu.be/moYDA4jbPy4?si=0KnyMJCJ8Zjl5mmq'">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/moYDA4jbPy4?si=0KnyMJCJ8Zjl5mmq`"
          title="YouTube video player - Explicación del Pasado Simple"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
      <p v-if="!youtubeVideoId || youtubeVideoId === 'ID_VIDEO_PASADO_SIMPLE'" class="video-placeholder-message">
      </p>

      <h3>¿Cuándo Usamos el Pasado Simple?</h3>
      <ul>
          <li>Para acciones completadas en el pasado: "I <strong>walked</strong> to school yesterday."</li>
          <li>Para una serie de acciones completadas en el pasado: "She <strong>woke up</strong>, <strong>had</strong> breakfast, and <strong>went</strong> to work."</li>
          <li>Para hábitos o estados pasados: "He <strong>lived</strong> in London for five years."</li>
          <li>Para narraciones o contar historias en pasado.</li>
      </ul>
      <h3>Expresiones de Tiempo Comunes con el Pasado Simple</h3>
      <p>Estas expresiones nos ayudan a situar la acción en el pasado:</p>
      <ul>
        <li><code>yesterday</code> (ayer)</li>
        <li><code>last night</code> (anoche), <code>last week</code> (la semana pasada), etc.</li>
        <li><code>... ago</code> (hace ...): <code>two days ago</code> (hace dos días)</li>
        <li><code>in 1990</code>, <code>in July</code></li>
        <li><code>on Monday</code> (el lunes pasado)</li>
        <li><code>when I was a child</code> (cuando era niño/a)</li>
      </ul>
    </ContentCard>

    <ContentCard title="Formulación del Pasado Simple">
      <h4>Verbos Regulares</h4>
      <p>La mayoría de los verbos forman su pasado simple añadiendo <strong>-ed</strong>.</p>
      <div class="tip">
        <p>Consulta la lista detallada y reglas de ortografía en la sección de <router-link to="/verbs">'Verbos'</router-link>.</p>
      </div>
      <h4>Verbos Irregulares</h4>
      <p>Tienen formas de pasado únicas que deben memorizarse.</p>
      <div class="tip">
        <p>Consulta la lista detallada en la sección de <router-link to="/verbs">'Verbos'</router-link>.</p>
      </div>
      <div class="video-container" v-if="youtubeVideoId && youtubeVideoId !== 'https://youtu.be/GYGVWF_j2LU?si=rJhCK9BDOJp0TJQu'">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/GYGVWF_j2LU?si=rJhCK9BDOJp0TJQu`"
          title="YouTube video player - Explicación del Pasado Simple"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
    </ContentCard>

    <ContentCard title="Oraciones Afirmativas en Pasado Simple">
      <p>Estructura: <code>Sujeto + Verbo en Pasado Simple + Complementos</code></p>
      <div class="example">
        <p><em>I <strong>worked</strong> hard yesterday.</em> (Verbo Regular)</p>
        <p><em>She <strong>went</strong> to the cinema last night.</em> (Verbo Irregular)</p>
      </div>
      <h4>Verbo "to be" en Pasado (was/were):</h4>
      <div class="example">
        <p><em>I/He/She/It <strong>was</strong> happy.</em></p>
        <p><em>You/We/They <strong>were</strong> at home.</em></p>
      </div>
    </ContentCard>

    <ContentCard title="Oraciones Negativas en Pasado Simple">
      <p>Estructura: <code>Sujeto + did not (didn't) + Verbo en Forma Base + Complementos</code></p>
      <div class="tip"><p>El verbo principal va en su forma base porque `did` ya indica el pasado.</p></div>
      <div class="example">
        <p><em>I <strong>didn't work</strong> yesterday.</em></p>
        <p><em>She <strong>didn't go</strong> to the cinema.</em></p>
      </div>
      <h4>Negación con "to be" (was/were):</h4>
      <p>Estructura: <code>Sujeto + was/were + not + Complementos</code> (Contracciones: `wasn't`, `weren't`)</p>
      <div class="example">
        <p><em>I <strong>wasn't</strong> sad.</em></p>
        <p><em>They <strong>weren't</strong> at home.</em></p>
      </div>
    </ContentCard>

    <ContentCard title="Formulación de Preguntas en Pasado Simple">
       <div class="video-container" v-if="youtubeVideoId && youtubeVideoId !== 'https://youtu.be/LoY8Rd_PLSY?si=fv6T3uJ_eEXBj6nk'">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/LoY8Rd_PLSY?si=fv6T3uJ_eEXBj6nk`"
          title="YouTube video player - Explicación del Pasado Simple"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
      <p>Estructura: <code>Did + Sujeto + Verbo en Forma Base + Complementos + ?</code></p>
      <div class="example">
        <p><em><strong>Did</strong> you <strong>work</strong> yesterday?</em></p>
        <p><em><strong>Where did</strong> she <strong>go</strong> last night?</em> (Con palabra WH-)</p>
      </div>
      <h4>Preguntas con "to be" (was/were):</h4>
      <p>Estructura: <code>Was/Were + Sujeto + Complementos + ?</code></p>
      <div class="example">
        <p><em><strong>Was</strong> he happy?</em></p>
        <p><em><strong>Why were</strong> they late?</em> (Con palabra WH-)</p>
      </div>
    </ContentCard>

    <ExerciseSection
      sectionId="practica-pasado-simple-view"
      title="Práctica General: Pasado Simple"
      description="Pon a prueba tu conocimiento del Pasado Simple."
      :exercises="simplePastExercisesData"
    />
  </div>
</template>

<script setup>
// NO importes defineProps aquí si este componente no las recibe directamente.
import ContentCard from '../components/ContentCard.vue';
import ExerciseSection from '../components/ExerciseSection.vue';

// Ya no necesitamos importar los datos de verbos aquí directamente si las listas principales están en VerbsView.vue
// import { regularVerbs, irregularVerbs } from '@/data/verbData.js';
import { simplePastExercises } from '../data/exerciseData.js';

// --- ACCIÓN MUY IMPORTANTE ---
// Reemplaza "ID_VIDEO_PASADO_SIMPLE" con el ID real de 11 caracteres de tu video de YouTube.
// Por ejemplo, si la URL de tu video es https://www.youtube.com/embed/TU4AmYBgk_M, el ID es 'dQw4w9WgXcQ'.
const youtubeVideoId = "ID_VIDEO_PASADO_SIMPLE";
// --- FIN DE ACCIÓN IMPORTANTE ---

const simplePastExercisesData = simplePastExercises;

// No es necesario 'computed' si construyes la URL directamente en el template como:
// :src="`https://www.youtube.com/watch?v=TU4AmYBgk_M{youtubeVideoId}`"

console.log('SimplePastView.vue: Script setup ejecutándose.');
if (youtubeVideoId && youtubeVideoId !== "ID_VIDEO_PASADO_SIMPLE") {
  console.log('ID del video de YouTube para Pasado Simple:', youtubeVideoId);
} else {
  console.warn('SimplePastView.vue: No se ha definido un youtubeVideoId válido o se está usando el placeholder.');
}
</script>

<style scoped>
.topic-view-container > .card,
.topic-view-container > .exercise-section-wrapper {
  margin-bottom: 30px;
}
.topic-view-container > *:last-child {
  margin-bottom: 0;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* Proporción 16:9 para videos estándar de YouTube */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #e9ecef; /* Un color de fondo mientras carga o si hay error */
  margin-top: 20px;
  margin-bottom: 25px;
  border-radius: var(--border-radius-md, 8px);
  box-shadow: var(--shadow-md, 0 4px 12px rgba(0,0,0,0.1));
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.video-placeholder-message {
  color: var(--text-color-light, #6c757d);
  text-align: center;
  padding: 20px;
  font-style: italic;
  font-size: 0.9em;
  position: absolute; /* Para centrarlo si el iframe no carga */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}

/* Estilos para que los :deep(code) no den problemas si no están en style.css global */
.topic-view-container :deep(code) {
  background-color: rgba(0,0,0,0.04); /* Ajusta al tema de tu app */
  padding: 0.2em 0.45em;
  margin: 0 0.1em;
  font-size: 0.875em;
  border-radius: var(--border-radius-sm, 0.25rem);
  font-family: var(--font-code, monospace);
  color: #d63384; /* O el color que prefieras para el código */
  word-break: break-word;
}
</style>