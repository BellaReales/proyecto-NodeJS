// services/estudianteService.js
const { estudiantes } = require('../models/estudianteModel'); // Puedes conectar esto con tu base de datos luego

class EstudianteService {
    // Crear un estudiante
    static async crearEstudiante(estudianteData) {
        try {
            // Aquí iría la lógica para insertar en la base de datos (MongoDB)
            estudiantes.push(estudianteData);  // Esto es temporal, solo para demostrar
            return estudianteData;
        } catch (err) {
            throw new Error('Error al crear estudiante: ' + err.message);
        }
    }

    // Obtener todos los estudiantes
    static async obtenerEstudiantes() {
        try {
            return estudiantes; // Esto es temporal, solo para demostrar
        } catch (err) {
            throw new Error('Error al obtener estudiantes: ' + err.message);
        }
    }

    // Obtener un estudiante por ID
    static async obtenerEstudiante(id) {
        try {
            return estudiantes.find(est => est.estudianteId === id);  // Esto es temporal
        } catch (err) {
            throw new Error('Error al obtener el estudiante: ' + err.message);
        }
    }

    // Actualizar un estudiante
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

    // Eliminar un estudiante
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
