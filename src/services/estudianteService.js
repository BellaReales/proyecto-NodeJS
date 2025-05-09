const Estudiante = require('../models/Estudiante');

class EstudianteService {
    static async crearEstudiante(estudianteData) {
        return await Estudiante.create(estudianteData);
    }

    static async obtenerEstudiantes() {
        return await Estudiante.find();
    }

    static async obtenerEstudiante(id) {
        return await Estudiante.findOne({ estudianteId: id });
    }

    static async actualizarEstudiante(id, estudianteData) {
        return await Estudiante.findOneAndUpdate({ estudianteId: id }, estudianteData, { new: true });
    }

    static async eliminarEstudiante(id) {
        return await Estudiante.findOneAndDelete({ estudianteId: id });
    }
}

module.exports = EstudianteService;
