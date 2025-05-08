// services/aulaService.js
const { aulas } = require('../models/aulaModel');

class AulaService {
    // Crear un aula
    static async crearAula(aulaData) {
        try {
            aulas.push(aulaData);  // Temporal
            return aulaData;
        } catch (err) {
            throw new Error('Error al crear aula: ' + err.message);
        }
    }

    // Obtener todas las aulas
    static async obtenerAulas() {
        try {
            return aulas;  // Temporal
        } catch (err) {
            throw new Error('Error al obtener aulas: ' + err.message);
        }
    }

    // Obtener un aula por ID
    static async obtenerAula(id) {
        try {
            return aulas.find(aula => aula.aulaID === id);  // Temporal
        } catch (err) {
            throw new Error('Error al obtener el aula: ' + err.message);
        }
    }

    // Actualizar un aula
    static async actualizarAula(id, aulaData) {
        try {
            let index = aulas.findIndex(aula => aula.aulaID === id);
            if (index === -1) return null;
            aulas[index] = { ...aulas[index], ...aulaData };
            return aulas[index];
        } catch (err) {
            throw new Error('Error al actualizar el aula: ' + err.message);
        }
    }

    // Eliminar un aula
    static async eliminarAula(id) {
        try {
            let index = aulas.findIndex(aula => aula.aulaID === id);
            if (index === -1) return null;
            return aulas.splice(index, 1);
        } catch (err) {
            throw new Error('Error al eliminar el aula: ' + err.message);
        }
    }
}

module.exports = AulaService;
