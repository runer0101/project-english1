// Archivo: src/views/SimplePastView.vue
<template>
  <div> <ContentCard title="¿Qué es el Pasado Simple?">
      <p>El <strong>Pasado Simple</strong> (Simple Past Tense) se utiliza para hablar de acciones que comenzaron y terminaron en un momento específico del pasado...</p>
      <h3>¿Cuándo usamos el Pasado Simple?</h3>
      <ul>
        <li>Para acciones completadas en el pasado: "I <strong>walked</strong> to school yesterday."</li>
        </ul>
      <h3>Estructura General</h3>
        <h4>Oraciones Afirmativas:</h4>
        <p><code>Sujeto + Verbo en Pasado Simple + Complementos</code></p>
        <div class="example">
            <p><em>They <strong>watched</strong> a movie last night.</em></p>
        </div>
      <h3>Expresiones de Tiempo Comunes</h3>
      <p><code>yesterday, last night/week/month/year, ... ago, in 1990, when I was a child.</code></p>
    </ContentCard>

    <ContentCard title="Verbos Regulares en Pasado Simple">
      <p>Forman su pasado añadiendo <strong>-ed</strong> (o <strong>-d</strong> si el verbo ya termina en -e).</p>
      <h3>Ejemplos de Verbos Regulares Comunes:</h3>
      <VerbTable :verbs="regularVerbsData" />
    </ContentCard>

    <ContentCard title="Verbos Irregulares en Pasado Simple">
      <p>No siguen la regla de "-ed". Sus formas pasadas son únicas y deben memorizarse.</p>
      <h3>Lista de Verbos Irregulares Comunes:</h3>
      <VerbTable :verbs="irregularVerbsData" />
      <div class="tip">
          <p><strong>Consejo:</strong> Usa flashcards y practica con frases para memorizar los verbos irregulares.</p>
      </div>
    </ContentCard>

    <ExerciseSection
        sectionId="practica-pasado-simple"
        title="Práctica: Pasado Simple"
        description="Completa con la forma correcta del Pasado Simple."
        :exercises="simplePastExercisesData"
    />
  </div>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue'; // Nota el '@/' que es un alias a src/
import VerbTable from '@/components/VerbTable.vue';
import ExerciseSection from '@/components/ExerciseSection.vue';
import { regularVerbs, irregularVerbs } from '@/data/verbData.js';
import { simplePastExercises } from '@/data/exerciseData.js'; // Asume que este array existe en exerciseData.js

const regularVerbsData = regularVerbs;
const irregularVerbsData = irregularVerbs;
const simplePastExercisesData = simplePastExercises;
</script>

<style scoped>
/* Estilos específicos SOLO para esta vista, si son necesarios */
/* Por ejemplo, un margen superior para la primera ContentCard si no hay header de vista */
div > .card:first-child {
  margin-top: 0; /* O ajusta según sea necesario */
}
</style>