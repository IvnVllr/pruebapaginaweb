//llamar funcion

document.getElementById('boton_partidos_proximos').addEventListener('click', mostrar_proximo_partido);
document.getElementById('boton_liga_pos').addEventListener('click', mostrar_liga_posadenha);
document.getElementById('boton_liga_pos_fem').addEventListener('click', mostrar_liga_posadenha_femenino);


//funciones -> botones

function mostrar_proximo_partido(){
    document.getElementById('proximos_partidos_lista').style.display="";
    document.getElementById('fixture_liga_a_posadenha').style.display="none";
    document.getElementById('fixture_liga_femenina_posadenha').style.display="none";    
}

function mostrar_liga_posadenha(){
    document.getElementById('proximos_partidos_lista').style.display="none";
    document.getElementById('fixture_liga_a_posadenha').style.display="";
    document.getElementById('fixture_liga_femenina_posadenha').style.display="none";   
}

function mostrar_liga_posadenha_femenino(){
    document.getElementById('proximos_partidos_lista').style.display="none";
    document.getElementById('fixture_liga_a_posadenha').style.display="none";
    document.getElementById('fixture_liga_femenina_posadenha').style.display="";   
}

//mantener activo los botones

contenedorBotonesFixture = document.getElementById('botones_fixture');
botonesFixture = document.getElementsByClassName('boton_liga');

for(i = 0; i < botonesFixture.length; i++){
    botonesFixture[i].addEventListener('click', function mantenerPresionadoBotones(){
        claseActiva = document.getElementsByClassName('activo');
        claseActiva[0].className = claseActiva[0].className.replace('activo', '');
        this.className += " activo";
    })
}

