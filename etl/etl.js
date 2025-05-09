const conectarDB = require('./config/database');
const EstudianteETL = require('./etl/EstudianteETL');
const ProfesorETL = require('./etl/ProfesorETL');
const CursoETL = require('./etl/CursoETL');
const AulaETL = require('./etl/AulaETL');

const runETL = async () => {
    try {
        await conectarDB();
        console.log('🔁 Iniciando carga de datos...\n');

        const [estudiantes, profesores, cursos, aulas] = await Promise.all([
            EstudianteETL.cargarDatos(),
            ProfesorETL.cargarDatos(),
            CursoETL.cargarDatos(),
            AulaETL.cargarDatos()
        ]);

        console.log('\n✅ Carga completada exitosamente:');
        console.log(`   • Estudiantes cargados: ${estudiantes.length}`);
        console.log(`   • Profesores cargados: ${profesores.length}`);
        console.log(`   • Cursos cargados: ${cursos.length}`);
        console.log(`   • Aulas cargadas: ${aulas.length}`);
        
    } catch (error) {
        console.error('❌ Error en el proceso ETL:', error);
    } finally {
        process.exit();
    }
};

runETL();
