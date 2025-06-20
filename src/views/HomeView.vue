<template>
  <div class="home-view">
    <section class="hero-section">
      <div class="hero-content container"> 
        <div class="hero-text">
          <h1 class="app-main-title">Bienvenido a tu Guía Interactiva de Inglés</h1>
          <p class="subtitle-enhanced">
            Domina la gramática inglesa con explicaciones claras, ejemplos prácticos y ejercicios interactivos diseñados para ti.
          </p>
          <router-link to="/verbs" class="btn btn-hero-cta">Explorar Temas</router-link>
        </div>
        <div class="hero-image-container">
          <img
            src="/images/imagen1.jpg"
            alt="Aprendiendo Inglés - Ilustración Principal"
            class="home-banner-image"
            @error="onImageError"
            v-if="!imageError"
          >
          <p v-if="imageError" class="image-error-message">
            (Imagen de bienvenida no encontrada. Asegúrate de que 'imagen1.jpg' esté en 'public/images/'.)
          </p>
        </div>
      </div>
    </section>

    <section class="topics-navigation container"> 
      <h2 class="section-title">Elige un Tema para Empezar</h2>
      <div class="topic-cards-container">
        <router-link to="/verbs" class="topic-card">
          <div class="topic-card-icon">📖</div>
          <div class="topic-card-content">
            <h3>Verbos (Reg. e Irreg.)</h3>
            <p>Listas y formación de verbos esenciales.</p>
          </div>
          <div class="topic-card-cta">Ver Tema <span class="arrow">→</span></div>
        </router-link>

        <router-link to="/simple-past" class="topic-card">
          <div class="topic-card-icon">🕰️</div>
          <div class="topic-card-content">
            <h3>Pasado Simple</h3>
            <p>Habla sobre acciones completadas.</p>
          </div>
          <div class="topic-card-cta">Ver Tema <span class="arrow">→</span></div>
        </router-link>

        <router-link to="/comparatives-superlatives" class="topic-card">
          <div class="topic-card-icon">⚖️</div>
          <div class="topic-card-content">
            <h3>Comparativos y Superlativos</h3>
            <p>Compara y destaca cualidades.</p>
          </div>
          <div class="topic-card-cta">Ver Tema <span class="arrow">→</span></div>
        </router-link>

        <router-link to="/present-perfect" class="topic-card">
          <div class="topic-card-icon">⏳</div>
          <div class="topic-card-content">
            <h3>Presente Perfecto</h3>
            <p>Conecta el pasado con tus experiencias presentes.</p>
          </div>
          <div class="topic-card-cta">Ver Tema <span class="arrow">→</span></div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// Importa 'ref' de Vue para crear variables reactivas.
import { ref } from 'vue';

// Variable reactiva para controlar el mensaje de error si la imagen de banner no carga.
const imageError = ref(false);

// Función que se ejecuta si ocurre un error al cargar la imagen de banner.
const onImageError = () => {
  // Establece imageError en true para mostrar un mensaje alternativo en la plantilla.
  imageError.value = true;
};
</script>

<style scoped>
/* Estilos específicos para el componente HomeView.vue */

