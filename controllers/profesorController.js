// controllers/profesorController.js
const ProfesorService = require('../services/profesorService');

class ProfesorController {
    // Crear un profesor
    static async crearProfesor(req, res) {
        try {
            const profesor = await ProfesorService.crearProfesor(req.body);
            res.status(201).json(profesor);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Obtener todos los profesores
    static async obtenerProfesores(req, res) {
        try {
            const profesores = await ProfesorService.obtenerProfesores();
            res.status(200).json(profesores);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Obtener un profesor por ID
    static async obtenerProfesor(req, res) {
        try {
            const profesor = await ProfesorService.obtenerProfesor(req.params.id);
            if (!profesor) {
                return res.status(404).json({ error: 'Profesor no encontrado' });
            }
            res.status(200).json(profesor);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Actualizar un profesor
    static async actualizarProfesor(req, res) {
        try {
            const profesorActualizado = await ProfesorService.actualizarProfesor(req.params.id, req.body);
            if (!profesorActualizado) {
                return res.status(404).json({ error: 'Profesor no encontrado' });
            }
            res.status(200).json(profesorActualizado);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Eliminar un profesor
    static async eliminarProfesor(req, res) {
        try {
            const profesorEliminado = await ProfesorService.eliminarProfesor(req.params.id);
            if (!profesorEliminado) {
                return res.status(404).json({ error: 'Profesor no encontrado' });
            }
            res.status(200).json({ mensaje: 'Profesor eliminado exitosamente' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = ProfesorController;
