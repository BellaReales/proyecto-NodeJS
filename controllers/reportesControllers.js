const Curso = require('../models/Curso');
const Estudiante = require('../models/Estudiante');
const Profesor = require('../models/Profesor');
const Aula = require('../models/Aula');

class ReportesController {
  static async cursosEntreFechas(req, res) {
    const { inicio, fin } = req.query;

    if (!inicio || !fin) {
      return res.status(400).send('Parámetros "inicio" y "fin" son requeridos');
    }

    try {
      const cursos = await Curso.find({
        fechaInicio: { $gte: new Date(inicio) },
        fechaFin: { $lte: new Date(fin) }
      });

      const html = [];

      html.push(`<html><head><title>Reporte de Cursos</title></head><body>`);
      html.push(`<h1>Cursos programados entre ${inicio} y ${fin}</h1><ul>`);

      for (const curso of cursos) {
        const profesor = await Profesor.findOne({ profesorId: curso.profesorId });
        const aula = await Aula.findOne({ aulaID: curso.aula });
        const estudiantes = await Estudiante.find({ 'inscripciones.cursos.cursoId': curso.cursoId });

        html.push(`
          <li>
            <strong>${curso.nombre}</strong> (${curso.codigo})<br>
            Fechas: ${curso.fechaInicio.toISOString().split('T')[0]} - ${curso.fechaFin.toISOString().split('T')[0]}<br>
            Profesor: ${profesor ? `${profesor.nombre} ${profesor.apellido}` : 'No asignado'}<br>
            Aula: ${aula ? aula.codigo : 'No asignada'}<br>
            Estudiantes inscritos: ${estudiantes.length}
          </li>
        `);
      }

      html.push(`</ul></body></html>`);

      res.setHeader('Content-Type', 'text/html');
      res.send(html.join(''));

    } catch (error) {
      console.error('Error generando informe:', error);
      res.status(500).send('Error interno del servidor');
    }
  }
}

module.exports = ReportesController;
