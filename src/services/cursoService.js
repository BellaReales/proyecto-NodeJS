const Curso = require('../models/Curso');

class CursoService {
    static async crearCurso(cursoData) {
        return await Curso.create(cursoData);
    }

    static async obtenerCursos() {
        return await Curso.find();
    }

    static async obtenerCurso(id) {
        return await Curso.findOne({ cursoId: id });
    }

    static async actualizarCurso(id, cursoData) {
        return await Curso.findOneAndUpdate({ cursoId: id }, cursoData, { new: true });
    }

    static async eliminarCurso(id) {
        return await Curso.findOneAndDelete({ cursoId: id });
    }
}

module.exports = CursoService;