/* --- Sección Hero --- */
.hero-section {
  /* Fondo con degradado lineal, usando variables CSS globales o colores por defecto. */
  background: linear-gradient(135deg, var(--primary-color-light, #e0f2fe) 0%, var(--primary-color, #4A90E2) 100%);
  color: white; /* Color de texto para la sección hero. */
  padding: 50px 0; /* Padding vertical. El horizontal lo maneja el .container interno. */
  text-align: center; /* Centra el texto en móviles por defecto. */
  margin-bottom: 40px; /* Espacio antes de la siguiente sección. */
  border-bottom-left-radius: 30px;  /* Redondeo para la esquina inferior izquierda. */
  border-bottom-right-radius: 30px; /* Redondeo para la esquina inferior derecha. */
  overflow: hidden; /* Asegura que el contenido respete los bordes redondeados. */
}

.hero-content {
  /* La clase .container global (aplicada en el template) centra este bloque y limita su ancho. */
  display: flex; /* Habilita Flexbox para el layout interno. */
  flex-direction: column; /* Elementos apilados verticalmente en móviles. */
  align-items: center; /* Centra los items en el eje transversal. */
  gap: 20px; /* Espacio entre el texto y la imagen en móviles. */
}

.hero-text {
  max-width: 600px; /* Ancho máximo para el bloque de texto. */
  margin-bottom: 20px; /* Margen si la imagen va debajo en móviles. */
}

.app-main-title {
  font-size: clamp(2.2em, 5.5vw, 3em); /* Tamaño de fuente fluido y responsivo. */
  font-weight: 700; /* Peso de la fuente. */
  color: #ffffff; /* Color del título. */
  margin-bottom: 0.5em; /* Margen inferior relativo. */
  line-height: 1.25; /* Altura de línea. */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25); /* Sombra de texto sutil. */
}

.subtitle-enhanced {
  font-size: clamp(1.1em, 2.8vw, 1.25em); /* Tamaño de fuente fluido. */
  color: #f0f8ff; /* Color del subtítulo (blanco azulado). */
  max-width: 550px; /* Ancho máximo. */
  margin: 0 auto 1.8em auto; /* Centrado y con margen inferior. */
  line-height: 1.65; /* Altura de línea. */
  font-weight: 300; /* Peso de fuente ligero. */
}

.btn-hero-cta {
  background-color: #ffffff; /* Fondo del botón. */
  color: var(--primary-color-dark, #3c7ddb); /* Color del texto del botón. */
  padding: 0.75em 1.8em; /* Padding relativo. */
  font-size: clamp(0.95em, 2.2vw, 1.1em); /* Tamaño de fuente fluido. */
  font-weight: 600; /* Peso de la fuente. */
  border-radius: 50px; /* Bordes muy redondeados (píldora). */
  text-decoration: none; /* Sin subrayado. */
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease; /* Transiciones suaves. */
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* Sombra. */
  display: inline-block; /* Permite aplicar márgenes y padding. */
  margin-top: 1.2em; /* Margen superior. */
  border: 2px solid transparent; /* Borde transparente para evitar saltos en hover. */
}
.btn-hero-cta:hover, .btn-hero-cta:focus {
  transform: translateY(-3px); /* Efecto de elevación. */
  box-shadow: 0 6px 18px rgba(0,0,0,0.15); /* Sombra más pronunciada. */
  background-color: #f0f8ff; /* Cambio de fondo sutil en hover. */
}

.hero-image-container {
  max-width: 280px; /* Ancho máximo de la imagen en móviles. */
  width: 70%; /* Ancho relativo. */
}

.home-banner-image {
  max-width: 100%; /* Imagen responsiva. */
  height: auto; /* Mantiene la proporción. */
  border-radius: 12px; /* Bordes redondeados. */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); /* Sombra. */
  object-fit: cover; /* Asegura que la imagen cubra bien el área. */
}
.image-error-message {
  color: #f8d7da; /* Color para el mensaje de error de imagen. */
  background-color: rgba(108,22,22,0.5); /* Fondo semitransparente. */
  padding: 5px 10px; /* Padding. */
  border-radius: 4px; /* Bordes redondeados. */
  font-style: italic; /* Cursiva. */
  font-size: 0.9em; /* Tamaño de fuente. */
  display: inline-block; /* Para que el padding aplique correctamente. */
}

/* --- Sección de Navegación de Temas --- */
.topics-navigation {
  padding-top: 30px; /* Espacio superior de la sección. */
  padding-bottom: 50px; /* Espacio inferior de la sección. */
  text-align: center; /* Centra el título de la sección. */
  /* La clase .container (global) ya centra y limita el ancho. */
}

.section-title {
  font-size: clamp(1.7em, 4.5vw, 2.1em); /* Tamaño de fuente fluido. */
  color: var(--text-color, #333); /* Color del texto. */
  margin-bottom: 40px; /* Margen inferior. */
  position: relative; /* Necesario para el pseudo-elemento ::after. */
  display: inline-block; /* Para que el borde inferior solo ocupe el ancho del texto. */
  padding-bottom: 10px; /* Espacio para la línea decorativa. */
}
.section-title::after { /* Línea decorativa debajo del título. */
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 4px;
  background-color: var(--primary-color, #4A90E2);
  border-radius: 3px;
}

.topic-cards-container {
  display: grid; /* Habilita CSS Grid para el layout de las tarjetas. */
  grid-template-columns: 1fr; /* Una columna por defecto (móviles). */
  gap: 25px; /* Espacio entre tarjetas. */
  margin-top: 20px; /* Espacio sobre las tarjetas. */
}

.topic-card {
  background-color: var(--card-background-color, #ffffff); /* Fondo de la tarjeta. */
  border-radius: var(--border-radius-lg, 12px); /* Bordes redondeados. */
  box-shadow: var(--shadow-md, 0 6px 18px rgba(0,0,0,0.08)); /* Sombra. */
  text-decoration: none; /* Sin subrayado para el enlace. */
  color: var(--text-color); /* Color de texto heredado. */
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-top-color 0.25s ease; /* Transiciones suaves. */
  border-top: 5px solid var(--primary-color-light, #a0c7e8); /* Borde superior de acento. */
  text-align: left; /* Alineación del texto dentro de la tarjeta. */
  display: flex; /* Habilita Flexbox para el contenido interno. */
  flex-direction: column; /* Apila el contenido interno verticalmente. */
  overflow: hidden; /* Evita que el contenido se desborde de los bordes redondeados. */
  padding: 25px; /* Padding general para la tarjeta. */
}
.topic-card:hover {
  transform: translateY(-8px) scale(1.02); /* Efecto de elevación y zoom en hover. */
  box-shadow: var(--shadow-lg, 0 10px 25px rgba(74,144,226,0.18)); /* Sombra más pronunciada. */
  border-top-color: var(--primary-color-dark, #3c7ddb); /* El borde superior se oscurece. */
}

.topic-card-icon {
  font-size: 2.5em; /* Tamaño del ícono (emoji). */
  text-align: center; /* Centra el ícono. */
  margin-bottom: 18px; /* Margen inferior. */
  color: var(--primary-color, #4A90E2); /* Color del ícono. */
  line-height: 1; /* Ajusta la altura de línea para el emoji. */
  transition: transform 0.3s ease; /* Transición para el ícono. */
}
.topic-card:hover .topic-card-icon {
  transform: scale(1.1); /* El ícono se agranda ligeramente en hover de la tarjeta. */
}

.topic-card-content {
  text-align: center; /* Centra el texto del contenido. */
  flex-grow: 1; /* Hace que esta sección ocupe el espacio disponible, empujando el CTA hacia abajo. */
}
.topic-card-content h3 {
  font-size: 1.35em; /* Tamaño del título de la tarjeta. */
  color: var(--primary-color-dark, #3c7ddb); /* Color del título. */
  margin-top: 0; /* Elimina margen superior. */
  margin-bottom: 10px; /* Margen inferior. */
  font-weight: 600; /* Peso de la fuente. */
}
.topic-card-content p {
  font-size: 0.92em; /* Tamaño de la descripción. */
  color: var(--text-color-light, #555); /* Color de la descripción. */
  line-height: 1.55; /* Altura de línea. */
  margin-bottom: 18px; /* Margen inferior. */
}

.topic-card-cta { /* "Call to Action" - Llamada a la acción (Ver Tema). */
  padding-top: 12px; /* Espacio superior. */
  text-align: center; /* Centra el CTA. */
  font-weight: 600; /* Peso de la fuente. */
  font-size: 0.95em; /* Tamaño de fuente. */
  color: var(--primary-color, #4A90E2); /* Color del texto. */
  margin-top: auto; /* Empuja al final de la tarjeta. */
  transition: color 0.2s ease, letter-spacing 0.2s ease; /* Transiciones. */
}
.topic-card:hover .topic-card-cta {
  color: var(--primary-color-dark, #3c7ddb); /* El texto se oscurece en hover. */
  letter-spacing: 0.5px; /* Ligero espaciado de letras en hover. */
}
.topic-card-cta .arrow { /* Estilo para la flecha. */
  transition: transform 0.25s ease; /* Transición para la flecha. */
  display: inline-block; /* Permite la transformación. */
  margin-left: 4px; /* Pequeño espacio antes de la flecha. */
}
.topic-card:hover .topic-card-cta .arrow {
  transform: translateX(6px); /* Mueve la flecha a la derecha. */
}

/* --- Media Queries para Responsividad --- */
@media (min-width: 600px) { /* Tablets y móviles grandes */
  .hero-image-container { max-width: 320px; width: 50%; }
  .topic-cards-container { grid-template-columns: repeat(2, minmax(0, 1fr)); } /* Dos tarjetas por fila */
}

@media (min-width: 992px) { /* Desktops */
  .hero-content { flex-direction: row; text-align: left; align-items: center; }
  .hero-text { text-align: left; margin-bottom: 0; flex: 2; } /* Más espacio para el texto */
  .subtitle-enhanced { margin-left: 0; }
  .hero-image-container { flex-shrink: 0; flex-basis: 320px; width: auto; order: 1; }
  .hero-text { order: 0; }
  .app-main-title { font-size: 2.6em; }
  .subtitle-enhanced { font-size: 1.2em; }
  .topic-cards-container { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); } /* 3 o 4 tarjetas */
}

@media (min-width: 1200px) { /* Desktops grandes */
  .hero-image-container { flex-basis: 380px; } /* Imagen un poco más grande */
  .app-main-title { font-size: 2.8em; }
}
</style>