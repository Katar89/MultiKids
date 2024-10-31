const express = require('express');
const Estudiante = require('../models/estudiantes'); 
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
  const { Nombre, Genero, Codigo} = req.body;

  try {
    const nuevoEstudiante = new Estudiante({ Nombre, Genero, Codigo});
    await nuevoEstudiante.save();
    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear estudiante' });
  }
});

router.get('/:codigo', async (req, res) => {
  const { Codigo } = req.params;

  try {
      const estudiante = await Estudiante.findOne({ Codigo });
      if (!estudiante) {
          return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
      }
      return res.json(estudiante); // Devuelve el estudiante encontrado
  } catch (err) {
      console.error('Error al seleccionar el estudiante:', err);
      return res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

module.exports = router;
