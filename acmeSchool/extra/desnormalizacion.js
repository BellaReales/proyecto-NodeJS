
const estudiantes = [
    {
        "estudianteId": "estudiante01",
        "identificacionType": "CC",
        "identificacionNumber": "123456789",
        "firstName": "Juan",
        "secondName": "Carlos",
        "apellido": "Pérez",
        "email": "juan.perez@gmail.com",
        "telefono": "3101234567",
        "inscripciones": [
            {
                "cursos" : {
                    "cursoId": "curso01",
                    "codigo": "CS101",
                    "nombre": "Introducción a la Programación",
                    "fechaInicio": "2023-03-01",
                    "fechaFin": "2023-06-01",
                    "intensidad": "60 horas",
                    "aula" : "aula01",
                    "prfesorId" : "profesor01"
                }
            }
        ]
    },


]

const profesores = [
    {
        "profesorId" : "profesor01",
        "nombre" : "Jose",
        "apellido" : "Rodriguez",
        "email" : "jose01rodriguez@gmail.com",
        "telefono" : "3115294917",
        "cursoId" : "curso01"
    }
]

const aulas = [
    {
        "aulaID" : "aula01",
        "codigo" : "AL01",
        "capacidad" : 45
    }
]

module.exports = {
    estudiantes,
    cursos,
    aulas,
    profesores
};