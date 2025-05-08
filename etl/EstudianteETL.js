const fs = require('fs');
const csv = require('csv-parser');
const Estudiante = require('../models/Estudiante.js'); 

class EstudianteETL {
  static async cargarDatos() {
    const estudiantes = [];

    fs.createReadStream('../rawData/Estudiante.csv')
      .pipe(csv())
      .on('data', (row) => {

        estudiantes.push({
          estudianteId: row.estudianteId,
          identificacionType: row.identificacionType,
          identificacionNumber: row.identificacionNumber,
          firstName: row.firstName,
          secondName: row.secondName,
          apellido: row.apellido,
          email: row.email,
          telefono: row.telefono,
          cursoId: row.cursoId
        });
      })
      .on('end', async () => {
        try {

          await Estudiante.insertMany(estudiantes);
          console.log(`${estudiantes.length} estudiantes cargados`);
        } catch (err) {
          console.error('Error al cargar estudiantes:', err);
        }
      });
  }
}

module.exports = EstudianteETL;
