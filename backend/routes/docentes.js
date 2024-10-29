const express = require('express');
const Docente = require('../models/docentes');
const bcrypt = require('bcrypt');

const router = express.Router();

// Ruta para el registro
router.post('/registro', async (req, res) => {
    const { Nombre, Apellido, Correo, Contraseña } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Contraseña, salt);
        
        const nuevoDocente = new Docente({ Nombre, Apellido, Correo, Contraseña: hashedPassword });
        await nuevoDocente.save();
        
        res.status(201).json(nuevoDocente);
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ mensaje: 'Error al registrar el docente' });
    }
});

// Ruta para el inicio de sesión

module.exports = router;
