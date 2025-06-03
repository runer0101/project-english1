// Archivo: src/components/topics/PresentPerfectContent.vue
<template>
  <div class="topic-content-container">
    <ContentCard id="presente-perfecto-intro" title="El Presente Perfecto">
      <p>El Presente Perfecto (Present Perfect Tense) se usa para hablar de acciones que ocurrieron en un tiempo no específico antes de ahora, o acciones que comenzaron en el pasado y continúan en el presente.</p>

      <h3>¿Cuándo usamos el Presente Perfecto?</h3>
      <ul>
        <li>Para experiencias pasadas (sin especificar cuándo): "I <strong>have been</strong> to France." (He estado en Francia.)</li>
        <li>Para cambios que han ocurrido con el tiempo: "The city <strong>has changed</strong> a lot." (La ciudad ha cambiado mucho.)</li>
        <li>Para acciones no terminadas que empezaron en el pasado y continúan en el presente (usualmente con "for" o "since"): "She <strong>has lived</strong> here for three years." (Ella ha vivido aquí por tres años.)</li>
        <li>Para logros: "Scientists <strong>have discovered</strong> a new planet." (Los científicos han descubierto un nuevo planeta.)</li>
        <li>Con adverbios como "just", "yet", "already", "ever", "never":
          <ul>
            <li><em>I have <strong>just</strong> finished my work.</em> (Acabo de terminar mi trabajo.)</li>
            <li><em>I haven't finished my homework <strong>yet</strong>.</em> (No he terminado mi tarea todavía.)</li>
            <li><em>She has <strong>already</strong> left.</em> (Ella ya se ha ido.)</li>
            <li><em>Have you <strong>ever</strong> been to Japan?</em> (¿Alguna vez has estado en Japón?)</li>
            <li><em>I have <strong>never</strong> seen a ghost.</em> (Nunca he visto un fantasma.)</li>
          </ul>
        </li>
      </ul>

      <h3>Estructura General:</h3>
      <p>Se forma con el verbo auxiliar "to have" (conjugado como `have` o `has`) + el **participio pasado** del verbo principal.</p>

      <h4>Oraciones Afirmativas:</h4>
      <p><code>Sujeto + have/has + Participio Pasado + Complementos</code></p>
      <div class="example">
        <p><em>I <strong>have seen</strong> that movie.</em> (Yo he visto esa película.)</p>
        <p><em>She <strong>has finished</strong> her work.</em> (Ella ha terminado su trabajo.)</p>
        <p><em>We <strong>have lived</strong> here for ten years.</em> (Hemos vivido aquí por diez años.)</p>
      </div>

      <h4>Oraciones Negativas:</h4>
      <p><code>Sujeto + have/has + not + Participio Pasado + Complementos</code></p>
      <p>(Contracciones comunes: haven't / hasn't)</p>
      <div class="example">
        <p><em>I <strong>haven't seen</strong> that movie.</em> (No he visto esa película.)</p>
        <p><em>She <strong>hasn't finished</strong> her work.</em> (Ella no ha terminado su trabajo.)</p>
        <p><em>They <strong>have not decided</strong> yet.</em> (Ellos no han decidido todavía.)</p>
      </div>

      <h4>Oraciones Interrogativas:</h4>
      <p><code>Have/Has + Sujeto + Participio Pasado + Complementos + ?</code></p>
      <div class="example">
        <p><em><strong>Have</strong> you <strong>seen</strong> that movie?</em> (¿Has visto esa película?)</p>
        <p><em><strong>Has</strong> she <strong>finished</strong> her work?</em> (¿Ha terminado ella su trabajo?)</p>
        <p><em><strong>Have</strong> they <strong>arrived</strong>?</em> (¿Han llegado ellos?)</p>
      </div>

      <h3>Participios Pasados:</h3>
      <p>Los participios pasados de los **verbos regulares** se forman igual que el pasado simple (añadiendo -ed o -d).</p>
      <p>Ejemplos (Regular):</p>
      <ul>
        <li>work → worked → **worked**</li>
        <li>play → played → **played**</li>
        <li>decide → decided → **decided**</li>
      </ul>
      <p>Los **verbos irregulares** tienen participios pasados únicos que deben memorizarse. Muchos son diferentes tanto de la forma base como del pasado simple.</p>
      <div class="tip">
        <p><strong>¡Importante!</strong> Revisa la lista de verbos irregulares. Es crucial conocer la tercera forma del verbo (Base - Pasado Simple - **Participio Pasado**).</p>
        <p>Ejemplos de participios pasados irregulares comunes:</p>
        <ul>
          <li>be → was/were → **been**</li>
          <li>go → went → **gone**</li>
          <li>eat → ate → **eaten**</li>
          <li>see → saw → **seen**</li>
          <li>do → did → **done**</li>
          <li>take → took → **taken**</li>
          <li>write → wrote → **written**</li>
          <li>speak → spoke → **spoken**</li>
        </ul>
        <p>Puedes usar un componente similar a `VerbTable` para mostrar una lista más completa de participios pasados, añadiendo una columna para el participio.</p>
      </div>
    </ContentCard>

    <ExerciseSection
      sectionId="practica-presente-perfecto"
      title="Práctica: Presente Perfecto"
      description="Completa con la forma correcta del Presente Perfecto."
      :exercises="presentPerfectExercisesData"
    />
  </div>
</template>

<script setup>
// NO necesitas importar defineProps aquí si este componente no las usa directamente.
import ContentCard from '@/components/ContentCard.vue';
import ExerciseSection from '@/components/ExerciseSection.vue';
// Podrías necesitar un VerbTable adaptado para participios si quieres mostrar una tabla grande.

// Asume que tienes este array exportado desde tu archivo de datos
import { presentPerfectExercises } from '@/data/exerciseData.js';

const presentPerfectExercisesData = presentPerfectExercises;

// Si quieres mostrar una tabla de participios aquí, necesitarías importar los datos de verbData.js
// y pasarlos a un componente VerbTable (quizás uno modificado para mostrar la columna de participio).
// import { irregularVerbs, regularVerbs } from '@/data/verbData.js';
// const someVerbsForParticipleTable = irregularVerbs.slice(0, 10); // Ejemplo
</script>

<style scoped>
.topic-content-container > .card,
.topic-content-container > div[id^="practica-"] {
  margin-bottom: 30px;
}
.topic-content-container > .card:last-child,
.topic-content-container > div[id^="practica-"]:last-child {
  margin-bottom: 0;
}
/* Puedes añadir estilos específicos para esta sección si son necesarios */
</style>