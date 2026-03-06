const mongoose = require('mongoose');

const MuestreoSchema = new mongoose.Schema({
  idTela: String,
  ancho: Number,
  diametro: Number,
  metrosReales: Number,
  pesoReal: Number,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Muestreo', MuestreoSchema);