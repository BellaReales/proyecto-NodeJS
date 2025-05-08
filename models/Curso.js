const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    cursoId: { type: String, required: true, unique: true },
    codigo: { type: String, required: true },
    nombre: { type: String, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    intensidad: { type: String, required: true },
    aula: { type: String, required: true },
    profesorId: { type: String, required: true }
});

const Curso = mongoose.model('Curso', cursoSchema);

module.exports = Curso;
