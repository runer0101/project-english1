// Archivo: src/components/topics/ComparativesSuperlativesContent.vue
<template>
  <div class="topic-content-container">
    <ContentCard id="comparativos-intro" title="Comparativos y Superlativos">
      <p>Los adjetivos comparativos se usan para comparar diferencias entre dos objetos (<em>larger, smaller, faster, higher</em>).</p>
      <p>Los adjetivos superlativos se usan para describir un objeto que está en el extremo superior o inferior de una cualidad (<em>the largest, the smallest, the fastest, the highest</em>).</p>

      <h3>Reglas Generales para Formar Comparativos y Superlativos:</h3>
      <h4>Adjetivos de una sílaba:</h4>
      <ul>
        <li><strong>Comparativo:</strong> Añadir "-er" (ej. tall → taller, old → older).</li>
        <li><strong>Superlativo:</strong> Añadir "-est" (ej. tall → tallest, old → oldest).</li>
        <li>Si termina en -e: solo añadir -r o -st (ej. large → larger, largest).</li>
        <li>Si termina en Consonante-Vocal-Consonante (CVC): duplicar la última consonante y añadir -er/-est (ej. big → bigger, biggest).</li>
      </ul>

      <h4>Adjetivos de dos sílabas:</h4>
      <ul>
        <li>Si terminan en -y: cambiar -y por -i y añadir -er/-est (ej. happy → happier, happiest).</li>
        <li>Otros adjetivos de dos sílabas (especialmente los que no terminan en -y, -er, -le, -ow): generalmente usan "more" para comparativo y "the most" para superlativo (ej. modern → more modern, the most modern; peaceful → more peaceful, the most peaceful).</li>
      </ul>

      <h4>Adjetivos de tres o más sílabas:</h4>
      <ul>
        <li><strong>Comparativo:</strong> Usar "more" + adjetivo (ej. important → more important).</li>
        <li><strong>Superlativo:</strong> Usar "the most" + adjetivo (ej. important → the most important).</li>
      </ul>

      <h3>Comparativos y Superlativos Irregulares Comunes:</h3>
      <table>
        <thead>
          <tr>
            <th>Adjetivo (Positivo)</th>
            <th>Comparativo</th>
            <th>Superlativo</th>
            <th>Traducción (Positivo)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>good</td><td>better</td><td>the best</td><td>bueno</td></tr>
          <tr><td>bad</td><td>worse</td><td>the worst</td><td>malo</td></tr>
          <tr><td>little</td><td>less</td><td>the least</td><td>poco</td></tr>
          <tr><td>much / many</td><td>more</td><td>the most</td><td>mucho(s)</td></tr>
          <tr><td>far</td><td>farther / further</td><td>the farthest / the furthest</td><td>lejos</td></tr>
        </tbody>
      </table>
      <div class="example">
        <p><em>My house is <strong>bigger</strong> than yours.</em> (Mi casa es más grande que la tuya.)</p>
        <p><em>This is the <strong>most expensive</strong> car in the world.</em> (Este es el coche más caro del mundo.)</p>
        <p><em>She is <strong>happier</strong> now.</em> (Ella es más feliz ahora.)</p>
        <p><em>He is a <strong>better</strong> player than I am.</em> (Él es mejor jugador que yo.)</p>
      </div>
      <div class="tip">
        <p><strong>Recuerda:</strong> Usamos "than" después de un adjetivo comparativo para introducir el segundo término de la comparación. Para los superlativos, a menudo usamos "the" antes del adjetivo y "in" u "of" después.</p>
      </div>
    </ContentCard>

    <ExerciseSection
      sectionId="practica-comparativos-superlativos"
      title="Práctica: Comparativos y Superlativos"
      description="Forma el comparativo o superlativo correcto."
      :exercises="comparativeSuperlativeExercisesData"
    />
  </div>
</template>

<script setup>
// NO necesitas importar defineProps aquí si este componente no las usa directamente.
// Los componentes hijos (ContentCard, ExerciseSection) manejan sus propias props.
import ContentCard from '@/components/ContentCard.vue';
import ExerciseSection from '@/components/ExerciseSection.vue';

// Asume que tienes estos arrays exportados desde tu archivo de datos
import { comparativeExercises, superlativeExercises } from '@/data/exerciseData.js';

// Combina los ejercicios o usa solo los que necesites
const comparativeSuperlativeExercisesData = [...comparativeExercises, ...superlativeExercises];
</script>

<style scoped>
.topic-content-container > .card,
.topic-content-container > div[id^="practica-"] { /* Para apuntar al div de ExerciseSection si no es un .card */
  margin-bottom: 30px;
}
.topic-content-container > .card:last-child,
.topic-content-container > div[id^="practica-"]:last-child {
  margin-bottom: 0;
}

/* Puedes añadir estilos específicos para esta sección si son necesarios */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  margin-bottom: 15px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2; /* O el color de tus encabezados de tabla global */
}
</style>