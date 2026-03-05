<template>
  <div class="muestreo-card">
    <h2>📦 Registro de Muestreo</h2>

    <div class="form-group">
      <label>Tela del Contenedor (Desde OC)</label>
      <select v-model="form.idTela">
        <option value="" disabled>Selecciona una tela...</option>
        <option value="Denver Red">Denver Red (OC B32756)</option>
        <option value="Denver Black">Denver Black (OC B32756)</option>
      </select>
    </div>

    <div class="grid-inputs">
      <div class="form-group">
        <label>Ancho (mts)</label>
        <input v-model.number="form.ancho" type="number" step="0.01">
      </div>
      <div class="form-group">
        <label>Diámetro (cm)</label>
        <input v-model.number="form.diametro" type="number" step="0.1">
      </div>
      <div class="form-group">
        <label>Metros Reales</label>
        <input v-model.number="form.metrosReales" type="number">
      </div>
      <div class="form-group">
        <label>Peso Real (kg)</label>
        <input v-model.number="form.pesoReal" type="number" step="0.1">
      </div>
    </div>

    <button @click="enviarMuestreo" class="btn-save">
      Guardar Muestreo
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Importamos el CSS que acabamos de crear
import '../assets/muestreo.css'; 

const form = ref({
  idTela: '',
  ancho: 1.5,
  diametro: 0,
  metrosReales: 0,
  pesoReal: 0
});

const enviarMuestreo = async () => {
  if(!form.value.idTela) return alert("Selecciona una tela primero");
  
  try {
    await axios.post('http://localhost:3000/api/muestreos', form.value);
    alert('¡Muestreo guardado exitosamente!');
    // Reseteamos solo lo necesario
    form.value.diametro = 0;
    form.value.metrosReales = 0;
    form.value.pesoReal = 0;
  } catch (err) {
    console.error("Error al guardar:", err);
  }
};
</script>