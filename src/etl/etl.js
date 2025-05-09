const conectarDB = require('./config/database');
const EstudianteETL = require('./etl/EstudianteETL');
const ProfesorETL = require('./etl/ProfesorETL');
const CursoETL = require('./etl/CursoETL');
const AulaETL = require('./etl/AulaETL');

const runETL = async () => {
    try {
        await conectarDB();

        const estudianteETL = new EstudianteETL();
        const profesorETL = new ProfesorETL();
        const cursoETL = new CursoETL();
        const aulaETL = new AulaETL();

        console.log('🔁 Iniciando carga de datos...\n');

        const [estudiantes, profesores, cursos, aulas] = await Promise.all([
            estudianteETL.loadFromCSV('./raw_data/Estudiante.csv'),
            profesorETL.loadFromCSV('./raw_data/Profesor.csv'),
            cursoETL.loadFromCSV('./raw_data/Curso.csv'),
            aulaETL.loadFromCSV('./raw_data/Aula.csv')
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
