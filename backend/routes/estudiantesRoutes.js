const express = require('express');
const Estudiante = require('../models/estudiantes'); // Asegúrate de que el modelo Estudiante esté definido en models/estudiantes.js
const router = express.Router();

// Ruta para obtener todos los estudiantes
router.get('/estudiantes', async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener estudiantes' });
  }
});

// Ruta para crear un nuevo estudiante
router.post('/estudiantes', async (req, res) => {
  const { Nombre, Genero, Codigo, CineticoCorporal,
  Interpersonal,
  Linguistica,
  Naturalista,
  LogicoMatematica,
  VisualEspacial} = req.body;

  try {
    const nuevoEstudiante = new Estudiante({ Nombre, Genero, Codigo, CineticoCorporal,
      Interpersonal,
      Linguistica,
      Naturalista,
      LogicoMatematica,
      VisualEspacial });
    await nuevoEstudiante.save();
    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear estudiante' });
  }
});

module.exports = router;
