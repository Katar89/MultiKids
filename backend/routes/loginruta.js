const express = require('express');
const Docente = require('../models/docentes');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { Correo, Contraseña } = req.body;

    try {
        const docente = await Docente.findOne({ Correo });
        console.log('Docente encontrado:', docente);

        if (!docente) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(Contraseña, docente.Contraseña);
        if (!isMatch) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        res.status(200).json({ mensaje: 'Inicio de sesión exitoso', docente });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});

module.exports = router;