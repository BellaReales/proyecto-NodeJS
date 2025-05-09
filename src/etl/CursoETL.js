const fs = require('fs');
const csv = require('csv-parser');
const Curso = require('../models/Curso.js');  

class CursoETL {
  static async cargarDatos() {
    const cursos = [];

    fs.createReadStream('../rawData/Curso.csv')
      .pipe(csv())
      .on('data', (row) => {

        cursos.push({
          cursoId: row.cursoId,
          codigo: row.codigo,
          nombre: row.nombre,
          fechaInicio: row.fechaInicio,
          fechaFin: row.fechaFin,
          intensidad: row.intensidad,
          aulaId: row.aulaId,
          profesorId: row.profesorId
        });
      })
      .on('end', async () => {
        try {

          await Curso.insertMany(cursos);
          console.log(`${cursos.length} cursos cargados`);
        } catch (err) {
          console.error('Error al cargar cursos:', err);
        }
      });
  }
}

module.exports = CursoETL;
