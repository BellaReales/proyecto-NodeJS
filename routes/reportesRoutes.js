const express = require('express');
const router = express.Router();
const ReportesController = require('../controllers/reportesController');

router.get('/cursos-entre-fechas', ReportesController.cursosEntreFechas);

module.exports = router;
