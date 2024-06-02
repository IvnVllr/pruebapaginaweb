//---------------------scrolldown y scrollup boton var -----------------------

const botonArriba = document.getElementById('botones_scrolls_arriba');
const botonWhatsapp = document.getElementById('botones_scrolls_whatsapp');
const botonModoNocturno = document.getElementById('botones_scrolls_nocturno');

//--------------------funciones_------------------------------

window.addEventListener('scroll', ()=>{
    mostrarBotonScroll();
})

function mostrarBotonScroll(){

    //boton arriba

    if( 250 < window.scrollY){
        botonArriba.style.bottom = "20px";
        if (450 < window.scrollY)
            botonArriba.style.bottom = "75px";
        if(850 < window.scrollY){
            botonArriba.style.bottom = "130px";
        } 
    }else {
        botonArriba.style.bottom = "-100px";
    }

    //boton whatsApp

    if( 250 < window.scrollY){
        botonWhatsapp.style.bottom = "-100px";
        if (450 < window.scrollY)
            botonWhatsapp.style.bottom = "20px";
        if(850 < window.scrollY){
            botonWhatsapp.style.bottom = "75px";
        } 
    }else {
        botonWhatsapp.style.bottom = "-100px";
    }

    //boton Noctuno

    if( 250 < window.scrollY){
        botonModoNocturno.style.bottom = "-100px";
        if (450 < window.scrollY)
            botonModoNocturno.style.bottom = "-100px";
        if(850 < window.scrollY){
            botonModoNocturno.style.bottom = "20px";
        } 
    }else {
        botonModoNocturno.style.bottom = "-100px";
    }

}


//------------- Funcion Botones---------------------

//scroll top 

botonArriba.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//Modo nocturno > variables

const fixtureJuegos = document.querySelectorAll('.fixture_partidos');
const numeracionUltimaNoticia = document.querySelectorAll('.numeracion_ultima_noticia');
const tituloUltimaNoticia = document.querySelectorAll('.titulo_ultima_noticia');
const logoIvess = document.querySelectorAll('.ivess');

//funcion

botonModoNocturno.addEventListener("click", ()=>{
    botonModoNocturno.classList.toggle("modo_activo");
    document.body.classList.toggle("darkmode");

    for( i = 0; i < fixtureJuegos.length; i++){
        fixtureJuegos[i].classList.toggle('fixture_partidos_darkmode');
    }

    for( i = 0; i < numeracionUltimaNoticia.length; i++){
        numeracionUltimaNoticia[i].classList.toggle('numeracion_ultima_noticia_darkmode');
    }

    for( i = 0; i < tituloUltimaNoticia.length; i++){
        tituloUltimaNoticia[i].classList.toggle('titulo_ultima_noticia_darkmode');
    }

    for ( i = 0; i < logoIvess.length; i++){
        logoIvess[i].classList.toggle('ivess_darkmode');
    }


})