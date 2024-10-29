const mongoose = require('mongoose');

const Estudiante = mongoose.model('Estudiantes',{
  Nombre: { type: String, required: true },
  Genero: { type: String, required: true },
  Codigo: { type: String, required: true, unique: true },
});

module.exports = Estudiante