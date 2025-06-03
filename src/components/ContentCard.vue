// Archivo: src/components/ContentCard.vue
<template>
  <section class="card">
    <h2 v-if="title">{{ title }}</h2>
    <slot></slot> </section>
</template>

<script setup>
// NO necesitas importar defineProps desde 'vue'
// Simplemente declara las props que el componente acepta.
// 'title' estará disponible automáticamente en el <template> de arriba.
defineProps({
  title: String, // Prop opcional 'title' de tipo String
});

// Si necesitaras usar 'title' DENTRO de esta sección <script setup> (por ejemplo, para un console.log),
// entonces asignarías defineProps a una constante:
// const props = defineProps({ title: String });
// console.log('Título en ContentCard:', props.title);
// Pero como solo lo usamos en el template, la declaración simple de defineProps es suficiente.
</script>

<style scoped>
/* Los estilos para '.card' y '.card h2' se asume que están
   en tu archivo global src/assets/style.css.
   Si necesitas estilos MUY específicos para ESTE ContentCard que no
   quieres que afecten a otros, los pones aquí. */

/* Ejemplo de estilos base que podrían estar en tu style.css global
   o aquí si quieres que sean específicos de este componente y no globales.
   Por coherencia con la nota, los dejo comentados asumiendo que son globales.
*/
/*
.card {
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 4px solid var(--primary-color, #4A90E2);
}

.card h2 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.5em;
  color: var(--primary-color-dark, #3c7ddb);
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
*/
</style>