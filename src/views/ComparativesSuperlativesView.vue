<template>
  <div class="topic-view-container">
    <ContentCard title="Introducción a Comparativos y Superlativos">
          <p>Los adjetivos en inglés son palabras que describen o modifican sustantivos y pronombres, dándonos más información sobre sus cualidades (ej. <em>a <strong>tall</strong> building, a <strong>fast</strong> car, an <strong>interesting</strong> book</em>).</p>
          <p>Cuando queremos comparar estas cualidades entre dos o más elementos, los adjetivos cambian su forma. Estas formas especiales se conocen como "comparativos" y "superlativos".</p>
    
          <h4>¿Para qué sirven?</h4>
          <ul>
            <li>Usamos formas "comparativas" para contrastar dos elementos, indicando si uno posee una cualidad en mayor, menor o igual medida que el otro. Responden a preguntas como: "¿Cuál es más alto?" o "¿Es este más caro que aquel?".
              <div class="example mini-example">
                <p><em>My house is <strong>larger than</strong> yours.</em> (Mi casa es más grande que la tuya.)</p>
              </div>
            </li>
            <li>Usamos formas "superlativas" para destacar un elemento de un grupo (de tres o más), señalando que posee una cualidad en el grado más alto (el más) o más bajo (el menos). Responden a preguntas como: "¿Cuál es el más rápido de todos?" o "¿Quién es la persona más inteligente aquí?".
              <div class="example mini-example">
                <p><em>This is <strong>the tallest</strong> building in the city.</em> (Este es el edificio más alto de la ciudad.)</p>
              </div>
            </li>
          </ul>
    
          <h4>Transformación Básica de un Adjetivo:</h4>
          <p>Veamos cómo un adjetivo simple puede cambiar:</p>
          <div class="table-responsive-wrapper intro-table-wrapper"> 
            <table class="intro-adj-table">
              <thead>
                <tr>
                  <th>Forma Base</th>
                  <th>Comparativo (-er / more)</th>
                  <th>Superlativo (the -est / the most)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Old</strong> (viejo)</td>
                  <td>Old<strong>er</strong> (más viejo)</td>
                  <td><strong>The</strong> old<strong>est</strong> (el más viejo)</td>
                </tr>
                <tr>
                  <td><strong>Expensive</strong> (caro)</td>
                  <td><strong>More</strong> expensive (más caro)</td>
                  <td><strong>The most</strong> expensive (el más caro)</td>
                </tr>
                 <tr>
                  <td><strong>Happy</strong> (feliz)</td>
                  <td>Happ<strong>ier</strong> (más feliz)</td>
                  <td><strong>The</strong> happ<strong>iest</strong> (el más feliz)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Dominar los comparativos y superlativos te permitirá expresarte con mayor precisión y riqueza, haciendo tus descripciones mucho más vívidas y efectivas en inglés.</p>
          <p>A continuación, exploraremos en detalle cómo se forman estas estructuras y cómo usarlas correctamente.</p>
          
    </ContentCard>

    <ContentCard title="Los Comparativos: Formación y Uso">
      <div class="video-container" v-if="youtubeVideoId && youtubeVideoId !== 'https://youtu.be/eA46BhGhp9Q?si=CH97PDs7ib3TKYR5'">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/eA46BhGhp9Q?si=CH97PDs7ib3TKYR5`"
          title="YouTube video player - Explicación del Pasado Simple"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
      <p>Los adjetivos comparativos se utilizan para comparar las diferencias entre dos sustantivos (personas, lugares, cosas, etc.). Indican que uno tiene más (o menos) de una cualidad que el otro.</p>
      
      <h3>Formación de Adjetivos Comparativos:</h3>
      <h4>1. Adjetivos Cortos (Una sílaba, o dos sílabas terminados en -y, -er, -le, -ow):</h4>
      <p>Generalmente, se añade el sufijo `-er` al final del adjetivo.</p>
      <ul>
        <li><strong>Regla General:</strong> Adjetivo + `-er`
          <div class="example"><p><em>tall (alto) → tall<strong>er</strong> (más alto)</em></p><p><em>fast (rápido) → fast<strong>er</strong> (más rápido)</em></p></div>
        </li>
        <li><strong>Terminados en `-e` muda:</strong> Solo se añade `-r`.
          <div class="example"><p><em>large (grande) → larg<strong>er</strong> (más grande)</em></p><p><em>nice (agradable) → nic<strong>er</strong> (más agradable)</em></p></div>
        </li>
        <li><strong>Terminados en Consonante + Vocal + Consonante (CVC):</strong> Se duplica la última consonante y se añade `-er`.
          <div class="example"><p><em>big (grande) → big<strong>ger</strong> (más grande)</em></p><p><em>hot (caliente) → hot<strong>ter</strong> (más caliente)</em></p></div>
        </li>
        <li><strong>Terminados en Consonante + `-y`:</strong> Se cambia la `-y` por `-i` y se añade `-er`.
          <div class="example"><p><em>happy (feliz) → happ<strong>ier</strong> (más feliz)</em></p><p><em>easy (fácil) → eas<strong>ier</strong> (más fácil)</em></p></div>
        </li>
      </ul>

      <h4>2. Adjetivos Largos (Dos sílabas no incluidas arriba, o tres o más sílabas):</h4>
      <p>Se utiliza la palabra `more` (más) o `less` (menos) antes del adjetivo (el adjetivo no cambia).</p>
      <div class="example">
        <p><em>beautiful (hermoso) → <strong>more</strong> beautiful (más hermoso) / <strong>less</strong> beautiful (menos hermoso)</em></p>
        <p><em>expensive (caro) → <strong>more</strong> expensive (más caro) / <strong>less</strong> expensive (menos caro)</em></p>
        <p><em>intelligent (inteligente) → <strong>more</strong> intelligent (más inteligente) / <strong>less</strong> intelligent (menos inteligente)</em></p>
      </div>
      
      <h4>3. Comparativos Irregulares:</h4>
      <p>Algunos adjetivos tienen formas comparativas completamente diferentes:</p>
      <ul>
        <li><em>good (bueno) → <strong>better</strong> (mejor)</em></li>
        <li><em>bad (malo) → <strong>worse</strong> (peor)</em></li>
        <li><em>far (lejos) → <strong>farther / further</strong> (más lejos)</em></li>
        <li><em>little (poco) → <strong>less</strong> (menos)</em></li>
        <li><em>many / much (mucho/s) → <strong>more</strong> (más)</em></li>
      </ul>
      <p>Puedes ver una tabla más completa de estos en la sección de superlativos o en una tabla dedicada si lo prefieres.</p>
    </ContentCard>

    <ContentCard title="Cómo Usar Comparativos con 'Than'">
      <div class="video-container" v-if="youtubeVideoId && youtubeVideoId !== 'https://youtu.be/JyCTWpX3ZtY?si=4_AZlGLOaUmkcwVe'">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/JyCTWpX3ZtY?si=4_AZlGLOaUmkcwVe`"
          title="YouTube video player - Explicación del Pasado Simple"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
      <p>Cuando comparamos dos elementos directamente en una oración, usualmente usamos la palabra `than` (que) después del adjetivo comparativo.</p>
      <p>Estructura: `Elemento A + verbo + adjetivo comparativo + than + Elemento B`</p>
      <h3>Ejemplos con "Than":</h3>
      <div class="example">
        <p><em>My car is <strong>faster than</strong> your car.</em> (Mi coche es más rápido que tu coche.)</p>
        <p><em>She is <strong>taller than</strong> her brother.</em> (Ella es más alta que su hermano.)</p>
        <p><em>This book is <strong>more interesting than</strong> the movie.</em> (Este libro es más interesante que la película.)</p>
        <p><em>London is <strong>more expensive than</strong> my city.</em> (Londres es más caro que mi ciudad.)</p>
        <p><em>His new job is <strong>better than</strong> his old one.</em> (Su nuevo trabajo es mejor que el anterior.)</p>
      </div>
      <div class="tip">
        <p><strong>Nota sobre pronombres después de "than":</strong> En inglés formal, después de "than" se usa un pronombre sujeto seguido de un verbo auxiliar (ej. "She is taller than I <strong>am</strong>."). En inglés informal, es común usar un pronombre objeto (ej. "She is taller than <strong>me</strong>."). Ambas formas son aceptadas en diferentes contextos.</p>
      </div>
      <div class="video-container" v-if="youtubeVideoId && youtubeVideoId !== 'https://youtu.be/WAcZJ-WafgU?si=W4eZANYid5zwQs5c'">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/WAcZJ-WafgU?si=W4eZANYid5zwQs5c`"
          title="YouTube video player - Explicación del Pasado Simple"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
    </ContentCard>

    <ContentCard title="Los Superlativos: Formación y Uso">
       <div class="video-container" v-if="youtubeVideoId && youtubeVideoId !== 'https://youtu.be/a-GEGiqDnKY?si=OylGKGLt-AW7UUWE'">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/a-GEGiqDnKY?si=OylGKGLt-AW7UUWE`"
          title="YouTube video player - Explicación del Pasado Simple"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
      <p>Los adjetivos superlativos se utilizan para describir un objeto, persona o lugar que está en el extremo superior o inferior de una cualidad dentro de un grupo de tres o más. Indican el grado máximo.</p>
      <p>Generalmente se usan con el artículo `the` antes del adjetivo superlativo y, a menudo, seguidos de preposiciones como `in` (para lugares o grupos) u `of` (para un conjunto de cosas o un período de tiempo).</p>

      <h3>Formación de Adjetivos Superlativos:</h3>
      <h4>1. Adjetivos Cortos:</h4>
      <p>Generalmente, se añade `the` + adjetivo + `-est`.</p>
      <ul>
        <li><strong>Regla General:</strong> `the` + Adjetivo + `-est`
          <div class="example"><p><em>tall → <strong>the</strong> tall<strong>est</strong> (el más alto)</em></p></div>
        </li>
        <li>Las mismas reglas ortográficas que para los comparativos cortos aplican (terminados en `-e`, CVC, `-y`).
          <div class="example">
            <p><em>large → <strong>the</strong> larg<strong>est</strong></em></p>
            <p><em>big → <strong>the</strong> big<strong>gest</strong></em></p>
            <p><em>happy → <strong>the</strong> happ<strong>iest</strong></em></p>
          </div>
        </li>
      </ul>

      <h4>2. Adjetivos Largos:</h4>
      <p>Se utiliza `the most` (el/la más) o `the least` (el/la menos) antes del adjetivo.</p>
      <div class="example">
        <p><em>beautiful → <strong>the most</strong> beautiful (el más hermoso) / <strong>the least</strong> beautiful (el menos hermoso)</em></p>
        <p><em>expensive → <strong>the most</strong> expensive (el más caro) / <strong>the least</strong> expensive (el menos caro)</em></p>
      </div>

      <h4>3. Superlativos Irregulares:</h4>
      <p>Corresponden a los comparativos irregulares:</p>
      <table class="irregular-adj-table">
        <thead>
          <tr><th>Adjetivo</th><th>Comparativo</th><th>Superlativo</th></tr>
        </thead>
        <tbody>
          <tr><td>good</td><td>better</td><td><strong>the best</strong></td></tr>
          <tr><td>bad</td><td>worse</td><td><strong>the worst</strong></td></tr>
          <tr><td>little</td><td>less</td><td><strong>the least</strong></td></tr>
          <tr><td>much / many</td><td>more</td><td><strong>the most</strong></td></tr>
          <tr><td>far</td><td>farther / further</td><td><strong>the farthest / the furthest</strong></td></tr>
        </tbody>
      </table>
      
      <h3>Ejemplos de Superlativos en Oraciones:</h3>
      <div class="example">
        <p><em>Mount Everest is <strong>the highest</strong> mountain <strong>in</strong> the world.</em> (El Monte Everest es la montaña más alta del mundo.)</p>
        <p><em>This is <strong>the most delicious</strong> cake I have ever tasted.</em> (Este es el pastel más delicioso que he probado.)</p>
        <p><em>She is <strong>the smartest</strong> student <strong>in</strong> our class.</em> (Ella es la estudiante más inteligente de nuestra clase.)</p>
        <p><em>It was <strong>the worst</strong> day <strong>of</strong> my life.</em> (Fue el peor día de mi vida.)</p>
        <p><em>This is <strong>the least</strong> important problem.</em> (Este es el problema menos importante.)</p>
      </div>
       <div class="video-container" v-if="youtubeVideoId && youtubeVideoId !== 'https://youtu.be/fJnnhyDM6f4?si=1mXBt7SMQsFS8mn4'">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/fJnnhyDM6f4?si=1mXBt7SMQsFS8mn4`"
          title="YouTube video player - Explicación del Pasado Simple"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
    </ContentCard>

    <ExerciseSection
      sectionId="practica-comparativos-superlativos"
      title="Práctica: Comparativos y Superlativos"
      description="Demuestra tu conocimiento sobre comparativos y superlativos."
      :exercises="comparativeSuperlativeExercisesData"
    />
  </div>
</template>

<script setup>
import ContentCard from '@/components/ContentCard.vue';
import ExerciseSection from '@/components/ExerciseSection.vue';
// VerbTable no se usa directamente aquí, la tabla de irregulares es HTML simple por ahora.

// Asegúrate de que estos se exporten desde exerciseData.js
import { comparativeExercises, superlativeExercises } from '@/data/exerciseData.js';

// **ACCIÓN NECESARIA:** Reemplaza "ID_VIDEO_COMPARATIVOS" con el ID real de tu video de YouTube.
const youtubeVideoId = "ID_VIDEO_COMPARATIVOS"; 

const comparativeSuperlativeExercisesData = [...comparativeExercises, ...superlativeExercises];

console.log('ComparativesSuperlativesView.vue: Script setup ejecutándose.');
</script>

<style scoped>
.topic-view-container > .card,
.topic-view-container > .exercise-section-wrapper { /* Si ExerciseSection usa esta clase */
  margin-bottom: 30px;
}
.topic-view-container > *:last-child {
  margin-bottom: 0;
}

.video-container {
  position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;
  max-width: 100%; background: #f0f0f0; margin: 20px 0 25px 0;
  border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.video-container iframe {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;
}

/* Estilos para la tabla de adjetivos irregulares si no los tienes globales */
table.irregular-adj-table { /* Damos una clase específica para no afectar a otras tablas */
  width: 100%;
  max-width: 600px; /* Limita el ancho de esta tabla específica */
  border-collapse: collapse;
  margin: 20px auto; /* Centra la tabla si es más estrecha */
  font-size: 0.95em;
}
table.irregular-adj-table th, 
table.irregular-adj-table td {
  border: 1px solid #e0e0e0;
  padding: 10px 12px;
  text-align: left;
}
table.irregular-adj-table th {
  background-color: #f7f7f7;
  font-weight: 600;
}
</style>