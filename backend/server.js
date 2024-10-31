const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const reportesRoutes = require('./routes/reportesRoutes');

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

app.use(cors());
app.use(express.json());

// Configura la conexión con MongoDB
mongoose.connect("mongodb+srv://joseligo:JuanJose142006@db.7jvy7.mongodb.net/MultKids", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB MultiKids'))
  .catch((error) => console.error('Error al conectar a MongoDB', error));

// Rutas de la API
app.use('/api', require('./routes/docentes'));
app.use('/api', require('./routes/loginruta'));
app.use('/api', require('./routes/estudiantesRoutes'));
app.use('/api/reportes', reportesRoutes);
