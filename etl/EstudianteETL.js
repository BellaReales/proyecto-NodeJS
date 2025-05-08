const fs = require('fs');
const csv = require('csv-parser');
const Estudiante = require('../models/estudiante');

class EstudianteETL {
    async loadFromCSV(filePath) {
        const estudiantes = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => estudiantes.push(data))
                .on('end', async () => {
                    const result = await Estudiante.insertMany(estudiantes);
                    console.log(`✔️ Cargados ${result.length} estudiantes`);
                    resolve(result);
                })
                .on('error', reject);
        });
    }
}

module.exports = EstudianteETL;
