const fs = require('fs');
const csv = require('csv-parser');
const Profesor = require('../models/Profesor.js');  

class ProfesorETL {
  static async cargarDatos() {
    const profesores = [];

    fs.createReadStream('../rawData/Profesor.csv')
      .pipe(csv())
      .on('data', (row) => {

        profesores.push({
          profesorId: row.profesorId,
          nombre: row.nombre,
          apellido: row.apellido,
          email: row.email,
          telefono: row.telefono,
          cursoId: row.cursoId
        });
      })
      .on('end', async () => {
        try {

          await Profesor.insertMany(profesores);
          console.log(`${profesores.length} profesores cargados`);
        } catch (err) {
          console.error('Error al cargar profesores:', err);
        }
      });
  }
}

module.exports = ProfesorETL;
