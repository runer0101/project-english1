// Archivo: src/App.vue
<template>
  <div id="vue-app-container">
    <AppHeader /> <AppNav :nav-items="navigationItems" /> <main class="container">
      <ContentCard id="pasado-simple" title="¿Qué es el Pasado Simple?">
        <p>El <strong>Pasado Simple</strong> (Simple Past Tense) se utiliza para hablar de acciones que comenzaron y terminaron en un momento específico del pasado. Es uno de los tiempos verbales más comunes y esenciales en inglés.</p>
        <h3>¿Cuándo usamos el Pasado Simple?</h3>
        <ul>
            <li>Para acciones completadas en el pasado: "I <strong>walked</strong> to school yesterday."</li>
            <li>Para una serie de acciones completadas en el pasado: "She <strong>woke up</strong>, <strong>had</strong> breakfast, and <strong>went</strong> to work."</li>
            <li>Para hábitos o estados pasados: "He <strong>lived</strong> in London for five years."</li>
        </ul>
        <h3>Estructura General</h3>
        <h4>Oraciones Afirmativas:</h4>
        <p><code>Sujeto + Verbo en Pasado Simple + Complementos</code></p>
        <div class="example">
            <p><em>They <strong>watched</strong> a movie last night.</em></p>
            <p><em>She <strong>ate</strong> pizza for lunch.</em></p>
        </div>
        <h4>Oraciones Negativas:</h4>
        <p><code>Sujeto + did not (didn't) + Verbo en Forma Base + Complementos</code></p>
        <div class="tip">
            <p><strong>¡Importante!</strong> En negativas y preguntas, el verbo principal vuelve a su forma base porque "did" ya indica el pasado.</p>
        </div>
        <div class="example">
            <p><em>They <strong>didn't watch</strong> a movie last night.</em></p>
            <p><em>She <strong>didn't eat</strong> pizza for lunch.</em></p>
        </div>
        <p>Verbo "to be": <code>Sujeto + was not (wasn't) / were not (weren't) + Complementos</code></p>
         <div class="example">
            <p><em>I <strong>wasn't</strong> tired.</em></p>
            <p><em>They <strong>weren't</strong> at home.</em></p>
        </div>
        <h4>Oraciones Interrogativas:</h4>
        <p><code>Did + Sujeto + Verbo en Forma Base + Complementos + ?</code></p>
        <div class="example">
            <p><em><strong>Did</strong> they <strong>watch</strong> a movie last night?</em></p>
            <p><em><strong>Did</strong> she <strong>eat</strong> pizza for lunch?</em></p>
        </div>
        <p>Verbo "to be": <code>Was/Were + Sujeto + Complementos + ?</code></p>
        <div class="example">
            <p><em><strong>Was</strong> he tired?</em></p>
            <p><em><strong>Were</strong> they at home?</em></p>
        </div>
        <h3>Expresiones de Tiempo Comunes</h3>
        <p><code>yesterday, last night/week/month/year, ... ago, in 1990, when I was a child.</code></p>
      </ContentCard>

      <ContentCard id="verbos-regulares" title="Verbos Regulares en Pasado Simple">
        <p>Forman su pasado añadiendo <strong>-ed</strong> (o <strong>-d</strong> si el verbo ya termina en -e).</p>
        <h3>Reglas de Formación:</h3>
        <ol>
            <li><strong>General: + ed</strong> (work → worked, play → played)</li>
            <li><strong>Terminan en -e: + d</strong> (like → liked, dance → danced)</li>
            <li><strong>Consonante + y: -y + ied</strong> (study → studied, cry → cried)
                <div class="tip mini-tip">Si es vocal + y: +ed (play → played)</div>
            </li>
            <li><strong>CVC (1 sílaba): Duplicar consonante + ed</strong> (stop → stopped, plan → planned)
                <div class="tip mini-tip">Excepciones: w, x, y (snow → snowed). Si el acento no está en la última sílaba en verbos más largos: (open → opened).</div>
            </li>
        </ol>
        <h3>Ejemplos de Verbos Regulares Comunes:</h3>
        <VerbTable :verbs="regularVerbsData" />
      </ContentCard>

      <ContentCard id="verbos-irregulares" title="Verbos Irregulares en Pasado Simple">
        <p>No siguen la regla de "-ed". Sus formas pasadas son únicas y deben memorizarse.</p>
        <h3>Tipos Comunes de Cambios (Ejemplos):</h3>
        <ul>
            <li><strong>Iguales (Base - Pasado - Participio):</strong> cut - cut, put - put, read - read (/red/)</li>
            <li><strong>Pasado y Participio Iguales:</strong> buy - bought, feel - felt, make - made</li>
            <li><strong>Todos Diferentes:</strong> be - was/were - been, go - went - gone, eat - ate - eaten</li>
            <li><strong>Base y Participio Iguales:</strong> come - came - come, run - ran - run</li>
        </ul>
        <h3>Lista de Verbos Irregulares Comunes:</h3>
        <VerbTable :verbs="irregularVerbsData" />
        <div class="tip">
            <p><strong>Consejo:</strong> Usa flashcards y practica con frases para memorizar los verbos irregulares.</p>
        </div>
      </ContentCard>

      <ExerciseSection />

      <QABox />
    </main>

    <AppFooter /> </div>
</template>

<script setup>
// Importamos todos los componentes que vamos a usar en esta plantilla
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import ContentCard from './components/ContentCard.vue';
import VerbTable from './components/VerbTable.vue';
import ExerciseSection from './components/ExerciseSection.vue';
import QABox from './components/QABox.vue';
import AppFooter from './components/AppFooter.vue';

// Importamos los datos de los verbos desde nuestros archivos de datos
import { regularVerbs, irregularVerbs } from './data/verbData.js';

// Hacemos los datos de los verbos disponibles para la plantilla (para pasarlos como props a VerbTable)
const regularVerbsData = regularVerbs;
const irregularVerbsData = irregularVerbs;

// Definimos los items para el menú de navegación
const navigationItems = [
  { text: 'Inicio', path: '/' }, // NUEVO enlace a la página principal
  { text: 'Pasado Simple', path: '/simple-past' },
  { text: 'Comparativos/Superlativos', path: '/comparatives-superlatives' },
  { text: 'Presente Perfecto', path: '/present-perfect' },
  // Ya no necesitamos enlaces directos a 'practica' aquí si cada tema tiene su sección
  // O podrías tener una página general de 'Ejercicios' si lo deseas.
];
</script>

<style>
/* Estilos globales o específicos de App.vue.
   La mayoría de los estilos ya están en src/assets/style.css,
   así que aquí solo pondríamos estilos que afecten ÚNICAMENTE al layout de App.vue
   o si queremos anular algo muy específico. */

#vue-app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el footer se pegue abajo si la página no tiene mucho contenido */
}

main.container {
  flex-grow: 1; /* Permite que el contenido principal ocupe el espacio disponible verticalmente */
}
</style>