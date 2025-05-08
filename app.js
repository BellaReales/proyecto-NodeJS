const express = require('express');
const conectarDB = require('./config/database');
const estudianteRoutes = require('./routes/estudiante.routes');
const profesorRoutes = require('./routes/profesor.routes'); // y así con las demás

const app = express();
app.use(express.json());


conectarDB();


app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/profesores', profesorRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
