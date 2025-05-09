const Profesor = require('../models/Profesor');

class ProfesorService {
    static async crearProfesor(profesorData) {
        return await Profesor.create(profesorData);
    }

    static async obtenerProfesores() {
        return await Profesor.find();
    }

    static async obtenerProfesor(id) {
        return await Profesor.findOne({ profesorId: id });
    }

    static async actualizarProfesor(id, profesorData) {
        return await Profesor.findOneAndUpdate({ profesorId: id }, profesorData, { new: true });
    }

    static async eliminarProfesor(id) {
        return await Profesor.findOneAndDelete({ profesorId: id });
    }
}

module.exports = ProfesorService;
