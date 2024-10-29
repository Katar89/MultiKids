const mongoose = require('mongoose');

const Estudiante = mongoose.model('Estudiantes',{
  Nombre: { type: String, required: true },
  Genero: { type: String, required: true },
  Codigo: { type: String, required: true, unique: true },
  CineticoCorporal: { type: String, required: true },
  Interpersonal: { type: String, required: true },
  Linguistica: { type: String, required: true },
  Naturalista: { type: String, required: true },
  LogicoMatematica: { type: String, required: true },
  VisualEspacial: { type: String, required: true }
});

module.exports = Estudiante