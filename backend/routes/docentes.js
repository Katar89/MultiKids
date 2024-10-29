// routes/tareas.js
const express = require('express');
const Docente = require('../models/docentes');

const router = express.Router();

router.post('/', async (req, res) => {
    const { Nombre, Apellido, Correo, Contraseña } = req.body;
    
    console.log('Datos recibidos:', req.body); // Agrega esto para verificar los datos

    try {
        const nuevoDocente = new Docente({ Nombre, Apellido, Correo, Contraseña });
        await nuevoDocente.save();
        res.status(201).json(nuevoDocente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al registrar el docente' });
    }
});

router.post('/login', async (req, res) => {
    const { Correo, Contraseña } = req.body; // Solo tomamos Correo y Contraseña

    try {
        // Buscamos un docente que coincida con el Correo y Contraseña
        const docente = await Docente.findOne({ Correo, Contraseña });

        // Verificamos si el docente existe y si la contraseña es correcta
        if (!docente || docente.Contraseña !== Contraseña) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Aquí podrías manejar la sesión o el token si es necesario
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso', docente });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});

module.exports = router;
