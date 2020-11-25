const elementoNombre = document.getElementById("Nombre");
const elementoAutor = document.querySelector("#autor");
const elementoTiempoPreparacion = document.querySelector("#tiempo-preparecion");
const elementoIngredientes = document.querySelector("#ingredientes");
const elementoProcedimiento = document.querySelector("#procedimiento");
const elementoBoton = document.querySelector("#btn-agregar-receta");

elementoBoton.addEventListener("click", agregarReceta)

function agregarReceta()
    const receta= {
        Nombre: elementoNombre.value;
        autor: elementoAutor.value;
        TiempoPreparacion: elementoTiempoPreparacion.value;
        ingredientes : elementoIngredientes.value;
        procedimiento:: elementoProcedimiento.value;

    }
    console.log (receta)