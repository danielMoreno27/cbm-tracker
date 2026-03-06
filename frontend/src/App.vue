<template>
  <div id="app">
    <nav class="navbar">
      <h1>Altimatex - CBM Tracker</h1>
    </nav>
    <main>
      <Muestreo />
    </main>
  </div>
</template>

<script setup>
import Muestreo from './components/Muestreo.vue';
</script>

<style>
/* Un poco de estilo global para que no se vea vacío */
  body {
    background-color: #121212;
    margin: 0;
    font-family: sans-serif;
  }
  .navbar {
    background-color: #1e1e1e;
    padding: 1rem;
    color: #4da6ff;
    border-bottom: 2px solid #333;
    text-align: center;
  }
</style>