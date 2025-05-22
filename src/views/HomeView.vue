// Archivo: src/views/HomeView.vue
<template>
  <div class="home-view">
    <header class="home-header">
      <h1>¡Bienvenido a tu Guía Interactiva de Inglés!</h1>
      <p class="subtitle">Explora los temas y mejora tus habilidades en el idioma inglés.</p>
      <img src="/images/learning-english-banner.jpg" alt="Aprendiendo Inglés" class="home-banner-image">
      </header>

    <section class="topics-navigation">
      <h2>Elige un Tema para Empezar</h2>
      <div class="topic-cards-container">
        <router-link to="/simple-past" class="topic-card">
          <div class="topic-card-content">
            <h3>Pasado Simple</h3>
            <p>Aprende a hablar sobre acciones completadas en el pasado.</p>
          </div>
        </router-link>

        <router-link to="/comparatives-superlatives" class="topic-card">
          <div class="topic-card-content">
            <h3>Comparativos y Superlativos</h3>
            <p>Compara objetos y describe cualidades en su máximo grado.</p>
          </div>
        </router-link>

        <router-link to="/present-perfect" class="topic-card">
          <div class="topic-card-content">
            <h3>Presente Perfecto</h3>
            <p>Conecta el pasado con el presente y habla de tus experiencias.</p>
          </div>
        </router-link>

        </div>
    </section>
  </div>
</template>

<script setup>
// No se necesita lógica de script compleja para esta página de inicio estática por ahora.
// Si importas una imagen desde src/assets:
// import bannerImage from '@/assets/images/learning-english-banner.jpg';
// Y en el template: <img :src="bannerImage" ... />
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
}

.home-header {
  margin-bottom: 40px;
}

.home-header h1 {
  font-size: 2.8em;
  color: var(--primary-color, #4A90E2); /* Usa la variable CSS si la definiste, o un color por defecto */
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 30px;
}

.home-banner-image {
  max-width: 100%;
  height: auto;
  max-height: 350px; /* Ajusta según la imagen */
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.topics-navigation h2 {
  font-size: 2em;
  color: #333;
  margin-bottom: 30px;
  border-bottom: 2px solid var(--primary-color-light, #7bb9f7);
  padding-bottom: 10px;
  display: inline-block;
}

.topic-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; /* Espacio entre tarjetas */
}

.topic-card {
  background-color: #f1e9e9;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  width: 300px; /* Ancho de cada tarjeta */
  padding: 25px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 5px solid var(--primary-color, #4A90E2);
}

.topic-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(74, 144, 226, 0.2); /* Sombra más pronunciada al pasar el mouse */
}

.topic-card-content h3 {
  font-size: 1.6em;
  color: var(--primary-color, #4A90E2);
  margin-top: 0;
  margin-bottom: 15px;
}

.topic-card-content p {
  font-size: 1em;
  color: #555;
  line-height: 1.6;
}
</style>