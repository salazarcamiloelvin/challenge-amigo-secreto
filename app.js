// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];


function agregarAmigo(){
    let amigo = document.getElementById('amigo');
    if(amigo.value == ''){
        alert('Digite un nombre valido');
    }
    else{
        listaDeAmigos.push(amigo.value);
    }

}