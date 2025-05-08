const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, '../raw_data');


if (!fs.existsSync(rawDataPath)) {
    fs.mkdirSync(rawDataPath);
}


const estudiantes = [
    ['estudianteId','identificacionType','identificacionNumber','firstName','secondName','apellido','email','telefono','cursoId'],
    ['estudiante01','CC','123456789','Juan','Carlos','Pérez','juan.perez@gmail.com','3101234567','curso01'],
    ['estudiante02','TI','987654321','Ana','María','Gómez','ana.gomez@gmail.com','3204567890','curso02']
];

const profesores = [
    ['profesorId','nombre','apellido','email','telefono','cursoId'],
    ['profesor01','Jose','Rodriguez','jose01rodriguez@gmail.com','3115294917','curso01'],
    ['profesor02','Laura','Ramirez','laura.ramirez@gmail.com','3123456789','curso02']
];

const aulas = [
    ['aulaID','codigo','capacidad'],
    ['aula01','AL01','45'],
    ['aula02','AL02','30']
];

const cursos = [
    ['cursoId','codigo','nombre','fechaInicio','fechaFin','intensidad','aulaId','profesorId'],
    ['curso01','CS101','Introducción a la Programación','2023-03-01','2023-06-01','60 horas','aula01','profesor01'],
    ['curso02','CS102','Estructuras de Datos','2023-07-01','2023-10-01','80 horas','aula02','profesor02']
];


const crearCSV = (nombreArchivo, data) => {
    const contenido = data.map(fila => fila.join(',')).join('\n');
    fs.writeFileSync(path.join(rawDataPath, `${nombreArchivo}.csv`), contenido);
    console.log(`✔️ ${nombreArchivo}.csv creado con éxito`);
};


crearCSV('Estudiante', estudiantes);
crearCSV('Profesor', profesores);
crearCSV('Aula', aulas);
crearCSV('Curso', cursos);
