const estudiante = [];
const Estudiantes = {
    init: function () {
        Estudiantes.setup();
    },
    setup: function () {
        $("#btnAgregar").click(Estudiantes.Agregar);
        $("#btnMostrar").click(Estudiantes.MostrarTodo);
        $("#btnEliminar").click(Estudiantes.Eliminar);
        $("#btnListar").click(Estudiantes.Listar);
    },
    Agregar: function () {
        let nombre = prompt("Ingrese Nombre De La Estudiante");
        let puntosTecnicos = parseInt(prompt("Ingrese Puntos Tecnicos"));
        let puntosHSE = parseInt(prompt("Ingrese Puntos de HSE"));
        let alumno = function () {
            this.nombre = nombre;
            this.puntosTecnicos = puntosTecnicos;
            this.puntosHSE = puntosHSE;
            this.status = 'activo';
        }
        estudiante.push(new alumno);
        $("#resultado").append(Estudiantes.mostrar(alumno(alumno.length - 1)));
    },
    mostrar: function (alumno) {
        $("#resultado").empty();
        for (let i in estudiante) {
            alumno = estudiante[i];
        }
        $("#resultado").append(`<div> <p><label>Nombre: </label> ${alumno.nombre} </p>\
                        <p><label>Puntos Tecnicos: </label> ${alumno.puntosTecnicos} </p>\
                        <P><label>Puntos HSE: </label> ${alumno.puntosHSE} </p></div>
                        <P><label>Estado: </label> ${alumno.status} </p></div>`);
    },
    mostrarlista: function (estudiante) {
        $("#resultado").empty();
        estudiante.map(function (arr) {
            $("#resultado").append(`<div> <p><label>Nombre: </label> ${arr.nombre} </p>\
            <p><label>Puntos Tecnicos: </label> ${arr.puntosTecnicos} </p>\
            <P><label>Puntos HSE: </label> ${arr.puntosHSE} </p></div>
            <P><label>Estado: </label> ${arr.status} </p></div>`);
        })
    },
    obtenerListaEstudiantes: function () {
        return estudiante;
    },
    MostrarTodo: function () {
        let Lista = Estudiantes.obtenerListaEstudiantes();
        $("#resultado").append(Estudiantes.mostrarlista(Lista));
    },
    Eliminar: function () {

        estudiante = estudiante.filter(function (arr) {
            return (arr.puntosTecnicos + arr.puntosHSE) / 2 >= 70;
        });
        Estudiantes.mostrarlista(estudiante);
    },
    Listar: function () {
        Estudiantes.mostrarlista(estudiante.filter(function (arr) {
            return (arr.puntosTecnicos + arr.puntosHSE) / 2 >= 70;
        }));
    }
}
$(document).ready(Estudiantes.init);