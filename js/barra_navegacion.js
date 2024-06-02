//--------------------llamar a la funcion--------------------

document.getElementById('menu_hamburguesa').addEventListener('click', mostrarBarraNavegacion)
document.getElementById('menu_logo').addEventListener('click', cerrarBarraNavegacion)

//--------------------función barra navegación responsive--------------------

function mostrarBarraNavegacion(){
    const abrirbarraNavegacionResponsive = document.querySelector('.barra_nav_sidebar');
    abrirbarraNavegacionResponsive.style.display = 'flex';
}

function cerrarBarraNavegacion(){
    const cerrarbarraNavegacionResponsive = document.querySelector('.barra_nav_sidebar');
    cerrarbarraNavegacionResponsive.style.display = 'none';
}


//---------------------scrolldown y scrollup navegacion------------------------

ultimoScrollTop = 0;
headerBarraNavegacion = document.getElementById('header_barra_navegacion');

window.addEventListener('scroll', function(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > ultimoScrollTop){
        headerBarraNavegacion.style.top="-50px";
    }
    else {
        headerBarraNavegacion.style.top="0";
    }
    ultimoScrollTop = scrollTop
})