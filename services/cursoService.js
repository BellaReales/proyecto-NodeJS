const { cursos } = require('../models/cursoModel'); 

class CursoService {
    // Crear un curso
    static async crearCurso(cursoData) {
        try {
            cursos.push(cursoData);
            return cursoData;
        } catch (err) {
            throw new Error('Error al crear curso: ' + err.message);
        }
    }


    static async obtenerCursos() {
        try {
            return cursos; 
        } catch (err) {
            throw new Error('Error al obtener cursos: ' + err.message);
        }
    }


    static async obtenerCurso(id) {
        try {
            return cursos.find(curso => curso.cursoId === id);  
        } catch (err) {
            throw new Error('Error al obtener el curso: ' + err.message);
        }
    }


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
