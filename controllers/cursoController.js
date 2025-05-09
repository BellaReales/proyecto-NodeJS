const CursoService = require('../services/cursoService');

class CursoController {

    static async crearCurso(req, res) {
        try {
            const curso = await CursoService.crearCurso(req.body);
            res.status(201).json(curso);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


    static async obtenerCursos(req, res) {
        try {
            const cursos = await CursoService.obtenerCursos();
            res.status(200).json(cursos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


    static async obtenerCurso(req, res) {
        try {
            const curso = await CursoService.obtenerCurso(req.params.id);
            if (!curso) {
                return res.status(404).json({ error: 'Curso no encontrado' });
            }
            res.status(200).json(curso);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


    static async actualizarCurso(req, res) {
        try {
            const cursoActualizado = await CursoService.actualizarCurso(req.params.id, req.body);
            if (!cursoActualizado) {
                return res.status(404).json({ error: 'Curso no encontrado' });
            }
            res.status(200).json(cursoActualizado);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


    static async eliminarCurso(req, res) {
        try {
            const cursoEliminado = await CursoService.eliminarCurso(req.params.id);
            if (!cursoEliminado) {
                return res.status(404).json({ error: 'Curso no encontrado' });
            }
            res.status(200).json({ mensaje: 'Curso eliminado exitosamente' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = CursoController;
