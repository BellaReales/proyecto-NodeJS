// services/cursoService.js
const { cursos } = require('../models/cursoModel'); // Esto también debe conectarse con la base de datos

class CursoService {
    // Crear un curso
    static async crearCurso(cursoData) {
        try {
            cursos.push(cursoData);  // Esto es temporal
            return cursoData;
        } catch (err) {
            throw new Error('Error al crear curso: ' + err.message);
        }
    }

    // Obtener todos los cursos
    static async obtenerCursos() {
        try {
            return cursos; // Temporal
        } catch (err) {
            throw new Error('Error al obtener cursos: ' + err.message);
        }
    }

    // Obtener un curso por ID
    static async obtenerCurso(id) {
        try {
            return cursos.find(curso => curso.cursoId === id);  // Temporal
        } catch (err) {
            throw new Error('Error al obtener el curso: ' + err.message);
        }
    }

    // Actualizar un curso
    static async actualizarCurso(id, cursoData) {
        try {
            let index = cursos.findIndex(curso => curso.cursoId === id);
            if (index === -1) return null;
            cursos[index] = { ...cursos[index], ...cursoData };
            return cursos[index];
        } catch (err) {
            throw new Error('Error al actualizar el curso: ' + err.message);
        }
    }

    // Eliminar un curso
    static async eliminarCurso(id) {
        try {
            let index = cursos.findIndex(curso => curso.cursoId === id);
            if (index === -1) return null;
            return cursos.splice(index, 1);
        } catch (err) {
            throw new Error('Error al eliminar el curso: ' + err.message);
        }
    }
}

module.exports = CursoService;
