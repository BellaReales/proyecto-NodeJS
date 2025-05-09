
const mongoose = require('mongoose');

const profesorSchema = new mongoose.Schema({
    profesorId: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    cursoId: { type: String, required: true }
});

const Profesor = mongoose.model('Profesor', profesorSchema);

module.exports = Profesor;
