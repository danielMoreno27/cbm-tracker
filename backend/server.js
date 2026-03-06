require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { getOrdenesPendientes } = require('./vfp_service');

// Importar los modelos
const Muestreo = require('./models/Muestreo');
const TipoContenedor = require('./models/TipoContenedor');
const ContenedorArmado = require('./models/ContenedorArmado');

const app = express();
app.use(cors());
app.use(express.json());

const dbURI = procces.env.MONGO_URI;

mongoose.connect(dbURI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

// --- RUTAS ---

// Obtener órdenes de Visual FoxPro
app.get('/api/vfp/ordenes', async (req, res) => {
    const datos = await getOrdenesPendientes();
    res.json(datos);
});

// Guardar muestreo desde bodega
app.post('/api/muestreos', async (req, res) => {
  try {
    const nuevoMuestreo = new Muestreo(req.body);
    await nuevoMuestreo.save();
    res.status(201).json({ mensaje: "Muestreo guardado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener tipos de contenedores (Catálogo)
app.get('/api/contenedores/tipos', async (req, res) => {
    try {
        const tipos = await TipoContenedor.find();
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));