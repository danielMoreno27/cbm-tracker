const mongoose = require('mongoose');

const TipoContenedorSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, // Ej: "40 HQ", "20 ST"
    capacidadCBM: { type: Number, required: true }, // Ej: 68 o 33
    descripcion: String
});

module.exports = mongoose.model('TipoContenedor', TipoContenedorSchema);