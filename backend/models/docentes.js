const mongoose = require('mongoose');

const Docente = mongoose.model('Docentes', {
    Correo: { type: String, required: true, unique: true }, // Asegúrate de que Correo sea único
    Contraseña: { type: String, required: true },
    Nombre: { type: String, required: true },
    Apellido: { type: String, required: true }
});

module.exports = Docente;