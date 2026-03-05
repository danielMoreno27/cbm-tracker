const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cbm_tracker')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

// Esquema de Muestreo (Lo que hará bodega)
const MuestreoSchema = new mongoose.Schema({
  idTela: String,      // Nombre o ID de la tela
  ancho: Number,       // metros
  diametro: Number,    // cm
  metrosReales: Number,
  pesoReal: Number,
  fecha: { type: Date, default: Date.now }
});

const Muestreo = mongoose.model('Muestreo', MuestreoSchema);

// Ruta para guardar un muestreo
app.post('/api/muestreos', async (req, res) => {
  try {
    const nuevoMuestreo = new Muestreo(req.body);
    await nuevoMuestreo.save();
    res.status(201).json({ mensaje: "Muestreo guardado con éxito" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));