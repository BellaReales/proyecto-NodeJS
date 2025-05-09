const express = require('express');
const router = express.Router();
const AulaController = require('../controllers/aulaController');

router.get('/', AulaController.obtenerAulas);
router.get('/:id', AulaController.obtenerAula);
router.post('/', AulaController.crearAula);
router.put('/:id', AulaController.actualizarAula);
router.delete('/:id', AulaController.eliminarAula);

module.exports = router;
