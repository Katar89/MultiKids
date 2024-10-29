// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

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

app.use(express.json());
app.use('/api/registro', require('./routes/docentes'));
app.use('/api/login',require('./routes/docentes'));
