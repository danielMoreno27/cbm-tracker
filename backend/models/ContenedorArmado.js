const mongoose = require('mongoose');

const ContenedorArmadoSchema = new mongoose.Schema({
    identificador: { type: String, required: true }, // Ej: "CONT-MARZO-001"
    tipo: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoContenedor' },
    fechaCreacion: { type: Date, default: Date.now },
    estatus: { type: String, enum: ['BORRADOR', 'CONFIRMADO', 'EN_TRANSITO', 'RECIBIDO'], default: 'BORRADOR' },
    items: [{
        numOrden: Number,
        claveOrden: String,
        tela: String,
        color: String,
        metros: Number,
        cbmCalculado: Number
    }],
    totalCBM: { type: Number, default: 0 }
});

module.exports = mongoose.model('ContenedorArmado', ContenedorArmadoSchema);