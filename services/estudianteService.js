
const { estudiantes } = require('../models/estudianteModel');
class EstudianteService {

    static async crearEstudiante(estudianteData) {
        try {

            estudiantes.push(estudianteData);  
            return estudianteData;
        } catch (err) {
            throw new Error('Error al crear estudiante: ' + err.message);
        }
    }


    static async obtenerEstudiantes() {
        try {
            return estudiantes; 
        } catch (err) {
            throw new Error('Error al obtener estudiantes: ' + err.message);
        }
    }


    static async obtenerEstudiante(id) {
        try {
            return estudiantes.find(est => est.estudianteId === id);  
        } catch (err) {
            throw new Error('Error al obtener el estudiante: ' + err.message);
        }
    }


    static async actualizarEstudiante(id, estudianteData) {
        try {
            let index = estudiantes.findIndex(est => est.estudianteId === id);
            if (index === -1) return null;
            estudiantes[index] = { ...estudiantes[index], ...estudianteData };
            return estudiantes[index];
        } catch (err) {
            throw new Error('Error al actualizar el estudiante: ' + err.message);
        }
    }

    static async eliminarEstudiante(id) {
        try {
            let index = estudiantes.findIndex(est => est.estudianteId === id);
            if (index === -1) return null;
            return estudiantes.splice(index, 1);
        } catch (err) {
            throw new Error('Error al eliminar el estudiante: ' + err.message);
        }
    }
}

module.exports = EstudianteService;
