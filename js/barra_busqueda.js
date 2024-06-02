//llamar a la funcion

document.getElementById("buscador_label").addEventListener("click", mostrarBuscador);
document.getElementById("buscar_cerrar_busqueda").addEventListener("click", ocultarBuscador);
document.getElementById("portada-contenedor-busqueda").addEventListener("click", ocultarBuscador);

//-------------------barra de busqueda------------------------

//variables de barra de busqueda

contenedorBuscador = document.getElementById("contenedor_busqueda");
buscador = document.getElementById("buscador");
botonBuscar = document.getElementById("buscar_accion");
cajaResultados = document.getElementById("caja_busqueda_resultados");
portadaContenedor = document.getElementById("portada-contenedor-busqueda");

//funciones

//mostar busqueda

function mostrarBuscador (){
    contenedorBuscador.style.top = "50px";
    portadaContenedor.style.opacity="1";
    portadaContenedor.style.display="block";
}

//ocultar busqueda

function ocultarBuscador (){
    contenedorBuscador.style.top = "-200px";
    portadaContenedor.style.opacity="0%";
    portadaContenedor.style.display="none";
    cajaResultados.style.display="-999px";
    buscador.value = "";
}


//buscador
