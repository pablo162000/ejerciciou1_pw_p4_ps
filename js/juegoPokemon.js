var intento = 0;
var puntaje = 0;


function evaluar(nombrePokemon) {

   
    if (nombrePokemon == 'excadrill') {

        intento++;
        document.getElementById('idMensaje').innerHTML =
            '<strong>Felicitaciones, has seleccionado la opción correcta</strong>';
        document.getElementById('idMensaje').style.background='blue';
        document.getElementById('idMensaje').style.border='solid black';
        document.getElementById('idMensaje').style.font= '"Times New Roman", Times, serif';

        document.getElementById('idImagenBN').src = '../img/pcolor.jpg';

        if(intento==1){
            document.getElementById('puntaje').innerHTML ='Puntaje: ' + 5;
        }
        if(intento==2){
            document.getElementById('puntaje').innerHTML ='Puntaje: ' + 3;
        }
        if(intento==3){
            document.getElementById('puntaje').innerHTML ='Puntaje: ' + 1;
        }

    } else {

        document.getElementById('idMensaje').innerHTML =
        '<strong>Pokémon incorrecto, intentarlo nuevamente';
        intento = intento +1;
        document.getElementById('intentos').innerHTML = 'Intento: '+intento;
        if(intento==3){
            reiniciar();
        }





    }


   



}

function reiniciar() {

    document.getElementById('intentos').innerHTML = 'Intento: '+0;
    document.getElementById('puntaje').innerHTML = 'Puntaje: '+0;


    document.getElementById('idMensaje').innerHTML = '';

    document.getElementById('idMensaje').style.border = 'none';

    document.getElementById('idImagenBN').src = '../img/pnegro.jpg';




}