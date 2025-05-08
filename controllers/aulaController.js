// controllers/aulaController.js
const AulaService = require('../services/aulaService.js');

class AulaController {
    // Crear un aula
    static async crearAula(req, res) {
        try {
            const aula = await AulaService.crearAula(req.body);
            res.status(201).json(aula);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Obtener todas las aulas
    static async obtenerAulas(req, res) {
        try {
            const aulas = await AulaService.obtenerAulas();
            res.status(200).json(aulas);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Obtener un aula por ID
    static async obtenerAula(req, res) {
        try {
            const aula = await AulaService.obtenerAula(req.params.id);
            if (!aula) {
                return res.status(404).json({ error: 'Aula no encontrada' });
            }
            res.status(200).json(aula);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Actualizar un aula
    static async actualizarAula(req, res) {
        try {
            const aulaActualizada = await AulaService.actualizarAula(req.params.id, req.body);
            if (!aulaActualizada) {
                return res.status(404).json({ error: 'Aula no encontrada' });
            }
            res.status(200).json(aulaActualizada);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Eliminar un aula
    static async eliminarAula(req, res) {
        try {
            const aulaEliminada = await AulaService.eliminarAula(req.params.id);
            if (!aulaEliminada) {
                return res.status(404).json({ error: 'Aula no encontrada' });
            }
            res.status(200).json({ mensaje: 'Aula eliminada exitosamente' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = AulaController;
