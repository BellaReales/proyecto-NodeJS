
const mongoose = require('mongoose');

const inscripcionSchema = new mongoose.Schema({
    cursos: {
        cursoId: { type: String, required: true },
        codigo: { type: String, required: true },
        nombre: { type: String, required: true },
        fechaInicio: { type: Date, required: true },
        fechaFin: { type: Date, required: true },
        intensidad: { type: String, required: true },
        aula: { type: String, required: true },
        profesorId: { type: String, required: true }
    }
}, { _id: false });

const estudianteSchema = new mongoose.Schema({
    estudianteId: { type: String, required: true, unique: true },
    identificacionType: { type: String, required: true },
    identificacionNumber: { type: String, required: true },
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    inscripciones: [inscripcionSchema]
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;
