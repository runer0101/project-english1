<template>
  <div class="topic-view-container verbs-view">
    <ContentCard title="Verbos en Inglés: Regulares e Irregulares">
      <p>Los verbos son palabras que describen acciones (ej. <em>correr, comer</em>), sucesos (ej. <em>convertirse, suceder</em>) o estados del ser (ej. <em>ser, parecer</em>). Son esenciales en la construcción de oraciones.</p>
      <p>En inglés, para formar tiempos como el Pasado Simple o el Presente Perfecto, es crucial distinguir entre verbos regulares e irregulares.</p>
    </ContentCard>

    <ContentCard title="Verbos Regulares">
      <template v-slot:header-extra>
        <span class="card-subtitle">Forman el pasado con "-ed"</span>
      </template>
      <p>La mayoría de los verbos en inglés son regulares. Esto significa que siguen un patrón predecible para formar su tiempo pasado y su participio pasado: simplemente se les añade el sufijo "-ed" (o "-d" si el verbo ya termina en -e).</p>
      <p>Para los verbos regulares, la forma del "Pasado Simple" y la del "Participio Pasado" son "idénticas".</p>
      <div class="tip">
        <p><strong>Reglas de Ortografía Comunes al añadir "-ed":</strong></p>
        <ul>
          <li>Si el verbo termina en -e: solo se añade -d (ej. <em>love → loved</em>).</li>
          <li>Si el verbo termina en consonante + y: se cambia la -y por -i y se añade -ed (ej. <em>study → studied</em>).</li>
          <li>Si un verbo corto termina en Consonante-Vocal-Consonante (CVC): se duplica la última consonante antes de añadir -ed (ej. <em>stop → stopped</em>).</li>
        </ul>
      </div>
      <h3>Lista de Verbos Regulares Comunes:</h3>
      <div class="table-responsive-wrapper">
        <VerbTable :verbs="regularVerbsData" :show-participle="false" />
      </div>
    </ContentCard>

    <ContentCard title="Verbos Irregulares">
      <template v-slot:header-extra>
        <span class="card-subtitle">Requieren Memorización</span>
      </template>
      <p>Los verbos irregulares no siguen el patrón de añadir "-ed". Sus formas de pasado simple y participio pasado son únicas y deben aprenderse individualmente.</p>
      <p>Muchos de los verbos más usados son irregulares. Es importante conocer tanto su forma de Pasado Simple como su Participio Pasado, ya que este último se usa en los tiempos perfectos (ej. Presente Perfecto) y en la voz pasiva.</p>  
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/psfs816y1yo?si=aVkrUYYuMIl32grs`"
          title="YouTube video player - Explicación del Presente Perfecto"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
        <p v-if="!youtubeVideoId || youtubeVideoId === 'ID'" style="color: red; text-align: center; padding-top: 10px;">
        </p>
      </div>
      <h3>Lista de Verbos Irregulares Comunes:</h3>
      <div class="table-responsive-wrapper">
        <VerbTable :verbs="irregularVerbsData" :show-participle="false" />
      </div>
      <div class="tip">
        <p><strong>Consejo para aprenderlos:</strong> Utiliza flashcards, practica en frases, y agrúpalos por patrones de cambio si es posible (ej. verbos donde las tres formas son iguales, verbos donde el pasado y el participio son iguales, etc.).</p>
      </div>
    </ContentCard>

    </div>
</template>

<script setup>
// Importa los componentes necesarios.
import ContentCard from '@/components/ContentCard.vue';
import VerbTable from '@/components/VerbTable.vue';

// Importa los datos de los verbos.
// Asegúrate de que verbData.js tenga la propiedad 'participle' en cada objeto de verbo.
import { regularVerbs, irregularVerbs } from '@/data/verbData.js';

// Asigna los datos importados a variables para usarlas en el template.
const regularVerbsData = regularVerbs;
const irregularVerbsData = irregularVerbs;

// Mensaje en consola para confirmar que el script se ejecuta.
console.log('VerbsView.vue: Script setup ejecutándose.');
</script>

<style scoped>
/* Estilos específicos para VerbsView.vue */
.verbs-view .topic-view-container > .card {
  margin-bottom: 30px; /* Espacio entre las tarjetas de contenido */
}
.verbs-view .topic-view-container > *:last-child {
  margin-bottom: 0; /* Elimina el margen inferior del último elemento */
}

.card-subtitle {
  display: block; /* Hace que el subtítulo ocupe su propia línea */
  font-size: 0.95em; /* Tamaño de fuente para el subtítulo */
  color: var(--text-color-light, #555555); /* Color de texto más claro */
  margin-top: -12px; /* Ajusta para que quede bien debajo del título h2 del ContentCard */
  margin-bottom: 18px; /* Espacio después del subtítulo */
  font-style: italic; /* Estilo en cursiva */
}

/* Los estilos para .table-responsive-wrapper y las tablas
   deben estar definidos en tu archivo global src/assets/style.css */
</style>