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
            //this.status = activo;
        }
        estudiante.push(new alumno);
        //return new alumno();
        // console.log(estudiante);
        $("#resultado").append(Estudiantes.mostrar(alumno));
    },
    mostrar: function (alumno) {
        for (let i in estudiante) {
            alumno = estudiante[i];
        }
        let cuadro = "";
        cuadro = (`<div> <p><label>Nombre: </label> ${alumno.nombre} </p>\
                        <p><label>Puntos Tecnicos: </label> ${alumno.puntosTecnicos} </p>\
                        <P><label>Puntos HSE: </label> ${alumno.puntosHSE} </p></div>`);
        return cuadro;
    },
    mostrarlista: function (estudiante) {
        var resultado = "";
        resultado.forEach(function(propiedades){
            resultado += Estudiantes.mostrar(propiedades);

        });
        
        return resultado;
    },
    obtenerListaEstudiantes: function () {
        return estudiante;
        console.log("sas", estudiante);
    },
    MostrarTodo: function () {
        let Lista = Estudiantes.obtenerListaEstudiantes();
        console.log("lista", Lista);
        $("#resultado").append(Estudiantes.mostrarlista(Lista));
    }

}
$(document).ready(Estudiantes.init);