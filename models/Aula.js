
const mongoose = require('mongoose');

const aulaSchema = new mongoose.Schema({
    aulaID: { type: String, required: true, unique: true },
    codigo: { type: String, required: true },
    capacidad: { type: Number, required: true }
});

const Aula = mongoose.model('Aula', aulaSchema);

module.exports = Aula;
