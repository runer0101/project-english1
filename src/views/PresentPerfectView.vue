<template>
  <div class="topic-view-container">

    <ContentCard title="Explicación del Presente Perfecto en Inglés">
      <p>El "Presente Perfecto" (Present Perfect Tense) es un tiempo verbal que se utiliza para hablar de acciones o estados que comenzaron en el pasado y tienen una conexión con el presente, o acciones que ocurrieron en un tiempo no específico del pasado pero que tienen relevancia ahora.</p>
      <p>A diferencia del Pasado Simple (que se enfoca en acciones terminadas en un tiempo específico), el Presente Perfecto a menudo se centra en el resultado o la experiencia de una acción, más que en cuándo ocurrió exactamente.</p>

      <div class="video-container">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/KINqahY65LU?si=uuoKFabZLFPkP17Q`"
          title="YouTube video player - Explicación del Presente Perfecto"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
        <p v-if="!youtubeVideoId || youtubeVideoId === 'https://youtu.be/KINqahY65LU?si=uuoKFabZLFPkP17Q'" style="color: red; text-align: center; padding-top: 10px;">
        </p>
      </div>

      <h3>¿Cuándo Usamos el Presente Perfecto?</h3>
      <ul>
        <li>
          <strong>Experiencias de vida (sin especificar cuándo exactamente):</strong> Se usa para hablar de cosas que hemos hecho o no en nuestra vida hasta el momento actual.
          <div class="example"><p><em>I "have visited" Paris.</em> (He visitado París.) - La experiencia es importante, no cuándo ocurrió.</p><p><em>She "has" never tried skiing.</em> (Ella nunca ha intentado esquiar.)</p></div>
        </li>
        <li>
          <strong>Acciones pasadas recientes con un resultado en el presente:</strong> La acción ya terminó, pero su efecto es visible o relevante ahora.
          <div class="example"><p><em>I "have lost" my keys.</em> (He perdido mis llaves. - Resultado: Ahora no puedo entrar).</p><p><em>He "has broken" his arm.</em> (Se ha roto el brazo. - Resultado: Ahora lo tiene enyesado).</p></div>
        </li>
        <li>
          <strong>Cambios que han ocurrido a lo largo del tiempo:</strong> Para describir cómo algo ha cambiado hasta el presente.
          <div class="example"><p><em>The city "has changed" a lot in the last 10 years.</em> (La ciudad ha cambiado mucho en los últimos 10 años.)</p><p><em>You "have grown" since the last time I saw you!</em> (¡Has crecido desde la última vez que te vi!)</p></div>
        </li>
        <li>
          <strong>Acciones o estados no terminados que empezaron en el pasado y continúan en el presente:</strong> Se usa comúnmente con las preposiciones `for` (durante un período de tiempo) y `since` (desde un punto específico en el tiempo).
          <div class="example">
            <p><em>They "have lived" in this house <strong>for</strong> twenty years.</em> (Han vivido en esta casa durante veinte años - y todavía viven aquí).</p>
            <p><em>I "have known" her <strong>since</strong> we were in primary school.</em> (La conozco desde que estábamos en la primaria - y todavía la conozco).</p>
          </div>
        </li>
        <li>
          <strong>Logros o hitos (sin especificar cuándo):</strong>
          <div class="example"><p><em>Scientists "have discovered" new planets.</em> (Los científicos han descubierto nuevos planetas.)</p></div>
        </li>
      </ul>
    </ContentCard>

    <ContentCard title="Cómo Usar el Presente Perfecto: Estructura y Formación">
      <p>El Presente Perfecto se forma utilizando el verbo auxiliar "to have" (conjugado en presente como `have` o `has`) seguido del "Participio Pasado" del verbo principal.</p>
      <p>Participio Pasado = "Tercera columna" de los verbos (ej. go - went - "gone"; work - worked - "worked").</p>

      <h4>1. Oraciones Afirmativas:</h4>
      <p><code>Sujeto + have / has + Participio Pasado + Complementos</code></p>
      <ul>
        <li>Usamos `have` con: I, You, We, They.</li>
        <li>Usamos `has` con: He, She, It.</li>
      </ul>
      <div class="example">
        <p><em>I <strong>have finished</strong> my homework.</em> (He terminado mi tarea.)</p>
        <p><em>She <strong>has traveled</strong> to many countries.</em> (Ella ha viajado a muchos países.)</p>
        <p><em>We <strong>have seen</strong> that movie before.</em> (Hemos visto esa película antes.)</p>
        <p><em>He's (has) been very busy lately.</em> (Él ha estado muy ocupado últimamente.)</p>
      </div>

      <h4>2. Oraciones Negativas:</h4>
      <p><code>Sujeto + have / has + not + Participio Pasado + Complementos</code></p>
      <p>Las contracciones comunes son `haven't` (have not) y `hasn't` (has not).</p>
      <div class="example">
        <p><em>I <strong>have not (haven't) eaten</strong> breakfast yet.</em> (No he desayunado todavía.)</p>
        <p><em>She <strong>has not (hasn't) called</strong> me back.</em> (Ella no me ha devuelto la llamada.)</p>
        <p><em>They "haven't arrived".</em> (Ellos no han llegado.)</p>
      </div>

      <h4>3. Oraciones Interrogativas (Preguntas):</h4>
      <p><code>Have / Has + Sujeto + Participio Pasado + Complementos + ?</code></p>
      <div class="example">
        <p><em><strong>Have</strong> you <strong>finished</strong> your work?</em> (¿Has terminado tu trabajo?)</p>
        <p><em><strong>Has</strong> he <strong>ever been</strong> to Canada?</em> (¿Ha estado él alguna vez en Canadá?)</p>
        <p><em><strong>Have</strong> they <strong>seen</strong> the news?</em> (¿Han visto ellos las noticias?)</p>
      </div>
      <p>Para preguntas con palabras WH- (What, Where, When, Why, Who, How), la estructura es:</p>
      <p><code>Palabra WH- + have / has + Sujeto + Participio Pasado + ...?</code></p>
      <div class="example">
        <p><em><strong>Where have</strong> you <strong>been</strong>?</em> (¿Dónde has estado?)</p>
        <p><em><strong>What have</strong> they <strong>done</strong>?</em> (¿Qué han hecho ellos?)</p>
      </div>

      <h3>Participios Pasados (Recordatorio)</h3>
      <ul>
        <li><strong>Verbos Regulares:</strong> El participio pasado es igual que la forma del Pasado Simple (se añade `-ed` o `-d`).
          <div class="example"><p><em>study → studied → (have) "studied"</em></p><p><em>talk → talked → (have) "talked"</em></p></div>
        </li>
        <li><strong>Verbos Irregulares:</strong> Tienen formas de participio pasado únicas que deben memorizarse.
          <div class="tip">
            <p>Ejemplos (Base – Pasado Simple – "Participio Pasado"):</p>
            <ul>
              <li>be – was/were – "been"</li>
              <li>do – did – "done"</li>
              <li>eat – ate – "eaten"</li>
              <li>go – went – "gone"</li>
              <li>see – saw – "seen"</li>
              <li>take – took – "taken"</li>
              <li>write – wrote – "written"</li>
              <li>speak – spoke – "spoken"</li>
              <li>give – gave – "given"</li>
              <li>make – made – "made"</li>
            </ul>
            <p>Es crucial aprender estas formas. Una buena lista de verbos irregulares te mostrará la forma base, el pasado simple y el participio pasado.</p>
          </div>
        </li>
      </ul>

      <h3>Adverbios Comunes con el Presente Perfecto</h3>
      <p>Ciertos adverbios se usan frecuentemente con el Presente Perfecto para añadir más contexto o matiz:</p>
      <ul>
        <li><strong>ever</strong> (alguna vez - en preguntas): <em>Have you "ever" ridden a horse?</em></li>
        <li><strong>never</strong> (nunca - crea una oración negativa en su significado): <em>I have "never" visited Asia.</em></li>
        <li><strong>already</strong> (ya - para acciones completadas antes de lo esperado, usualmente en afirmativas): <em>She has "already" finished her tasks.</em></li>
        <li><strong>yet</strong> (todavía, aún - en negativas e interrogativas, usualmente al final): <em>I haven't seen him "yet". Has the mail arrived "yet"?</em></li>
        <li><strong>just</strong> (acabar de - para acciones muy recientes): <em>They have "just" left.</em></li>
        <li><strong>recently / lately</strong> (recientemente, últimamente): <em>I have been very busy **lately**.</em></li>
        <li><strong>for</strong> (durante - un período de tiempo): <em>We have lived here "for" three years.</em></li>
        <li><strong>since</strong> (desde - un punto específico en el tiempo): <em>He has worked there "since" 2020.</em></li>
        <li><strong>so far / up to now</strong> (hasta ahora): <em>I have written three emails "so far".</em></li>
      </ul>
    </ContentCard>

    <ExerciseSection
      sectionId="practica-presente-perfecto"
      title="Práctica: Presente Perfecto"
      description="Completa las frases con la forma correcta del Presente Perfecto."
      :exercises="presentPerfectExercisesData"
    />
  </div>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue';
import ExerciseSection from '@/components/ExerciseSection.vue';
// import VerbTable from '@/components/VerbTable.vue'; // Si necesitas una tabla de participios

// Asegúrate de que este array se exporte desde tu archivo src/data/exerciseData.js
import { presentPerfectExercises } from '@/data/exerciseData.js';

// **ACCIÓN NECESARIA:** Reemplaza "ID_VIDEO_PRESENTE_PERFECTO" con el ID real de tu video.
const youtubeVideoId = "ID_VIDEO_PRESENTE_PERFECTO";

const presentPerfectExercisesData = presentPerfectExercises;

console.log('PresentPerfectView.vue: Script setup ejecutándose.');
console.log('ID del video de YouTube para Presente Perfecto:', youtubeVideoId);
console.log('Datos de Ejercicios para Presente Perfecto:', presentPerfectExercisesData);

// Verifica si los componentes se importan
if (!ContentCard) console.error("PresentPerfectView.vue: Componente ContentCard NO CARGADO");
if (!ExerciseSection) console.error("PresentPerfectView.vue: Componente ExerciseSection NO CARGADO");

// Verifica si los datos importados son un array y tienen longitud
if (!Array.isArray(presentPerfectExercisesData) || presentPerfectExercisesData.length === 0) {
    console.warn("PresentPerfectView.vue: presentPerfectExercisesData está vacío o no es un array:", presentPerfectExercisesData);
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
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #f0f0f0;
  margin-top: 20px;
  margin-bottom: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>