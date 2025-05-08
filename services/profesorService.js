const { profesores } = require('../models/profesorModel');

class ProfesorService {
    // Crear un profesor
    static async crearProfesor(profesorData) {
        try {
            profesores.push(profesorData);  
            return profesorData;
        } catch (err) {
            throw new Error('Error al crear profesor: ' + err.message);
        }
    }

    static async obtenerProfesores() {
        try {
            return profesores; 
        } catch (err) {
            throw new Error('Error al obtener profesores: ' + err.message);
        }
    }

    static async obtenerProfesor(id) {
        try {
            return profesores.find(prof => prof.profesorId === id); 
        } catch (err) {
            throw new Error('Error al obtener el profesor: ' + err.message);
        }
    }


    static async actualizarProfesor(id, profesorData) {
        try {
            let index = profesores.findIndex(prof => prof.profesorId === id);
            if (index === -1) return null;
            profesores[index] = { ...profesores[index], ...profesorData };
            return profesores[index];
        } catch (err) {
            throw new Error('Error al actualizar el profesor: ' + err.message);
        }
    }


    static async eliminarProfesor(id) {
        try {
            let index = profesores.findIndex(prof => prof.profesorId === id);
            if (index === -1) return null;
            return profesores.splice(index, 1);
        } catch (err) {
            throw new Error('Error al eliminar el profesor: ' + err.message);
        }
    }
}

module.exports = ProfesorService;
