const express = require('express');
const conectarDB = require('./config/database');

const estudianteRoutes = require('./routes/estudianteRoutes');
const profesorRoutes = require('./routes/profesorRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const aulaRoutes = require('./routes/aulaRoutes');
const reportesRoutes = require('./routes/reportesRoutes'); // 🔥 nueva línea

const app = express();
app.use(express.json());

conectarDB();

app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/profesores', profesorRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/aulas', aulaRoutes);
app.use('/api/reportes', reportesRoutes); // 🔥 nueva línea

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
