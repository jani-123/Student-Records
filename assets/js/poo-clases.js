class Estudiantes {
    constructor(){
        this.estudiante = [];
    }
    setup() {
        $("#btnAgregar").click(this.Agregar);
        $("#btnMostrar").click(this.MostrarTodo);
        $("#btnEliminar").click(this.Eliminar);
        $("#btnListar").click(this.Listar);
    }
    Agregar() {
        let nombre = prompt("Ingrese Nombre De La Estudiante");
        let puntosTecnicos = parseInt(prompt("Ingrese Puntos Tecnicos"));
        let puntosHSE = parseInt(prompt("Ingrese Puntos de HSE"));
        let alumno = function () {
            this.nombre = nombre;
            this.puntosTecnicos = puntosTecnicos;
            this.puntosHSE = puntosHSE;
            this.status = 'activo';
        }
        this.estudiante.push(new alumno);
        $("#resultado").append(this.mostrar(alumno(alumno.length - 1)));
    }
    mostrar(alumno) {
        $("#resultado").empty();
        for (let i in this.estudiante) {
            alumno = this.estudiante[i];
        }
        $("#resultado").append(`<div> <p><label>Nombre: </label> ${alumno.nombre} </p>\
                        <p><label>Puntos Tecnicos: </label> ${alumno.puntosTecnicos} </p>\
                        <P><label>Puntos HSE: </label> ${alumno.puntosHSE} </p></div>
                        <P><label>Estado: </label> ${alumno.status} </p></div>`);
    }
    mostrarlista(estudiante) {
        $("#resultado").empty();
        estudiante.map(function (arr) {
            $("#resultado").append(`<div> <p><label>Nombre: </label> ${arr.nombre} </p>\
            <p><label>Puntos Tecnicos: </label> ${arr.puntosTecnicos} </p>\
            <P><label>Puntos HSE: </label> ${arr.puntosHSE} </p></div>
            <P><label>Estado: </label> ${arr.status} </p></div>`);
        })
    }
    obtenerListaEstudiantes() {
        return this.estudiante;
    }
    MostrarTodo() {
        let Lista = this.obtenerListaEstudiantes();
        $("#resultado").append(this.mostrarlista(Lista));
    }
    Eliminar() {
        this.mostrarlista(this.estudiante.filter(function (arr) {
            return (arr.puntosTecnicos + arr.puntosHSE) / 2 >= 70;
        }));
    }
    Listar() {
        this.estudiante = this.estudiante.filter(function (arr) {
            return (arr.puntosTecnicos + arr.puntosHSE) / 2 >= 70;
        });
        this.mostrarlista(this.estudiante);
    }

}
let PruebaEstudiantes = new Estudiantes();
PruebaEstudiantes.setup();
