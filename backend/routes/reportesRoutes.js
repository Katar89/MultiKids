const express = require('express');
const router = express.Router();
const Reporte = require('../models/reportes');

router.post('/', async (req, res) => {
    const { estudianteCodigo, actividadResultados, recomendaciones } = req.body;

    try {
        // Crear un nuevo documento basado en el modelo de Mongoose
        const nuevoReporte = new Reporte({
            estudianteCodigo: estudianteCodigo.toString(), // Convertir a string si no lo es
            actividadResultados: Object.keys(actividadResultados).reduce((acc, key) => {
                acc[key] = actividadResultados[key].toString(); // Convertir cada valor a string
                return acc;
            }, {}),
            recomendaciones: Object.keys(recomendaciones).reduce((acc, key) => {
                acc[key] = recomendaciones[key].toString(); // Convertir cada valor a string
                return acc;
            }, {}),
        });

        // Guardar el reporte en la base de datos
        await nuevoReporte.save();
        res.status(201).json({ message: 'Reporte guardado exitosamente.' });
    } catch (error) {
        console.error('Error al guardar el reporte:', error);
        res.status(500).json({ error: 'Error al guardar el reporte' });
    }
});

module.exports = router;