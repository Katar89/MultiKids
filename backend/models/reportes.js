const mongoose = require('mongoose');

const reportesSchema = new mongoose.Schema({
    estudianteCodigo: {
        type: String, 
        required: true
    },
    actividadResultados: {
        type: Map,
        of: String
    },
    recomendaciones: {
        type: Map,
        of: String
    }
}, { timestamps: true });

const Reporte = mongoose.model('Reporte', reportesSchema);

module.exports = Reporte;
