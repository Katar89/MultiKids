const mongoose = require('mongoose');

const Docente = mongoose.model('Docentes', {
    Nombre: { type: String, required: true },
    Apellido: { type: String, required: true },
    Correo: { type: String, required: true, unique: true }, // Asegúrate de que Correo sea único
    Contraseña: { type: String, required: true }
});

module.exports = Docente;