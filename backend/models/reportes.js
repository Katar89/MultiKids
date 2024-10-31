const mongoose = require('mongoose');

const Reportes = mongoose.model('Reportes',{
    estudianteCodigo: {
        type: String,
        of: String
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

module.exports = Reportes;
