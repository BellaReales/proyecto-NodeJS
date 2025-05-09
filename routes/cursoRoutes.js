const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/cursoController');

router.get('/', CursoController.obtenerCursos);
router.get('/:id', CursoController.obtenerCurso);
router.post('/', CursoController.crearCurso);
router.put('/:id', CursoController.actualizarCurso);
router.delete('/:id', CursoController.eliminarCurso);

module.exports = router;
