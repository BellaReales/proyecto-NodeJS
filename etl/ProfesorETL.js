const fs = require('fs');
const csv = require('csv-parser');
const Profesor = require('../models/Profesor');

class ProfesorETL {
    async loadFromCSV(filePath) {
        const profesores = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => profesores.push(data))
                .on('end', async () => {
                    const result = await Profesor.insertMany(profesores);
                    console.log(`✔️ Cargados ${result.length} profesores`);
                    resolve(result);
                })
                .on('error', reject);
        });
    }
}

module.exports = ProfesorETL;
