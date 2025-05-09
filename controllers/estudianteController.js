const EstudianteService = require('../services/estudianteService');

class EstudianteController {

    static async crearEstudiante(req, res) {
        try {
            const estudiante = await EstudianteService.crearEstudiante(req.body);
            res.status(201).json(estudiante);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


    static async obtenerEstudiantes(req, res) {
        try {
            const estudiantes = await EstudianteService.obtenerEstudiantes();
            res.status(200).json(estudiantes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async obtenerEstudiante(req, res) {
        try {
            const estudiante = await EstudianteService.obtenerEstudiante(req.params.id);
            if (!estudiante) {
                return res.status(404).json({ error: 'Estudiante no encontrado' });
            }
            res.status(200).json(estudiante);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


    static async actualizarEstudiante(req, res) {
        try {
            const estudianteActualizado = await EstudianteService.actualizarEstudiante(req.params.id, req.body);
            if (!estudianteActualizado) {
                return res.status(404).json({ error: 'Estudiante no encontrado' });
            }
            res.status(200).json(estudianteActualizado);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


    static async eliminarEstudiante(req, res) {
        try {
            const estudianteEliminado = await EstudianteService.eliminarEstudiante(req.params.id);
            if (!estudianteEliminado) {
                return res.status(404).json({ error: 'Estudiante no encontrado' });
            }
            res.status(200).json({ mensaje: 'Estudiante eliminado exitosamente' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = EstudianteController;
